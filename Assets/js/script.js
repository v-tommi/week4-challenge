const Questions = [{
  id: 0,
  q: "What is JavaScript?",
  a: [{ text: "JavaScript is a scripting language used to make the website interactive", isCorrect: true },
      { text: "JavaScript is an assembly language used to make the website interactive", isCorrect: false },
      { text: "JavaScript is a compiled language used to make the website interactive", isCorrect: false },
      { text: "None of the mentioned", isCorrect: false }
  ],
  e: "JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side."
},
{
  id: 1,
  q: "Arrays in JavaScript are defined by which of the following statements?",
  a: [{ text: "It is an ordered list of values", isCorrect: true},
      { text: "It is an ordered list of objects", isCorrect: false },
      { text: "It is an ordered list of string", isCorrect: false },
      { text: "It is an ordered list of functions", isCorrect: false }
  ],
  e: "An array in JavaScript is an ordered list of values, each value is referred to as an element, and it is identified by an index. An array can include values of many sorts and the length of an array dynamically sized."

},
{
  id: 2,
  q: "Which of the following is correct about JavaScript?",
  a: [{ text: "JavaScript is Assembly-language", isCorrect: false },
      { text: "JavaScript is an Object-Oriented language", isCorrect: false },
      { text: "JavaScript is an Object-Based language", isCorrect: true },
      { text: "JavaScript is a High-level language", isCorrect: false }
  ],
  e: "Although JavaScript is not an OOP (Object-Oriented Programming) language like Java or PHP, it is object based language. The standard threesome of polymorphism, encapsulation, and inheritance are the criteria for object orientation, and JavaScript fails to meet them."

},

{
  id: 3,
  q: "Which of the following scoping type does JavaScript use?",
  a: [{ text: "Sequential", isCorrect: false },
      { text: "Segmental", isCorrect: false },
      { text: "Lexical", isCorrect: true },
      { text: "Literal", isCorrect: false }
  ],
  e: "JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked."

},

{
  id: 4,
  q: "Which of the following is NOT an error in JavaScript?",
  a: [{ text: "Missing of Bracket", isCorrect: false },
      { text: "Division by zero", isCorrect: true },
      { text: "Syntax error", isCorrect: false },
      { text: "Missing of semicolons", isCorrect: false }
  ],
  e:"In JavaScript, division by zero does not result in an error; it just returns infinity or negative infinity. However, because zero divided by zero has no well-defined value, the result of this operation is the unusual not-a-number value, which is written as NaN."

}
]