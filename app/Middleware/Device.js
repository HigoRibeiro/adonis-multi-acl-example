'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Device {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    // call next to advance the request

    const slug = request.header('DEVICE')

    let device = null

    if (slug) {
      device = await auth.user
        .devices()
        .where('slug', slug)
        .first()
    }

    if (!device) {
      return response.status(401).send('You cannot access here')
    }

    auth.user.currentDevice = device.id
    request.device = device

    await next()
  }
}

module.exports = Device
