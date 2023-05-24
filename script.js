// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(values) {
  document.getElementById("result").value += values;
}

// This function evaluates the expression and return result
function calculate() {
  let p = document.getElementById("result").value;
  let q = eval(p);
  document.getElementById("result").value = q;
}

console.log('hello world');
