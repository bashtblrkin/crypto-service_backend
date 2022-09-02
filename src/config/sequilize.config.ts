import { ConfigService } from '@nestjs/config'
import { SequelizeModuleOptions } from '@nestjs/sequelize'
import { Logger } from '@nestjs/common'

export const getSequelizeConfig = async (
	configService: ConfigService
): Promise<SequelizeModuleOptions> => ({
	dialect: 'postgres',
	host: '127.0.0.1',
	port: configService.get('PORT'),
	database: configService.get('DATABASE'),
	username: configService.get('MYUSERNAME'),
	password: configService.get('PASSWORD'),
	autoLoadModels: true,
	synchronize: true,
	logging: (sql: string) => {
		Logger.log(sql)
	}
})

