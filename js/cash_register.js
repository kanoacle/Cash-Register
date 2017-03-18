function displayNum () {
  display.innerHTML = money;
}

function updateMoney () {
  num = baseNum.join("") + '.' + decimalNum.join("");
  money = '$' + num;
  displayNum();
}

function displayMem () {
  if ( mem[mem.length - 2] !== 0 || mem[mem.length - 1] === 0) {
    display.innerHTML = '$' + parseFloat((parseFloat(memory * 100) / 100).toFixed(2));

  } else {

      display.innerHTML = '$' + parseFloat((parseFloat(memory * 100) / 100).toFixed(2));
    }
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
var mem = memory.toString().split("");

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
          memory -= num;

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

  document.getElementById('1').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '1');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '1');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '1');

        } else {
            baseNum.push('1');
          }
      }

    updateMoney();
  });

  document.getElementById('2').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '2');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '2');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '2');

        } else {
            baseNum.push('2');
          }
      }

    updateMoney();
  });

  document.getElementById('3').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '3');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '3');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '3');

        } else {
            baseNum.push('3');
          }
      }

    updateMoney();
  });

  document.getElementById('4').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '4');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '4');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '4');

        } else {
            baseNum.push('4');
          }
      }

    updateMoney();
  });

  document.getElementById('5').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '5');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '5');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '5');

        } else {
            baseNum.push('5');
          }
      }

    updateMoney();
  });

  document.getElementById('6').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '6');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '6');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '6');

        } else {
            baseNum.push('6');
          }
      }

    updateMoney();
  });

  document.getElementById('7').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '7');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '7');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '7');

        } else {
            baseNum.push('7');
          }
      }

    updateMoney();
  });

  document.getElementById('8').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '8');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '8');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '8');

        } else {
            baseNum.push('8');
          }
      }

    updateMoney();
  });

  document.getElementById('9').addEventListener('click', function () {

    if (decimal === true) {

      if (decimalNum[0] === '0' && zero === false) {
        decimalNum.splice(0, 1, '9');

      } else if ((decimalNum[0] !== '0' || zero === true) && decimalNum[1] === '0') {
          decimalNum.splice(1, 1, '9');

        } else {
            return;
          }

    } else {

        if (baseNum[0] === '0') {
          baseNum.splice(0, 1, '9');

        } else {
            baseNum.push('9');
          }
      }

    updateMoney();
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


  });

  document.getElementById('equal').addEventListener('click', function () {


  });

})();

console.log(memory);