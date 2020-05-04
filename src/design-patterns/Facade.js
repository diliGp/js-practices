/**
 * Facade pattern is nothing but making the code reusable like putting a mask 
 * and passing some params will generate the code for different different uses. 
 * 
 * Like in the below example we're using `getUser` and `getPosts` function with 
 * almost same functionality, so we can make the reusable.
 */


/* 

<!-- Previous code -->

const getUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
};

const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}; 
*/


export const getUser = () => {
    console.log('Fetching totdo Api...');
    return fetchApis('https://jsonplaceholder.typicode.com/todos/1')
};

export const getPosts = () => {
    return fetchApis('https://jsonplaceholder.typicode.com/posts')
};

const fetchApis = (url, params = {}) => {
    return fetch(url, params)
        .then(response => response.json())
        .then(json => console.log(json))
};
