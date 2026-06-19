"use strict";
// Union types in TypeScript
// A union type describes a value that can be one of several types.
// Syntax: typeName: TypeA | TypeB
// Example 1: variable can be string or number
let id;
id = 42;
id = "user-42";
// Example 2: function parameter accepts multiple types
function format(value) {
    if (typeof value === 'number')
        return value.toFixed(2);
    return value.toUpperCase();
}
let s = 'loading';
// Narrowing is needed to use type-specific members
function handle(status) {
    if (typeof status === 'boolean') {
        return status ? 'ok' : 'not ok';
    }
    // here status is narrowed to Status
    return `state: ${status}`;
}
// Use unions to express flexible APIs while keeping type safety.
