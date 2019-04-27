function tempCalc() {
  let tn1 = document.getElementById('firstTemp').value;
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
      tn1 = "Error in the code!";
    }
  } else if (tt1 === 'kelvin') {
    if (tt2 === 'kelvin') {
      tn1 = tn1;
    } else if (tt2 === 'fahrenheit') {
      tn1 = (tn1 * (9 / 5)) - 459.67;
    } else if (tt2 === 'celsius') {
      tn1 = tn1 - 273.15;
    } else {
      tn1 = "Error in code!";
    }
  } else if ('celsius') {
    //Finish Temp Calculator
  }
}