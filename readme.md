# if-else-throw

If X, return Y, else throw Z.

X can be a boolean or a function.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i if-else-throw
```

## API

The module exports a single function.

### Parameters

1. `test` (any): The “if” condition, evaluated for truthiness. If a function is provided, it is called with `val` as its only argument and its return value is used.
2. Optional: `val` (any): The “then” value to return if `test` is truthy. If omitted, `test` is returned.
3. Optional: `error` (Error or string): The Error to throw if `test` is falsely. If a string is provided, it is wrapped in a `new Error`. If omitted, defaults to `new Error()`.

### Return Value

If `test` is truthy, returns `val` (or returns `test` if `val` is omitted). If `test` is falsey, there is no return value because an error is thrown.

## Examples

```javascript
const ifElseThrow = require('if-else-throw')

const value = []
ifElseThrow(
  Array.isArray(value), // The boolean condition (in this case, true)
  value, // The value returned if true
  new TypeError('Not an array') // The error thrown if false
) // []

ifElseThrow(
  x => Array.isArray(x), // x will be the second argument ('this is a string')
  'this is a string', // Given to the function and returned if the function returns true
  new TypeError('Not an array') // The error thrown if false
) // Uncaught TypeError: Not an array

ifElseThrow(
  'this is truthy',
  'Must be truthy'
) // 'this is truthy'

ifElseThrow(
  null,
  'Must be truthy'
) // Uncaught Error: Must be truthy
```
