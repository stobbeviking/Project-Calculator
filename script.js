const display = document.getElementById("display");
const operators = document.getElementsByClassName("operators")
const numbers = document.getElementsByClassName("numbers");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let firstNumber = ""
let signs = ""
let secondNumber = ""
const btnDot = document.getElementById("dot")

btnDot.addEventListener("click", () => {
  if (btnDot != "") {
    btnDot.disabled = true;
    btnDot.style.backgroundcolor = "tomato";
  } else {
    btnDot.disabled = false;
  }
})

function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}

function operate(n1, signs, n2) {
  const num1 = parseFloat(n1)
  const num2 = parseFloat(n2)

  if (signs === "+") {
    return add(num1, num2)
  }
  else if (signs === "-") {
    return subtract(num1, num2)
  }
  else if (signs === "*") {
    return multiply(num1, num2)
  }
  else {
    return divide(num1, num2)
  }
}


for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (e) {

    const value =
      e.target.dataset.value;
    if (value === "") return;
    if (signs === "") {
      firstNumber += value;
      display.value = firstNumber;

    }
    else {
      secondNumber += value;
      display.value = secondNumber;

    }

  })
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {

    if (firstNumber !== "" && signs !== "" && secondNumber !== "") {
      const resultCon = operate(firstNumber, signs, secondNumber);
      display.value = resultCon.toFixed(2);
      firstNumber = resultCon;
      secondNumber = "";
    }
    signs = e.target.dataset.value;

  });

}

equals.addEventListener("click", () => {
  if (firstNumber !== "" && signs !== "" && secondNumber !== "") {
    const finalResult = operate(firstNumber, signs, secondNumber);
    display.value = finalResult.toFixed(2);

    firstNumber = finalResult;
    secondNumber = "";
    signs = "";
  }

})
clear.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  signs = "";
  display.value = "";
});






/*if (operator = "+") {
  result = add(firstNumber, secondNumber)
}
else if (operator = "-") {
  result = subtract(firstNumber, secondNumber)
}
else if (operator = "*") {
  result = multiply(firstNumber, secondNumber)
}
else {
  result = divide(firstNumber, secondNumber)
}
  // TODO: Do something with result
}

*/
