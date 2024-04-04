const Router = require('koa-router');
const EchoService = require('../services/EchoService');

// Creating a new instance of Koa router
const router = new Router();

// Handle POST requests to /echo
router.post('/echo', async (ctx) => {
  // Create a new instance of the EchoService and handle the request
  const echoService = new EchoService();
  ctx.body = await echoService.create(ctx.request.body);
});

module.exports = router.routes();