function displayNum () {
  display.innerHTML = money;
}

function updateMoney () {
  num = baseNum.join("") + '.' + decimalNum.join("");
  money = '$' + num;
  displayNum();
}

function displayMem () {
  display.innerHTML = '$' + (parseFloat(memory * 100) / 100).toFixed(2);
}

var myCalc = calculatorModule();
var memory = myCalc.recallMemory();
var decimal = false;
var baseNum = ['0'];
var decimalNum = ['0', '0'];
var num = baseNum.join("") + '.' + decimalNum.join("");
var money = '$' + num;
var zero = false;
var total;

var cashRegister = (function () {


  document.getElementById('deposit').addEventListener('click', function () {

    if (num === '0.00') {
      return;

    } else {
      memory += parseFloat((parseFloat(num * 100) / 100).toFixed(2));

      }

    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
    updateMoney();
  });

  document.getElementById('withdraw').addEventListener('click', function () {

    if (num === '0.00') {
      return;

    } else if (num > memory) {
         display.innerHTML = "YOU BROKE, FOOL!";
         return;

      } else {
          memory -= parseFloat((parseFloat(num * 100) / 100).toFixed(2));

        }


    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
    updateMoney();
  });

  document.getElementById('balance').addEventListener('click', function () {

    displayMem();

    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    zero = false;
    decimal = false;
  });

  document.getElementById('clear').addEventListener('click', function () {

    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
    updateMoney();
  });

  function clickNumber (x) {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, x);

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, x);

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, x);

        } else {
            baseNum.push(x);
          }
      }

    updateMoney();
  }

  document.getElementById('1').addEventListener('click', function () {

    clickNumber('1');
  });

  document.getElementById('2').addEventListener('click', function () {

    clickNumber('2');
  });

  document.getElementById('3').addEventListener('click', function () {

    clickNumber('3');
  });

  document.getElementById('4').addEventListener('click', function () {

    clickNumber('4');
  });
  document.getElementById('5').addEventListener('click', function () {

    clickNumber('5');
  });

  document.getElementById('6').addEventListener('click', function () {

    clickNumber('6');
  });

  document.getElementById('7').addEventListener('click', function () {

    clickNumber('7');
  });

  document.getElementById('8').addEventListener('click', function () {

    clickNumber('8');
  });

  document.getElementById('9').addEventListener('click', function () {

    clickNumber('9');
  });

  document.getElementById('0').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && decimalNum[1] === '0') {
        zero = true;

      } else if (decimalNum[0] !== '0') {
            return;

          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '0');

        } else {
            baseNum.push('0');
          }
      }

    updateMoney();
  });

  document.getElementById('00').addEventListener('click', function () {

    if (baseNum[0] !== '0') {
          baseNum.push('00');
    }

    updateMoney();
  });

  document.getElementById('dec').addEventListener('click', function () {

    decimal = true;
  });

  document.getElementById('divide').addEventListener('click', function () {


  });

  document.getElementById('multiply').addEventListener('click', function () {


  });

  document.getElementById('subtract').addEventListener('click', function () {


  });

  document.getElementById('add').addEventListener('click', function () {

    total = num;
    updateMoney();
  });

  document.getElementById('equal').addEventListener('click', function () {

    total = myCalc.load(parseFloat(num));
  });

})();

console.log(memory);