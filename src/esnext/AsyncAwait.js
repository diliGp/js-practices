import 'babel-polyfill';

/**
 * Fucntion should be async.
 */
const p1 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');
    console.log(await response.json());
}

p1();


/**
 * Use in loop/conditions 
 * wait can be used in conditions/loops etc. as well.
 */
const p2 = async () => await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

const p3 = async () => {
    for (let post of await p2()) {
        console.log(post, '---');
    }
}
p3();
