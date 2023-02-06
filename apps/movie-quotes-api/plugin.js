'use strict'

const path = require("path")
const { remixFastifyPlugin } = require("@mcansh/remix-fastify")

const remixRoot = path.join(process.cwd(), '../movie-quotes-frontend')

module.exports = async function (app) {
  app.register(remixFastifyPlugin, {
    build: path.join(remixRoot, 'build/index.js'),
    mode: process.env.NODE_ENV,
    rootDir: remixRoot,
    getLoadContext: (request) => ({})
  })
}
