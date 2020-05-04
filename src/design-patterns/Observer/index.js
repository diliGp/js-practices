/**
 * Observer is also known as PubSub pattern.
 * It works like event driven functioning.
 * 
 * There's a subscriber which subscribes observers/clients (who's looking for
 * an event to handle whenever there's any change happened).
 * There's a publisher which triggers the event of happened changes.
 */

function Subject() {
    this.color = 'red';
    this.observers = [];
}

Subject.prototype.subscribe = function(observer) {
    this.observers.push(observer);
    console.log(`Subscribed ${observer}`)
}

Subject.prototype.unsubscribe = function(observer) {
    this.observers = this.observers.filter(ob => ob !== observer);
    console.log(`Unsubscribed ${observer}`)
}

Subject.prototype.trigger = function() {
    this.observers && this.observers.length > 0 && 
    this.observers.map(observer => observer());
}


const observer1 = function() {
    console.log('Triggered observer 1...');
}

const observer2 = function() {
    console.log('Triggered observer 2...');
}

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);

function patchButton() {
    const notifyBtn = document.createElement('button');
    notifyBtn.innerHTML = 'Notify';
    document.body.appendChild(notifyBtn);

    const unsubBtn1 = document.createElement('button');
    unsubBtn1.innerHTML = 'Unsubscribe Observer 1';
    document.body.appendChild(unsubBtn1);
    
    const unsubBtn2 = document.createElement('button');
    unsubBtn2.innerHTML = 'Unsubscribe Observer 2';
    document.body.appendChild(unsubBtn2);

    notifyBtn.addEventListener('click', () => subject.trigger())
    unsubBtn1.addEventListener('click', () => subject.unsubscribe(observer1))
    unsubBtn2.addEventListener('click', () => subject.unsubscribe(observer2))
}
patchButton();