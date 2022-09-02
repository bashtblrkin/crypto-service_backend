import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { WalletModel } from '../wallet/wallet.model'
import { OrderModel } from '../order/order.model'

@Table({
	tableName: 'currency',
	deletedAt: false,
	createdAt: false,
	updatedAt: false,
	version: false
})
export class CurrencyModel extends Model<CurrencyModel> {
	@Column({ unique: true })
	name: string

	@Column({ unique: true })
	ticker: string

	@Column
	price: number

	@Column
	capital: number

	@Column
	capacity: number

	@Column
	change24h: number

	@Column
	change7d: number

	@HasMany(() => WalletModel)
	wallets: WalletModel[]

	@HasMany(() => OrderModel)
	orders: OrderModel[]
}
