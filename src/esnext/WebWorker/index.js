/**
 * This line is juse for webpack to understand the workers.
 * Otherwise we'll pass the worker file as an argument while 
 * instantiating the `Worker` thread at line 18.
 * @example const worker = new Worker('Worker.js');
 */
import Worker from 'worker-loader!./Worker.js';

console.log(
    '%c WebWorker API Section:-',
    `
        font-size: 30px; 
        color: Orange; 
        text-decoration: underline;
    `
);

const worker = new Worker();
worker.postMessage('FETCH_POSTS');

/**
 * Worker task is done.
 */
worker.onmessage = (event) => {
    const todos = event.data;
    console.log('Returned back...', event);
}

/**
 * Error handling
 */
worker.onerror = (error) => {
    console.log(error.message, '---');
}
