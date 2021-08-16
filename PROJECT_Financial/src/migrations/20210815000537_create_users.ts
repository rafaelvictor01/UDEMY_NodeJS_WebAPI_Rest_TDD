import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('users', myNewUsersTable => {
    myNewUsersTable.increments('id').primary()
    myNewUsersTable.string('name').notNullable()
    myNewUsersTable.string('email').notNullable().unique()
    myNewUsersTable.string('password').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
