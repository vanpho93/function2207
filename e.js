function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() {
        console.log('Hello, I am ' + this.name + ' toi ' + this.age + ' tuoi.');
    }
    this.incrAge = function() {
        this.age++;
    }
}

// console.log(Person());
const teo = new Person('Teo', 20);
const ti = new Person('Tiiiii', 10);
// console.log(teo.name);
// console.log(ti);
// teo.sayHello();
teo.name = 'Teo NGuyen';
teo.sayHello();
teo.incrAge();
teo.sayHello();
