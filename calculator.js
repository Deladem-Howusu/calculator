/*console.log("Hello World");

let check = document.querySelectorAll(".number-button");
let display = document.querySelector(".number-input1");
let expression = "";
let result = 0;
let operate;
let digit;
let operations = ["+", "-", "/", "*"];
let start = 0;
let answer = 0;
let operator;

 let content = element.getAttribute("data-number");
    if (content === "C") {
      expression = "";
      display.value = expression;
    } else if (content == "erase") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else {
      let digit = Number(content);

      if (!digit) {
        expression += content;
        display.value = expression;
        console.log(typeof content);

        if (["+", "-", "*", "/", "="].includes(content)) {
          let operator = content;
          let result = eval(`2${operator}2`);
          console.log(result);
        }
      } else {
        expression += digit;
        display.value = expression;
        console.log(typeof digit);
      }

document.querySelectorAll(".number-button").forEach(function (element) {
  element.addEventListener("click", function () {
    //console.log(element.textContent);
    let content = element.getAttribute("data-number");
    expression += content;
    console.log(expression);
    //digit = Number(content);
    for (i = 0; i < operations.length; i++) {
      if (expression.includes(operations[i])) {
        operator = operations[i];
      }
    }
    if (content == "=") {
      answer = eval(``);
      console.log(answer);
    }

    if (content === "C") {
      expression = "";
      display.value = expression;
    } else if (content == "erase") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else if (digit) {
      expression += digit;
      display.value = expression;
      if (expression.includes(operations)) {
        answer = eval(
          `${expression.slice(
            0,
            expression.indexOf(operations)
          )}${operations}${expression.slice(expression.indexOf(operations))}`
        );
      }
       
    } else if (!digit) {
      expression += content;
      display.value = expression;
      console.log(typeof content);
      // operator = content;
      //result = eval(`1${operator}${expression.slice(0, -1)}`);
      //console.log(result);
    } else {
      expression += content;
      display.value = expression;
    }
    if (content == "=") {
      expression = expression.slice(0, -1);
      display.value = expression;
      console.log(expression);
    }
    
  });
});
*/

let display = document.querySelector(".number-input1");
let numberbuttons = document.querySelectorAll(".number-button ");
let expression = "";
let erase = document.querySelector("#backspace");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equal");
let toggle = document.querySelector(".toggle");
let isToggle = false;
let main = document.querySelector("main");
let body = document.querySelector("body");

toggle.addEventListener("click", function () {
  if (!isToggle) {
    main.style.backgroundColor = " white";
    body.style.backgroundColor = "white";
    //  "linear-gradient(to right , rgb(101, 179, 231), rgb(242, 66, 248))";
    //numberbuttons.style.backgroundColor = "red";
    display.style.color = "#17171c";
    isToggle = true;
  } else {
    isToggle = false;
    main.style.backgroundColor = "#17171c";
    body.style.backgroundColor = "#17171c";
    display.style.color = "white";
  }
});

numberbuttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let content = button.getAttribute("data-number");
    console.log(content);
    if (content == "erase") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else if (
      content === "+" ||
      content === "-" ||
      content === "*" ||
      content === "/"
    ) {
      expression += content;
      display.value = expression;
    } else {
      if (expression.length === 0 || isNaN(expression[expression.length - 1])) {
        expression += content;
        display.value = expression;
        console.log(typeof content);
      } else {
        //expression += content;
        //display.value = "";
      }
    }
  });
});
equals.addEventListener("click", function () {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
});
clear.addEventListener("click", function () {
  expression = "";
  display.value = "";
});
