function Addition() {
    // Get the values from the form
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var result = a + b;
    document.getElementById('result').value = result;
  }

function Subtraction() {
    // Get the values from the form
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var result = a - b;
    document.getElementById('result').value = result;
  }

function Multiplication() {
    // Get the values from the form
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var result = a * b;
    document.getElementById('result').value = result;
  }

function Division() {
    // Get the values from the form
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var result = a / b;
    document.getElementById('result').value = result;
  }