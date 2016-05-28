'use strict'

exports.routePlugin = (name, routes) => {
  const register = (server, options, next) => {
    routes.forEach((route) => server.route(route))
    next()
  }

  register.attributes = { name }
  return register
}
