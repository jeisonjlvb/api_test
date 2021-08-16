var winston = require('winston');
// Wrap Winston logger to print reqId in each log
var formatMessage = function (req, mensaje) {
    //var reqId = httpContext.get('reqId');
    msj = '[' + new Date().toISOString().slice(0, 10) + ' ' + new Date().toLocaleTimeString() +'] ';
    msj += '[path: ' + req.path + '] ';
    msj += '[' + mensaje + '] ';
    msj += '[reqId: ' + req.id + '] ';
    //msj += '[request: ' + JSON.stringify(req.body) + '] ';

    message = msj;
    return message;
};

const wlog = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    //defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({ filename: 'logs/error_' + new Date().toISOString().slice(0, 10).split('-').join('') +'_0.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/audit_' + new Date().toISOString().slice(0, 10).split('-').join('') + '_0.log', maxsize: 5242890 })
    ]
});


var logger = {
    log: function (level, req, message) {
        wlog.log(level, formatMessage(req, message));
    },
    error: function (req, message) {
        wlog.error(formatMessage(req, message));
    },
    warn: function (req, message) {
        wlog.warn(formatMessage(req, message));
    },
    verbose: function (req, message) {
        wlog.verbose(formatMessage(req, message));
    },
    info: function (req, message) {
        wlog.info(formatMessage(req, message));
    },
    debug: function (req, message) {
        wlog.debug(formatMessage(req, message));
    },
    silly: function (req, message) {
        wlog.silly(formatMessage(req, message));
    }
};
module.exports = logger;