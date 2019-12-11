'use strict'

const Schema = use('Schema')

class RoleUserTableSchema extends Schema {
  up () {
    this.create('device_user_role', table => {
      table.increments()
      table.integer('role_id').unsigned().index()
      table.foreign('role_id').references('id').on('roles').onDelete('cascade')
      table.integer('device_user_id').unsigned().index()
      table.foreign('device_user_id').references('id').on('device_users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('role_user')
  }
}

module.exports = RoleUserTableSchema
