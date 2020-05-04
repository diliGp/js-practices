import 'babel-polyfill';

function test() {
    return 'testing';
}

function* hello() {
    yield 'hello';
    yield 'hi';
    yield 'bye';
    yield 'bye';
    yield test()
}

const iterator = hello();
console.log(iterator, '>-->');

for(let i of iterator) {
    console.log(i);
}

const array = ['2', 3, 'eloo', 'naina'];
console.log(array);
for(let i of array) {
    console.log(i);
}