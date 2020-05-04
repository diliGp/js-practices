self.addEventListener('message', (event) => {
    console.log(event, event.data);
    if(event.data !== 'FETCH_POSTS') {
        return;
    }
    console.log(event, event.data);
    
    let i = 0;
    while(i < 10e3) {
        i++;
    }

    throw new Error('Something went wrong!!');
    
    console.log(event, event.data);
    console.log('while done...')
    fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json()).then(todos => {
        self.postMessage(todos);
    }).catch(error => {
        self.postMessage('Something went wrong!!');
    });
});