import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { InjectModel } from '@nestjs/sequelize'
import { UserModel } from '../../user/user.model'
import { AuthModel } from '../auth.model'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		@InjectModel(UserModel)
		private readonly authModel: typeof UserModel
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: configService.get('JWT_SECRET')
		})
	}

	async validate({ id }: Pick<AuthModel, 'id'>) {
		return this.authModel.findByPk(id)
	}
}
