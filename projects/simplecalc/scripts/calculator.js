window.onload = function () {

    var bts = document.getElementsByClassName("bt");
    var display = document.getElementById("display");
    var number1 = "";
    var number2 = "";
    var operator = "";

    for (var i = 0; i < bts.length; i++) {
        bts[i].onclick = function () {
            var btTxt = this.textContent;

            if (this.classList.contains("ope")) {
                operator = btTxt;
                number2 = parseFloat(number1.replace(",", "."));
                number1 = "";
                display.textContent = operator;

            } else if (this.id === "=") {
                var number1re = parseFloat(number1.replace(",", "."));
                var result = calculate(number2, number1re, operator);
                display.textContent = result.toString().replace(".", ",");
                number1 = result.toString();
                number2 = "";
                operator = "";

            } else if (this.id === "delete") {
                number1 = number1.slice(0, -1);
                display.textContent = number1;
                if (display.textContent == "") {
                    display.textContent = "0";
                }

            } else if (this.id === "clear") {
                number1 = "";
                display.textContent = "0";

            } else {
                number1 += btTxt;
                display.textContent = number1;
            }
        };
    }

    function calculate(number1, number2, operator) {
        switch (operator) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return number1 / number2;
            default:
                return "0";
        }
    }

}