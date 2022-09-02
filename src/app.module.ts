import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { getSequelizeConfig } from './config/sequilize.config'
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { CurrencyModule } from './currency/currency.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getSequelizeConfig
		}),
		UserModule,
		CurrencyModule,
		WalletModule,
		OrderModule,
		AuthModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
