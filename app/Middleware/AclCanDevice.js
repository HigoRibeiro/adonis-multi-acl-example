'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ForbiddenException = require('adonis-acl/src/Exceptions/ForbiddenException');

class AclCanDevice {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ auth, request }, next, ...args) {
    let expression = args[0]
    if (Array.isArray(expression)) {
      expression = expression[0]
    }

    const device = await auth.user.deviceJoins().where('device_id', request.device.id).first()

    const can = await device.can(expression);

    if (!can) {
      throw new ForbiddenException()
    }

    await next()


    await next()
  }
}

module.exports = AclCanDevice
