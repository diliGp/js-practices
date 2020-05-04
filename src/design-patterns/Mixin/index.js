console.log(
    '%c Mixins ',
    `
        color: teal;
        font-size: 30px;
        text-decoration: underline;
    `
);

/**
 * Since multiple inheritance can't be done in js,
 * mixin is a way to perform the multiple inheritance.
 */


const speechTraining = {
    sayHi() {
        return `Hi ${this.name}`;
    },
    sayAge() {
        return `My age is ${this.age}`;
    }
};

const actionsTraining = {
    walk() {
        return `${this.name} is started walking.`;
    },
    run() {
        return `Yay! ${this.name} is running now.`;
    }
}

/**
 * Class Person
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

/**
 * This is multiple inheritance happening here using Mixin(Multiple objects are mixing in).
 * Person class is inheriting multiple objects properties at once.
 * This can be done to `User` class as well, but since `User` is inheriting `Person`
 * so all these all the properties will be avaialble to `User` class.
 */
Object.assign(Person.prototype, actionsTraining, speechTraining);

/**
 * User inherits the Person class.
 */
class User extends Person {
    constructor(name, age, username, email) {
        super(name, age);

        this.username = username;
        this.email = email;
    }

    /**
     * This method will refer to `this`(instantiated object)
     * because this is arrow function which takes lexical scope.
     */
    getUserData = () => {
        return {
            email: this.email,
            username: this.username
        };
    }

    /**
     * This method will be available in prototype.
     */
    getUsername() {
        return this.username;
    }

    /**
     * This method will be refering to `this`(instantiated object)
     * because we're assigin an anonymous function to `getEmail` property
     * so this function will be considered as a property holding a value as function.
     */
    getEmail = function() {
        return `My email is ${this.email}`;
    }
}

const user1 = new User('John', 28, 'johndoe1', 'johndoe1@test.com');
console.log(user1);
console.log(user1.sayHi());
console.log(user1.sayAge());
console.log(user1.getEmail());

const user2 = new User('Nikita', 26, 'nikita1', 'nikita1@test.com');
console.log(user2);