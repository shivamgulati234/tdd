# tdd
This is a simple String Calculator implemented using Test-Driven Development (TDD) in Node.js with Jest for testing

## Features

- Returns 0 for an empty string
- Returns a single number if only one is provided
- Returns the sum of comma-separated numbers
- Supports newline (`\n`) as a delimiter
- Supports custom single-character delimiters: `"//;\n1;2"` → `3`
- Throws an error for negative numbers and lists them in the error message