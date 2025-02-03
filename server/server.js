const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());


const evaluateExpression = (expression) => {
 
  const tokenize = (expression) => {
    let tokens = [];
    let num = "";
    for (let char of expression) {
      if (/\d/.test(char)) {
        num += char;
      } else {
        if (num) {
          tokens.push(parseInt(num));
          num = "";
        }
        if ("+-*/()".includes(char)) {
          tokens.push(char);
        }
      }
    }
    if (num) tokens.push(parseInt(num));
    return tokens;
  };

  const infixToPostfix = (tokens) => {
    const precedence = {'+': 1, '-': 1, '*': 2, '/': 2};
    let output = [];
    let operators = [];

    for (let token of tokens) {
      if (typeof token === "number") {
        output.push(token);
      } else if (precedence[token]) {
        while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === "(") {
        operators.push(token);
      } else if (token === ")") {
        while (operators.length && operators[operators.length - 1] !== "(") {
          output.push(operators.pop());
        }
        operators.pop();
      }
    }

    while (operators.length) {
      output.push(operators.pop());
    }

    return output;
  };

  const evaluatePostfix = (postfixTokens) => {
    let stack = [];
    for (let token of postfixTokens) {
      if (typeof token === "number") {
        stack.push(token);
      } else {
        let b = stack.pop();
        let a = stack.pop();
        if (token === "+") stack.push(a + b);
        if (token === "-") stack.push(a - b);
        if (token === "*") stack.push(a * b);
        if (token === "/") stack.push(a / b); 
      }
    }
    return stack[0];
  };

  const tokens = tokenize(expression);
  const postfix = infixToPostfix(tokens);
  return evaluatePostfix(postfix);
};


app.post('/evaluate', (req, res) => {
  const { expression } = req.body;
  const result = evaluateExpression(expression);
  res.json({ result });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
