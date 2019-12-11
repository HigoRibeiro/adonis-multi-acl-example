'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserDeviceSchema extends Schema {
  up () {
    this.create('device_users', (table) => {
      table.increments()
      table.integer('user_id').references('id').on('users').onDelete('cascade')
      table.integer('device_id').references('id').on('devices').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_devices')
  }
}

module.exports = UserDeviceSchema
