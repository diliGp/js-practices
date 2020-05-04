console.log('%c <--  Inside Getter/Setter -->', 'color: teal; font-size: 25px; font-weight: bold');

const Circle = function () {
    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.draw = function () {
        console.log('Drawing...');
    }

    /**
     * Due to Object.defineProperty we'll be able to access `defaultLocation`
     * without calling as a function.
     */
    Object.defineProperty(this, 'defaultLocation', {
        get() {
            return defaultLocation;
        },
        set(location) {
            if (!location.x || !location.y) {
                throw Error('Invalid location data!!');
            }

            defaultLocation = location;
        }
    })
}

const c1 = new Circle();
c1.draw();
/**
 * We can't set `defaultLocation` if setter function is not defined.
 */
c1.defaultLocation = {
    x: 3,
    y: 6
};
console.log(
    /**
     * We can't get `defaultLocation` from c1 if getter function is not defined
     * because `defaultLocation` is internal/private property of the constructor.
     */
    c1.defaultLocation
);

const callPerson = function (personName = '') {
    const name = personName || 'Neha';

    return {
        prop2: 'Value 2',
        get sayName() {
            return name;
        },
        get prop() {
            return this.prop2;
        },
        set prop(val) {
            this.prop2 = val
        }
    }
}

const person = callPerson(); 
/* console.log(person.prop = 'Neelima')
console.log(person.prop2)
console.log(callPerson().sayName)
console.log(callPerson('Sneha').sayName)
console.log(callPerson('Ruchi').sayName); */