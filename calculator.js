function calc() {
  let result;
  let n1 = parseFloat(document.getElementById('num1').value);
  let n2 = parseFloat(document.getElementById('num2').value);
  let oper = document.getElementById('operation').value;
  if (oper === '+') {
    result = n1 + n2;
  } else if (oper === '-') {
    result = n1 - n2;
  } else if (oper === '/') {
    result = n1 / n2;
  } else if (oper === '*') {
    result = n1 * n2;
  } else {
    result = 'Error In Code!';
  }
  document.getElementById('result').value = result;
};