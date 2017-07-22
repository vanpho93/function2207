function Company(name, address) {
    this.name = name;
    this.address = address;
}

function Person(name, age, company) {
    this.name = name;
    this.age = age;
    this.company = company;
}

const kpTraining = new Company('KP Training', '92 LTR');
const khoa = new Person('Khoa Pham', 30, kpTraining);

console.log(khoa.company.address);
