class Logger {
    logs = [];

    constructor() {
        /**
         * Setting an instance to make it available for all the places logging is caused.
         */
        if (!Logger.instance) {
            Logger.instance = this;
        }
        return Logger.instance;
    }

    log(value) {
        this.logs.push(value);
    }

    printLogs() {
        console.log(this.logs);
    }
}

/**
 * Creating the one instance to be shared accross the application. 
 */
const logger = new Logger();

/**
 * Freezing `logger` instance so that neither it can be modified 
 * nor anything can be added inside the `logger` instance.
 */
Object.freeze(logger);

/**
 * Export the single instance to every place.
 * So all the logging functionality will be dependent on this logger instance 
 * and won't be able to instanciate the `Logger` class again.
 * 
 * THIS IS KNOWN AS SINGLETON PATTERN.
 */
export default logger;