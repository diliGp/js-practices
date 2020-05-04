import logger from "./Logger"

export const logSomething = () => {
    logger.printLogs();
    logger.log('First log something...');
    logger.printLogs();
}

export const logSomethingNew = () => {
    logger.printLogs();
    logger.log('Then log something new ...');
    logger.printLogs();
}

/**
 * Creating one logger instance in logger file is saving us here, 
 * otherwise we could have generated different-2 instances of Logger class 
 * and every instance would have stored the separte logs.
 * 
 * 
 * Since the every logging is dependent on one Logger instance, this is known as 
 * SINGLETON PATTERN.
 */