const myServer = require('./MyServer');
const myRouter = require('./MyRouter');
const myHandler = require('./MyHandler');

let handle = {};
handle['/'] = myHandler.start;
handle['/hello'] = myHandler.hello;
handle['/wait'] = myHandler.wait;
handle['/randomwait'] = myHandler.randomwait;
handle['/firsthtml'] = myHandler.firsthtml;
handle['/serverInfo'] = myHandler.serverInfo;

myServer.start(myRouter.route, handle);