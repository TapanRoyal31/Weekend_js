/*
 ---------------------------------------------------------
| Pattern        | Meaning                                |
| -------------- | -------------------------------------- |
| `\d`           | Digit (0–9)                            |
| `\D`           | Not a digit                            |
| `\w`           | Letter, digit, or `_`                  |
| `\W`           | Not a word character                   |
| `\s`           | Whitespace                             |
| `\S`           | Non-whitespace                         |
| `.`            | Any character except newline           |
| `*`            | Zero or more                           |
| `+`            | One or more                            |
| `?`            | Zero or one                            |
| `{n}`          | Exactly `n` times                      |
| `{n,m}`        | Between `n` and `m` times              |
| `^`            | Start of string                        |
| `$`            | End of string                          |
| `()`           | Capturing group                        |
| `(?<name>...)` | Named capturing group                  |
| `\|`           | OR (alternation)                       |
| `[]`           | Character set (e.g., `[abc]`)          |
| `[^]`          | Negated character set (e.g., `[^0-9]`) |
 ---------------------------------------------------------
*/

// Creating regex: /pattern/ and new RegExp()

// let str = /hello/

// let str = "hello"

// let regex = new RegExp(str);

// console.log(regex.test("helloo world")); // true and false

// ------------------------------------------------------------------

// const str = "cat bat rat";
// console.log(str.match(/at/g));           // ["at", "at", "at"]
// console.log([...str.matchAll(/\w+at/g)]); // Match objects

// ------------------------------------------------------------------

// console.log("Hello 123456 hello 123 356".replace(/\d+/g, "456")); // Hello 456 hello 456 456

// ------------------------------------------------------------------

