document.getElementById("calculate").addEventListener("click", calculate);
function calculate() {
    str = document.getElementById('numbers').value;

    charArray = str.split(",");

    for (var i=0; i < charArray.length; i++) {
        charArray[i] = parseFloat(charArray[i]);
    }

    oprationValue = document.getElementById('operation').value;

    res = charArray[0];
    for (var i=1; i < charArray.length; i++) {
        res = calc(res, charArray[i], oprationValue);
    }

    // calculates result
    function calc(firstNumber, secondNumber, operator) {
        if (operator == '+') {
            res = firstNumber + secondNumber;

        } else if (operator == '-') {
            res = firstNumber - secondNumber;

        }
        return res;
    }
    document.getElementById('result').innerHTML = res;
}