type user ={
  name: string;
  age: number;
  email: string; 
}

const user1: user = {
  name: "kamal",
  age: 30,
  email: "kamal@example.com"
};


interface userInterface {
  name: string;
  age: number;
  email: string; 
}

interface userInterface {
  address: string;
}

const user2: userInterface = {
  name: "kamal",
  age: 30,
  email: "kamal@example.com",
  address: "123 Main St"
};


// we can use type alias and interface are similar in many ways, but there are some differences between them.

// interface can be optional properties, while type alias cannot using ? opetator.
