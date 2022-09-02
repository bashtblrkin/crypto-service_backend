import { createParamDecorator, ExecutionContext, UseGuards } from '@nestjs/common'
import { AuthModel } from '../auth.model'
import { AuthGuard } from '@nestjs/passport'

export const Auth = () => UseGuards(AuthGuard('jwt'))

export const CurrentAuthUser = createParamDecorator(
	(data: keyof AuthModel, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const authUser = request.user

		return data ? authUser[data] : data
	}
)