// import './animations';

const start = performance.now();


console.log('Sync 1');

(function() {
    let i;
    while (i < 1e560000000000000000000000000000000000000000000000000000) {
        i++;
    }
    
    console.log('after a while')
    const now = performance.now();
    console.log(`While time spent: `, (now - start) * 1000)
})

setTimeout(_ => {
    console.log('Timeout');
    const now = performance.now();
    console.log(`Timeout time: `, (now - start) * 1000);
}, 0);

new Promise((res, rej) => res()).then(_ => {
    console.log('Promise')
    const now = performance.now();
    console.log(`Promise time: `, (now - start) * 1000);
});

console.log('sync 2');

const end = performance.now();
console.log(`Total time spent: `, (end - start) * 1000);

/*
Output In Chrome:
Sync 1
Sync 2
Promise
Timeout

Promise and Timeout both are async items but Promise has much priority than Timeout.
In chrome promise is a microtask and timeout is a task.
In simple words promise gets pushed to job queue which has higher priority than
callback queue (in which timeout gets pushed).
*/