// intersection type allow you to combine multiple type into one.It is denoted by the &.


// Example 1: combining two interfaces
interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: string;
  salary: number;
}
type PersonEmployee = Person & Employee;  

const john: PersonEmployee = {
  name: "John Doe",
  age: 30,
  employeeId: "E123",
  salary: 50000
};

// Example 2: combining types with different properties
type A = { a: number };
type B = { b: string };
type C = A & B;

const obj: C = {
  a: 10,
  b: "hello"
};


