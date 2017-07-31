'use strict';

require('./main.sass');
import { Parser } from './parser/parser';

let input = Parser.serialize({
  name: {
    value: "Joe",
    tag: `"json": tag`
  },
  sename: {
    value: "Doe"
  },
  sister: {
    tag: `"unique": one`,
    value: {
      name: {
        value: "Jessy"
      },
      sename: {
        value: "Doe"
      },
    }
  },
  colors: {
    value: [
      "red",
      "blue",
      "dark"
    ]
  }
}, false);

let output = Parser.parse(input)

console.log(input)
console.log(output)
