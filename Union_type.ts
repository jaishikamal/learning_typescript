// Union types in TypeScript
// A union type describes a value that can be one of several types.
// Syntax: typeName: TypeA | TypeB

// Example 1: variable can be string or number
let id: string | number;
id = 42;
id = "user-42";

// Example 2: function parameter accepts multiple types
function format(value: string | number) {
	if (typeof value === 'number') return value.toFixed(2);
	return value.toUpperCase();
}

// Example 3: union with literal types
type Status = 'success' | 'error' | 'loading';
let s: Status = 'loading';

// Narrowing is needed to use type-specific members
function handle(status: Status | boolean) {
	if (typeof status === 'boolean') {
		return status ? 'ok' : 'not ok';
	}
	// here status is narrowed to Status
	return `state: ${status}`;
}

// Use unions to express flexible APIs while keeping type safety.
