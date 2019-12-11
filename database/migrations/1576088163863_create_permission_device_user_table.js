'use strict'

const Schema = use('Schema')

class PermissionUserTableSchema extends Schema {
  up () {
    this.create('device_user_permission', table => {
      table.increments()
      table.integer('permission_id').unsigned().index()
      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.integer('device_user_id').unsigned().index()
      table.foreign('device_user_id').references('id').on('device_users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('permission_user')
  }
}

module.exports = PermissionUserTableSchema
