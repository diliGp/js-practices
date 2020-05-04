
const Person = function (name, age) {
    this.age = age;
    this.name = name;
}

Person.prototype.personInfo = function () {
    return `
        name: ${this.name}
        age: ${this.age}
    `;
};

const Employee = function (name, age, salary) {
    /**
     * This is like calling super to bind the parent's properties into current this.
     */
    Person.call(this, name, age);

    this.salary = salary;
}


Employee.prototype = Object.create(Person.prototype);
// Object.setPrototypeOf(Employee.prototype, Person.prototype);
// Employee.prototype = Object.assign(Employee.prototype, Person.prototype);

Employee.prototype.employeeDetails = function () {
    return `
        name: ${this.name}
        age: ${this.age}
        salary: ${this.salary}
    `;
}

Person.prototype.getPersonName = function () {
    return this.name;
}

const emp1 = new Employee('Emp 1', 26, 10000);
console.log(emp1);
console.log(emp1.personInfo());
console.log(emp1.employeeDetails());
console.log(emp1.getPersonName());