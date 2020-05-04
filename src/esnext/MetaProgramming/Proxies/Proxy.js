console.log(
    '%c Proxy API Section:-',
    `
        font-size: 30px; 
        color: teal; 
        text-decoration: underline;
    `
);

/**
 * Proxy Api is used to define custom behaviour of fundamental/Basic operations.
 * (e.g., property lookup, assignment, enumeration, function invocation, etc.).
 * 
 * @usedTerm - **handler** <!-- Placeholder object that contains traps.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)
 * 
 * @usedTerm - **traps** <!-- The methods that provide property access. 
 * This is analogous to the concept of traps in operating systems.
 * 
 * @usedTerm - **target** <!-- The methods that provide property access. 
 * 
 * @syntax - new Proxy(target, handler)
 * 
 */

const obj = {
    a: 90,
    b: 10,
    sum() {
        return this.a + this.b;
    }
}

const addExtraAmount = (a, b, amt) => {
    console.log(this, amt);
    return a + b + amt;
}

const p = new Proxy(obj, {
    get(target, prop) {
        console.log(prop);
        const customizable = {
            sum: addExtraAmount
        };

        if (prop in target) {
            if (prop === 'sum') {
                const op = customizable[prop](target.a, target.b, 12);
                console.log(op);
                return op;
            }
        }

        return 'Nahi Mila';
    }
});

p.name = 'Shruti';

/* console.log(p.a); // 90
console.log(p.__proto__); // Returns the __proto__ prop.
console.log(p.name); // Shruti

console.log(p.sum);
console.log(obj.sum());
 */

const person = {
    first: 'Neha',
    last: 'Sharma',
    profession: 'IT Developer',
    studies: 'B. Tech'
};

const p1 = new Proxy(person, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        }

        return prop.split('_').map(chunk => target[chunk]).join(' ');
    }
});

console.log(p1.first);                          // Neha
console.log(p1.last);                           // Sharma
console.log(p1.first_last);                     // Neha Sharma 
console.log(p1.first_last_studies);             // Neha Sharma B. Tech
console.log(p1.first_last_studies_profession);  // Neha Sharma B. Tech IT Develop

console.log(
    '%c -------------------',
    'color: orange; font-size: 20px'
);


const IndexedArray = new Proxy(Array, {
    /**
     * Trapped whenevr new object of `Array` will be instantiated.
     * @param {*} target 
     * @param {*} param1 
     * @param {*} objRef 
     */
    construct(target, [args]) {
        const indexes = {};

        /**
         * Generating an indexed object for instant search.
         */
        args.forEach(arg => {
            indexes[arg.id] = arg; 
        });

        /**
         * Creating a new array same as passed through the constructor.
         */
        const newArray = new target([...args]);

        /**
         * Returning proxy to trap push and findById function,
         * to tweak their behavior.
         * 
         * @reason push: Whenevr new items will be pushed to array, 
         * new idex should be genrated in our indexed object.
         * 
         * @reason findById: Just binding a method to search items from `IndexedArray`
         * efficienty using `indexes` object.
         */
        return new Proxy(newArray, {
            get(target, prop) {
                switch(prop) {
                    case 'push':
                        return function(item) {
                            console.log('pushing...', item);
                            indexes[item.id] = item
                            return target[prop].call(target, item);
                        }
                    case 'findById':
                        return function(id) {
                            return indexes[id];
                        }
                    default:
                        return target[prop];
                }
            }
        })
    },
});

const initialArray = [{
    id: 1,
    name: 'Neha'
}, {
    id: 2,
    name: 'Komal'
}];

const h = new IndexedArray(initialArray);
console.log(h.push({
    id: 3,
    name: 'Suruchi'
}));

console.log(h.findById(1));
console.log(h.findById(2))
console.log(h.findById(3))