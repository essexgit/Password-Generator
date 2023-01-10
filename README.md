# Password-Generator
Generate a random password based on criteria selected

## Description

- This project tests my ability to work with functions, objects and user inputs.
- I was provided with four arrays containing Upper and Lower case characters, numbers and special characters
- I wrote and continually revised pseudocode laying out the logic, and kept console testing at every step
- This project helped me learn writing to objects and better understand how function returns work
- I learned that I can 'build' a string using the += incremental operator

### User Story

```
AS A user
I WANT to generate a unique password, setting my own criteria.
SO THAT I can be secure when setting up accounts.
```

### Acceptance Criteria

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

* The final code should print the password to the webpage matching the following image:![Layout of finished page](./assets/05-javascript-challenge-demo.png)

## Installation

This is a basic static front-end website deployment which can be deployed on any server or client with a browser. [The GIThub page deployment](https://essexgit.github.io/Password-Generator/)

## Credits

The starting, non-functioning code and styled layout is provided by EdX
Thanks to tutor Juan Delgado who helped me simplify, understand that 'return' is also 'go back' and that += incrementor appends to strings.

## Licence
This work is published under the [MIT Licence](./LICENSE)