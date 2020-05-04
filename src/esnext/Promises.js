/**
 * Basic Promise Resolving.
 */
const p1 = new Promise((resolve, reject) => {
    const tableContent = ['Hello', 'World', 'Promise', 'Resolved'];
    resolve(
        console.table(tableContent),
        console.table({
            hello: 'Hello',
            tableContent
        }),
        console.table({
            hello: 'Hello',
            tableContent: {
                name: 'Baudam',
                array: tableContent
            }
        }),
    );
});

p1.then(output => {
    console.log('After Promise is resolved');
    console.log(output);
    console.log('------------------------------------------');
});

/**
 * Basic Promise Rejections.
 */
const p2 = new Promise((resolve, reject) => {
    reject(
        new Error('Error ouccured')
    );
});


/**
 * There are two ways to handle the errors.
 * 1. Passing a callback as second argument into then block.
 */
p2.then(res => '', err => {
    console.log(err);
});

/**
 * There two ways to handle the errors.
 * 2. Adding catch block - Standard/Prioritized(if both present) Way
 */
p2.then(res => {
    console.log(res, '==');
    console.log(p2, '==');
}).catch((err) => {
    console.log(err, '->')
    console.log(p2, '->');
    console.log('---------------------------');
});


const callPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('Inside Promise');
    })
}

/**
 * Handling chained promises.
 */
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data =>{
    console.log(data, '----');
    return callPromise();
}).then(res => {
    console.log(res,'<<<');
    return fetch('https://jsonplaceholder.typicode.com/todos/9')
}).then(console.log).catch(console.log);

