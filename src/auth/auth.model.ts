import { Column, Model, Table } from 'sequelize-typescript'

@Table({
	tableName: 'auth',
	deletedAt: false,
	version: false,
	defaultScope: {
		attributes: {
			exclude: ['password']
		}
	}
})
export class AuthModel extends Model<AuthModel> {
	@Column({ unique: true })
	email: string

	@Column
	password: string

	@Column({allowNull: true})
	token: string
}
