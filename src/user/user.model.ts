import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { WalletModel } from '../wallet/wallet.model'
import { OrderModel } from '../order/order.model'

@Table({
	tableName: 'user',
	deletedAt: false,
	version: false
})
export class UserModel extends Model<UserModel> {
	@Column
	name: string

	@Column({ unique: true })
	email: string

	@Column({ field: 'avatar_path' })
	avatarPath: string

	@HasMany(() => WalletModel)
	wallets: WalletModel[]

	@HasMany(() => OrderModel)
	orders: OrderModel[]
}
