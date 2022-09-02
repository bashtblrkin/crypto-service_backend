import {
	BelongsTo,
	Column,
	ForeignKey,
	Model,
	Table
} from 'sequelize-typescript'
import { UserModel } from '../user/user.model'
import { CurrencyModel } from '../currency/currency.model'

@Table({
	tableName: 'wallet',
	deletedAt: false,
	updatedAt: false,
	version: false
})
export class WalletModel extends Model<WalletModel> {
	@Column
	amount: number

	@Column
	profit: number

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
