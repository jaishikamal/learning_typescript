// type Gurd is a technique used to narrow down the type of a variable within a conditional block. It allows you to check the type of a variable and perform different operations based on that type.

// type of
// instanceof
// Custom 


// Example 1: using typeof to narrow down types
function printValue(value: string | number) {
  if (typeof value === 'string') {
    console.log("String value: " + value.toUpperCase());
  } else {
    console.log("Number value: " + value.toFixed(2));
  }
}

// Example 2: using instanceof to narrow down types
class Dog {
  bark() {  
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}
function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  }
  else {
    animal.meow();
  }
}

// Example 3: custom type guard

interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

