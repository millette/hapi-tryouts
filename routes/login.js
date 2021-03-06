'use strict'

const secure = false
const cookiePassword = 'cookie_encryption_password_secure'

exports.register = (server, options, next) => {
  server.auth.strategy('session', 'cookie', {
    password: cookiePassword,
    // redirectTo: '/login/github',
    isSecure: secure     // Terrible idea but required if not using HTTPS especially if developing locally
  })

  // Declare an authentication strategy using the bell scheme
  // with the name of the provider, cookie encryption password,
  // and the OAuth client credentials.
  server.auth.strategy('github', 'bell', {
    provider: 'github',
    password: cookiePassword,
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    isSecure: secure     // Terrible idea but required if not using HTTPS especially if developing locally
  })

  server.route({
    method: 'GET',
    path: '/out',
    config: {
      auth: 'session',
      handler: (request, reply) => {
        request.cookieAuth.clear()
        return reply('Login out.')
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: {
        mode: 'optional',
        strategies: ['session']
      },
      handler: (request, reply) => {
        return reply.view('login', { request })
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/github',
    config: {
      auth: 'github',
      handler: (request, reply) => {
        if (!request.auth.isAuthenticated) {
          return reply('Authentication failed due to: ' + request.auth.error.message)
        }
        request.auth.credentials.profile.name = request.auth.credentials.profile.username
        request.cookieAuth.set(request.auth.credentials)
        const Users = request.collections.users
        console.log('PROFILE:', request.auth.credentials.profile)
        return Users.findOrCreate(request.auth.credentials.profile.id, request.auth.credentials.profile)
          .then((user) => reply.view('user', { user }).etag(user.updatedAt))
        // return reply.redirect('/')
      }
    }
  })

  next()
}

exports.register.attributes = {
  name: 'login',
  version: '0.0.0',
  dependencies: ['vision', 'bell', 'hapi-auth-cookie']
}
