const feathers = require('@feathersjs/feathers');
const { koa } = require('@feathersjs/koa');
const bodyParser = require('./middleware/bodyParser');
const errorHandler = require('./middleware/errorHandler');
const echoRouter = require('./routes/echo'); 

const app = koa(feathers());

app.use(bodyParser());
app.use(errorHandler());
app.use(echoRouter);


const port = 4000;
app.listen(port).then(() => console.log(`Feathers app running on http://localhost:${port}`));
