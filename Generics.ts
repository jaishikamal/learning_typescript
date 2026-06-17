// function <t> {
 //return <t>
// }

//Generics allow you to create reusable components that work with different data types while maintaining type safety.

function getValue<T>(value: T): T {
  return value;
}

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));
console.log(getValue<boolean>(true));