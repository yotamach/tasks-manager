const pino = require('pino');
// log levels system
const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
};

// create a Pino logger
const logger = pino({
  // set the own levels
  customLevels: levels,
  // use only the custom levels
  useOnlyCustomLevels: true,
  // the minimum log level to be display
  level: "http",
  prettyPrint: { 
    colorize: true,
    levelFirst: true,
    translateTime: 'yyyy-mm-dd HH:MM:ss',
   },
  });

  const pinoHttp = require('pino-http')({
    logger,
    customAttributeKeys: {
      req: 'request',
      res: 'response',
      err: 'error',
      responseTime: 'timeTaken'
    },
    serializers: {
      req (req) {
        req.body = req.raw.body;
        return req;
      },
      res (res) {
        return res;
      }
    },
    customLogLevel: (res, err) => {
      let lebel = 'info';
      switch (true) {
        case (500 <= res.statusCode && res.statusCode < 599):
          lebel = 'error';
          break;
        case (400 <= res.statusCode && res.statusCode < 499):
          lebel = 'warn';
          break;
        default:
          lebel = 'info';
      }
      return lebel;
    }
  });
// export the logger
module.exports = {
   pinoHttp,
   logger
};
