'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.post('/test-integration', async (request, reply) => {
    const { message } = request.body;
    return { messageReceived: message };
  });
}
