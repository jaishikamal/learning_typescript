// enum is a specai typeScript  feature that allows you to define a set of name constants. It provides a way to organize and group related values together, making your code more readable and maintainable.

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;

console.log(move); // Up

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;

console.log(userRole); // ADMIN