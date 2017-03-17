var myCalc = calculatorModule();
var memory = myCalc.recallMemory();

var base = (function () {
  return parseInt(memory);
})();

function displayNum () {
  display.innerHTML = '$' + base.toFixed(2);
}

var cashRegister = (function () {


  document.getElementById('deposit').addEventListener('click', function () {
    memory += display.innerHTML;
    display.innerHTML = '$' + num.toFixed(2);
  });

  document.getElementById('balance').addEventListener('click', function () {
    if (memory === 0) {
      display.innerHTML = '$' + num.toFixed(2);
    } else {
      display.innerHTML = '$' + memory;
    }
  });

  document.getElementById('clear').addEventListener('click', function () {
    display.innerHTML = '$' + num.toFixed(2);
  });

  document.getElementById('1').addEventListener('click', function () {

  });

  document.getElementById('2').addEventListener('click', function () {

  });

  document.getElementById('3').addEventListener('click', function () {

  });

  document.getElementById('4').addEventListener('click', function () {

  });

  document.getElementById('5').addEventListener('click', function () {

  });

  document.getElementById('6').addEventListener('click', function () {

  });

  document.getElementById('7').addEventListener('click', function () {

  });

  document.getElementById('8').addEventListener('click', function () {

  });

  document.getElementById('9').addEventListener('click', function () {

  });

  document.getElementById('0').addEventListener('click', function () {

  });

  document.getElementById('00').addEventListener('click', function () {

  });

  document.getElementById('dec').addEventListener('click', function () {
    display.innerHTML += '.';
  });

})();