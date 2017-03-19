function displayNum () {
  display.innerHTML = '$' + parseFloat(parseFloat(money * 100) / 100).toFixed(2);
}

function updateMoney () {
  num = baseNum.join("") + '.' + decimalNum.join("");
  money = num;
  displayNum();
}

function displayMem () {
  display.innerHTML = '$' + parseFloat(parseFloat(memory * 100) / 100).toFixed(2);
}

var myCalc = calculatorModule();
var memory = myCalc.recallMemory();
var decimal = false;
var baseNum = ['0'];
var decimalNum = ['0', '0'];
var num = '$' + baseNum.join("") + '.' + decimalNum.join("");
var money = Number(num.replace('$', ""));
var zero = false;
var op;
var number = parseFloat((parseFloat(num * 100) / 100).toFixed(2));
var display = document.getElementById('display');
var total = myCalc.getTotal();

var cashRegister = (function () {


  document.getElementById('deposit').addEventListener('click', function () {

    if (Number(display.innerHTML.replace('$', '')) < 0) {
      display.innerHTML = 'KEEP THAT SHIT';

    } else {

        memory += Number(display.innerHTML.replace('$', ''));
        baseNum.splice(0, baseNum.length, '0');
        decimalNum.splice(0, 2, '0', '0');
        decimal = false;
        zero = false;
        updateMoney();

      }
  });

  document.getElementById('withdraw').addEventListener('click', function () {

    if (num === '0.00') {
      return;

    } else if (Number(display.innerHTML.replace('$', '')) > memory) {
         display.innerHTML = "YOU BROKE, FOOL!";
         return;

      } else {
          memory -= Number(display.innerHTML.replace('$', ''));

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

    myCalc.load(0);
    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
    total = 0;
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

    myCalc.load(Number(display.innerHTML.replace('$', '')));
    op = myCalc.divide;

    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
  });

  document.getElementById('multiply').addEventListener('click', function () {

    myCalc.load(Number(display.innerHTML.replace('$', '')));
    op = myCalc.multiply;

    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
  });

  document.getElementById('subtract').addEventListener('click', function () {

    myCalc.load(Number(display.innerHTML.replace('$', '')));
    op = myCalc.subtract;

    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
  });

  document.getElementById('add').addEventListener('click', function () {

    myCalc.load(Number(display.innerHTML.replace('$', '')));
    op = myCalc.add;

    baseNum.splice(0, baseNum.length, '0');
    decimalNum.splice(0, 2, '0', '0');
    decimal = false;
    zero = false;
  });

  document.getElementById('equal').addEventListener('click', function () {

    if (op === myCalc.divide && Number(display.innerHTML.replace('$', '')) === 0) {

      display.innerHTML = "ya serious?";

    } else {

        op(Number(display.innerHTML.replace('$', '')));
        display.innerHTML = '$' + parseFloat(parseFloat(myCalc.getTotal() * 100) / 100).toFixed(2);

        baseNum.splice(0, baseNum.length, '0');
        decimalNum.splice(0, 2, '0', '0');
        decimal = false;
        zero = false;
      }
  });

})();