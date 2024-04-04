// Importing required modules
const feathers = require('@feathersjs/feathers');
const { koa } = require('@feathersjs/koa');
const bodyParser = require('./middleware/bodyParser');
const errorHandler = require('./middleware/errorHandler');
const echoRouter = require('./routes/echo'); 

// Creating a new Feathers application instance using Koa
const app = koa(feathers());

// Adding middleware for parsing request body
app.use(bodyParser());
app.use(errorHandler());

// Adding router for handling echo requests
app.use(echoRouter);

// Defining the port for the server to listen on
const port = 4000;

// Starting the server and logging a message upon successful start
app.listen(port).then(() => console.log(`Feathers app running on http://localhost:${port}`));
