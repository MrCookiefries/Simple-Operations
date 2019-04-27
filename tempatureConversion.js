function tempCalc() {
  let tn1 = parseFloat(document.getElementById('firstTemp').value);
  let tt1 = document.getElementById('tempType1').value;
  let tt2 = document.getElementById('tempType2').value;
  if (tt1 === 'fahrenheit') {
    if (tt2 === 'fahrenheit') {
      tn1 = tn1;
    } else if (tt2 === 'kelvin') {
      tn1 = (tn1 + 459.67) * (5 / 9);
    } else if (tt2 === 'celsius') {
      tn1 = (tn1 - 32) * (5 / 9);
    } else {
      tn1 = "Error in Fahrenheit being temp type one.";
    }
  } else if (tt1 === 'kelvin') {
    if (tt2 === 'kelvin') {
      tn1 = tn1;
    } else if (tt2 === 'fahrenheit') {
      tn1 = (tn1 * (9 / 5)) - 459.67;
    } else if (tt2 === 'celsius') {
      tn1 = tn1 - 273.15;
    } else {
      tn1 = "Error in Kelvin being temp type one.";
    }
  } else if (tt1 === 'celsius') {
    if (tt2 === 'celsius') {
      tn1 = tn1;
    } else if (tt2 === 'fahrenheit') {
      tn1 = (tn1 * (9 / 5)) + 32;
    } else if (tt2 === 'kelvin') {
      tn1 = tn1 + 273.15;
    } else {
      tn1 = "Error in Celsius being temp type one.";
    }
  }
  document.getElementById('tempResult').innerHTML = tn1;
}