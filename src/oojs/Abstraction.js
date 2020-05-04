/**
 * Abstraction is a concept which lets us expose the necessary things only 
 * to the outside world!!. Rest of the logic is hidden from out side world.
 */


 function Car(type, brand) {
     /**
      * Private property.
      */
    const _wheels = 4;

    this.type = type;
    this.brand = brand;
    this.drive = function() {
        console.log(`${this.brand} car started getting driven with ${_wheels} wheels...`);
    }
 }

 const bmw = new Car('Petrol', 'BMW');
 bmw.drive();