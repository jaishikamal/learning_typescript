class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("kamal", 30);
person1.introduce();

class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting.`);
  }
}

const car1 = new Car("Toyota", "Corolla");
car1.start();