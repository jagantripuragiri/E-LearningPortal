const questions = {
    jee: [
        {
            q: "What is the value of 2 + 2?",
            options: ["2", "3", "4", "5"],
            answer: "4"
        },
        {
            q: "Which gas is essential for respiration?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Oxygen"
        }
        ,
        {
            "q": "What is the SI unit of force?",
            "options": ["Newton", "Joule", "Watt", "Pascal"],
            "answer": "Newton"
        },
        {
            "q": "What is the chemical formula of water?",
            "options": ["H2O", "CO2", "O2", "HCl"],
            "answer": "H2O"
        },
        {
            "q": "Which planet is known as the Red Planet?",
            "options": ["Earth", "Venus", "Mars", "Jupiter"],
            "answer": "Mars"
        },
        {
            "q": "What is Avogadro’s number?",
            "options": ["6.022 x 10^23", "9.81 m/s^2", "3.14", "1.602 x 10^-19"],
            "answer": "6.022 x 10^23"
        },
        {
            "q": "Which law states that F = ma?",
            "options": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
            "answer": "Newton's Second Law"
        },
        {
            "q": "The valency of Carbon is:",
            "options": ["2", "4", "6", "8"],
            "answer": "4"
        },
        {
            "q": "What is the atomic number of Oxygen?",
            "options": ["6", "8", "10", "12"],
            "answer": "8"
        },
        {
            "q": "What is the derivative of sin(x)?",
            "options": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
            "answer": "cos(x)"
        },
        {
            "q": "The speed of light in vacuum is approximately:",
            "options": ["3 x 10^8 m/s", "3 x 10^6 m/s", "3 x 10^4 m/s", "3 x 10^10 m/s"],
            "answer": "3 x 10^8 m/s"
        },
        {
            "q": "Which gas is used in the Haber process to produce ammonia?",
            "options": ["Nitrogen", "Oxygen", "Hydrogen", "Carbon Dioxide"],
            "answer": "Nitrogen"
        }
    ],
    gate: [
        {
            q: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
            answer: "O(log n)"
        },
        {
            q: "Which data structure is used for LIFO?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            answer: "Stack"
        },
        {
            "q": "What is the full form of XML?",
            "options": ["Extensible Markup Language", "Executable Markup Language", "Extra Modern Language", "Extendable Metadata Language"],
            "answer": "Extensible Markup Language"
        },
        {
            "q": "In networking, what does OSI stand for?",
            "options": ["Open Source Integration", "Open Systems Interconnection", "Operating System Interface", "Open Software Integration"],
            "answer": "Open Systems Interconnection"
        },
        {
            "q": "What is the role of a primary key in a database?",
            "options": ["Identify a unique row", "Store large data", "Create foreign keys", "Improve performance"],
            "answer": "Identify a unique row"
        },
        {
            "q": "What is the main purpose of a cache memory?",
            "options": ["Store frequently used data", "Permanent storage", "Increase disk speed", "Connect to network"],
            "answer": "Store frequently used data"
        },
        {
            "q": "Which of the following is NOT a type of database model?",
            "options": ["Hierarchical", "Relational", "Graph-based", "File System"],
            "answer": "File System"
        },
        {
            "q": "What is the advantage of a linked list over an array?",
            "options": ["Efficient random access", "Dynamic memory allocation", "Less memory usage", "Faster traversal"],
            "answer": "Dynamic memory allocation"
        },
        {
            "q": "What is the time complexity of Merge Sort?",
            "options": ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
            "answer": "O(n log n)"
        },
        {
            "q": "What does ‘np-complete’ refer to?",
            "options": ["A class of problems", "A sorting algorithm", "A type of data structure", "A type of compiler"],
            "answer": "A class of problems"
        },
        {
            "q": "What is the principle of a Turing Machine?",
            "options": ["Stack-based computation", "Graph Traversal", "State transitions", "Array manipulation"],
            "answer": "State transitions"
        },
        {
            "q": "What is the maximum number of nodes in a binary tree of height h?",
            "options": ["2^h - 1", "2^h", "h^2", "h log h"],
            "answer": "2^h - 1"
        }
    ],
    cs: [
        {
            q: "Which of the following is a programming language?",
            options: ["HTML", "CSS", "JavaScript", "SQL"],
            answer: "JavaScript"
        },
        {
            q: "Who is known as the father of computers?",
            options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
            answer: "Charles Babbage"
        }
        ,
        {
            "q": "What does HTML stand for?",
            "options": ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
            "answer": "Hyper Text Markup Language"
        },
        {
            "q": "What is the full form of CSS?",
            "options": ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet", "Cascading System Style"],
            "answer": "Cascading Style Sheet"
        },
        {
            "q": "Which of the following is NOT a programming language?",
            "options": ["Java", "Python", "HTML", "C++"],
            "answer": "HTML"
        },
        {
            "q": "Which company developed Java?",
            "options": ["Microsoft", "Apple", "Sun Microsystems", "Google"],
            "answer": "Sun Microsystems"
        },
        {
            "q": "What is the default port number for HTTP?",
            "options": ["80", "8080", "443", "21"],
            "answer": "80"
        },
        {
            "q": "What does SQL stand for?",
            "options": ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Standard Query Language"],
            "answer": "Structured Query Language"
        },
        {
            "q": "What is the worst-case time complexity of QuickSort?",
            "options": ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
            "answer": "O(n^2)"
        },
        {
            "q": "Which of these is an example of an OOP principle?",
            "options": ["Recursion", "Polymorphism", "Looping", "Overloading"],
            "answer": "Polymorphism"
        },
        {
            "q": "Which data structure follows FIFO order?",
            "options": ["Stack", "Queue", "Heap", "Graph"],
            "answer": "Queue"
        },
        {
            "q": "What is the primary use of the ‘this’ keyword in JavaScript?",
            "options": ["Refers to the function", "Refers to the global object", "Refers to the current object", "Refers to the previous object"],
            "answer": "Refers to the current object"
        }
    ],

    python: [
        {
            "q": "Which of the following is used to create a list in Python?",
            "options": ["[]", "{}", "()", "<>"],
            "answer": "[]"
        },
        {
            "q": "What is the output of the following code? `print(type(5))`",
            "options": ["int", "float", "str", "NoneType"],
            "answer": "int"
        },
        {
            "q": "Which of the following is the correct syntax to define a function in Python?",
            "options": ["def function_name:", "function function_name:", "def function_name()", "function() function_name:"],
            "answer": "def function_name:"
        },
        {
            "q": "What does the 'len()' function do in Python?",
            "options": ["Returns the length of an object", "Returns a list of items", "Returns a sorted object", "Returns the last item in the object"],
            "answer": "Returns the length of an object"
        },
        {
            "q": "Which of the following data types is immutable in Python?",
            "options": ["List", "Set", "Dictionary", "Tuple"],
            "answer": "Tuple"
        },
        {
            "q": "Which of the following methods can be used to add an element to a list in Python?",
            "options": [".add()", ".append()", ".insert()", ".push()"],
            "answer": ".append()"
        },
        {
            "q": "What will be the output of the following Python code? `x = 'hello'; print(x[1])`",
            "options": ["h", "e", "l", "o"],
            "answer": "e"
        },
        {
            "q": "What is the correct way to import a module in Python?",
            "options": ["import module_name", "include module_name", "require module_name", "load module_name"],
            "answer": "import module_name"
        },
        {
            "q": "Which of the following statements is used to raise an exception in Python?",
            "options": ["throw", "raise", "except", "catch"],
            "answer": "raise"
        },
        {
            "q": "What is the purpose of the 'self' keyword in Python?",
            "options": ["Refers to the current object", "Refers to a function", "Refers to the parent class", "Refers to a global variable"],
            "answer": "Refers to the current object"
        }
    ]
    
};
