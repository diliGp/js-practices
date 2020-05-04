class A {
    propA = 'Hello'
    render() {
        return this.propA;
    }
}

class B extends A {
    propB = 'world'
    
    render() {
        return `${super.render()} ${this.propB}`;
    }
}

const b = new B();

console.log(b.render());
