import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { UserModel } from '../user/user.model'
import { CurrencyModel } from '../currency/currency.model'

@Table({
	tableName: 'order',
	deletedAt: false,
	updatedAt: false,
	version: false
})
export class OrderModel extends Model<OrderModel> {
	@Column
	date: Date

	@Column
	type: string

	@Column
	amount: number

	@ForeignKey(() => UserModel)
	@Column
	userId: number

	@BelongsTo(() => UserModel)
	user: UserModel

	@ForeignKey(() => CurrencyModel)
	@Column
	currencyId: number

	@BelongsTo(() => CurrencyModel)
	currency: CurrencyModel
}
