const quizData = [
    {
      question: "What will be the output of the following code: console.log(1 + '2' + '2'); ?",
      options: ["122", "5", "14", "undefined"],
      answer: "122"
    },
    {
      question: "What is the result of 10 + 5 + 'px'?",
      options: ["'10px5'", "'15px'", "'105px'", "'px15'"],
      answer: "'15px'"
    },
    {
      question: "What is the output of the following code: console.log('apple' > 'pineapple')?",
      options: ["true", "false", "NaN", "Error"],
      answer: "false"
    },
    {
      question: "What is the result of the expression `5 == '5'`?",
      options: ["true", "false", "NaN", "Error"],
      answer: "true"
    },
    {
      question: "What will be logged to the console from the following code: console.log(typeof typeof 1);",
      options: ["'number'", "'string'", "'object'", "'undefined'"],
      answer: "'string'"
    },
    {
      question: "Which of the following methods removes the last element from an array and returns it?",
      options: ["pop()", "shift()", "slice()", "push()"],
      answer: "pop()"
    },
    {
      question: "What is the output of the following code: console.log(Math.max())?",
      options: ["-Infinity", "0", "undefined", "NaN"],
      answer: "-Infinity"
    },
    
    {
      question: "What is the result of the expression `0 == '0'`?",
      options: ["true", "false", "NaN", "Error"],
      answer: "true"
    },
    {
      question: "Which built-in method calls a function for each element in the array?",
      options: ["forEach()", "map()", "filter()", "reduce()"],
      answer: "forEach()"
    },
    {
      question: "What is the output of the following code: console.log(+'abc');",
      options: ["'abc'", "NaN", "Error", "0"],
      answer: "NaN"
    },
    {
      question: "What is the result of the expression `undefined == null`?",
      options: ["true", "false", "NaN", "Error"],
      answer: "true"
    },
    {
      question: "Which JavaScript keyword declares a block scope local variable?",
      options: ["let", "const", "var", "local"],
      answer: "let"
    },
    {
      question: "What is the output of the following code: console.log(parseInt('10px'));",
      options: ["10", "NaN", "'10px'", "Error"],
      answer: "10"
    }
];

  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submitBtn');
  const resultElement = document.getElementById('result');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      const radioButton = document.createElement('input');
      radioButton.setAttribute('type', 'radio');
      radioButton.setAttribute('name', 'option');
      radioButton.setAttribute('value', option);
      optionElement.appendChild(radioButton);
      optionElement.innerHTML += option;
      optionsElement.appendChild(optionElement);
    });
  }
  
  function selectOption() {

    const isOptionSelected  = document.querySelector('input[name="option"]:checked');
    if (!isOptionSelected) {
        alert("Please select an option.");
        return;
      }
    const selectedOption = document.querySelector('input[name="option"]:checked').value;

    const correctAnswer = quizData[currentQuestionIndex].answer;
    
    if (selectedOption === correctAnswer) {
      score++;
      optionsElement.childNodes.forEach(option => {
        if (option.childNodes[0].checked) {
          option.style.backgroundColor = 'green';
        }
      });
    } else {
      optionsElement.childNodes.forEach(option => {
        if (option.childNodes[0].checked) {
          option.style.backgroundColor = 'red';
        }
        if (option.textContent === correctAnswer) {
          option.style.backgroundColor = 'green';
        }
      });
    }
  
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }, 1000);
  }
  
  function showResult() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
    submitButton.style.display = 'none';
  }
  
  loadQuestion();
  submitButton.addEventListener('click', selectOption);
  