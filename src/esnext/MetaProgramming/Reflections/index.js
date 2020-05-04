/**
 * Reflect is a built-in object which provieds methods for interceptable operations.
 * It's not a function/contructor.
 * 
 * @imp Reflect helps with forwarding default operations from the handler to the target.
 * 
 */


//  1. In JS (ES5)
console.log('assign' in Object)             // True

// 1. In ES Next
console.log(Reflect.has(Object, 'assign'))  // True


const func = (a, b) => {
    return a + b;
}

// 2. In ES5
console.log(func.apply(undefined, [5, 9]))
console.log(Function.prototype.apply.call(func, undefined, [5, 9]))

// 2. In Es Next
console.log(Reflect.apply(func, undefined, [5, 9]))


// 3. In ES5
const Person = function(name) {
    const personName = name || 'Mamta';
    try {
        Object.defineProperty(this, 'sayName', {
            get() {
                return personName;
            }
        });

        return {
            isCreated: true,
            sayName: this.sayName
        };
    } catch (error) {
        console.log(error)
    }
}

const Raj = new Person('Raj');
console.log(Raj.isCreated);
console.log(Raj.sayName);

// 3. In ES Next
const NewPerson = function(name) {
    const personName = name || 'Mamta';
    const isProprtyCreated = Reflect.defineProperty(this, 'sayName', {
        get() {
            return personName;
        }
    });

    return {
        isSayNameCreated: isProprtyCreated,
        sayName: this.sayName
    }
};

const mamta = new NewPerson();
console.log(mamta.isSayNameCreated, '---');
console.log(mamta.sayName);