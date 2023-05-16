//store questions and choices in object
var questionObject = [

    {
        question: "What is JavaScript?" ,
        choices: [
            "A markup language", 
            "A programming language", 
            "A style sheet language", 
            "A database language"
        ],
        answer: "A programming language"
    },
    {
        question: "What are the basic data types in JavaScript?",
        choices: [
            "Number, String, Boolean, Null, Undefined",
            "Integer, Float, String, Array, Object",
            "Character, String, Boolean, Undefined, Null",
            "Number, Text, Boolean, Array, Object"
        ],
        answer: "Number, String, Boolean, Null, Undefined"

    },
    {
        question: "How do you declare a variable in JavaScript?",
        choices: [
            "create",
            "declare",
            "var",
            "let"
        ],
        answer: "var"
    },
    {
        question: "How do you comment in JavaScript?",
        choices: [
            "/* ... */",
            "<!-- ... -->",
            "// ...",
            "<!-- // ... -->"
        ],
        answer: "// ..."
    },
    {
        question: "What is the difference between == and === in JavaScript?",
        choices: [
            "They are equivalent operators",
            "== compares values and types, === compares only values",
            "== compares only values, === compares values and types",
            "= is used for assignment, === is used for comparison"
        ],
        answer: "== compares only values, === compares values and types"
    },
    {
        question: "How do you concatenate strings in JavaScript?",
        choices: [
            "str1 + str2",
            "str1.concat(str2)",
            "str1 & str2",
            "str1.append(str2)"
        ],
        answer: "str1 + str2"
    },
    {
        question: "How do you write an if-else statement in JavaScript?",
        choices: [
            "if-else",
            "ifElse",
            "if { ... } else { ... }",
            "if (...) { ... } else { ... }"
        ],
        answer: "if (...) { ... } else { ... }"
    }, 
    {
        question: "How do you write a for loop in JavaScript?",
        choices: [
            "forLoop",
            "for (var i = 0; i < length; i++)",
            "loop for i = 0 to length",
            "loop (i < length) { ... }"
        ],
        answer: "for (var i = 0; i < length; i++)"
    },
    {
        question: "How do you access the length of an array in JavaScript?",
        choices: [
            "arraySize",
            "array.length",
            "array.length()",
            "length(array)"
        ],
        answer: "array.length"
    }, 
    {
        question: "How do you add an element to the end of an array in JavaScript?",
        choices: [
            "array.add(element)",
            "array.append(element)",
            "array.push(element)",
            "array.insert(element)"
        ],
        answer: "array.push(element)"
    }, 
    {
        question: "What is a function in JavaScript?",
        choices: [
            "A set of CSS rules",
            "A sequence of HTML tags",
            "A reusable block of code",
            "A database query statement"
        ],
        answer: "A reusable block of code"
    }, 
    {
        question: "How do you define a function in JavaScript?",
        choices: [
            "define myFunction() { ... }",
            "function = myFunction() { ... }",
            "function myFunction() { ... }",
            "myFunction = function() { ... }"
        ],
        answer: "function myFunction() { ... }"
    },
    {
        question: "How do you call a function in JavaScript?",
        choices: [
            "function(myFunction)",
            "myFunction()",
            "call myFunction()",
            "invoke myFunction()"
        ],
        answer: "myFunction()"
    },
    {
        question: "How do you return a value from a function in JavaScript?",
        choices: [
            "return(value)",
            "returnValue(value)",
            "output(value)",
            "yield value"
        ],
        answer: "return(value)"
    },
    {
        question: "What is an object in JavaScript?",
        choices: [
            "A container for storing data",
            "A loop control structure",
            "A mathematical operator",
            "An error message"
        ],
        answer: "A container for storing data"
    },
    {
        question: "How do you access properties of an object in JavaScript?",
        choices: [
            "object.property",
            "object.getProperty()",
            "object[\"property\"]",
            "object.accessProperty()"
        ],
        answer: "object.property"
    },
    {
        question: "What is an event in JavaScript?",
        choices: [
            "A type of loop",
            "A predefined function",
            "A user action or system notification",
            "A data storage structure"
        ],
        answer: "A user action or system notification"
    },
    {
        question: "How do you add an event listener to an HTML element using JavaScript?",
        choices: [
            "addEventListener(\"event\", function)",
            "element.addListener(\"event\", function)",
            "element.onEvent = function",
            "element.attachEvent(\"event\", function)"
        ],
        answer: "addEventListener(\"event\", function)"
    },
    {
        question: "What is the difference between let, const, and var in JavaScript?",
        choices: [
            "They are equivalent and can be used interchangeably",
            "let is used for constants, const is used for variables, and var is deprecated",
            "let is block-scoped, const is function-scoped, and var is global-scoped",
            "let is immutable, const is mutable, and var is read-only"
        ],
        answer: "let is block-scoped, const is function-scoped, and var is global-scoped"
    }, {
        question: "How do you make an asynchronous request in JavaScript without using any libraries or frameworks like jQuery?",
        choices: [
            "asyncRequest(url, callback)",
            "xhr.request(url, callback)",
            "fetch(url).then(callback)",
            "XMLHTTPRequest(url, callback)"
        ],
        answer: "XMLHTTPRequest(url, callback)"
    }

];
