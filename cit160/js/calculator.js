function basicCalculator() {
    //Input numbers and operator given by the user and convert to numbers
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator-select").value;
    let num3 = parseFloat(document.getElementById("num3").value);
    let answer, message;

    //Processing
    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
    }
    
    if (num3 == answer) {
        message = "Correct, Congratulations!"
    }
    else {
        message = "Incorrect, try again!"
    }

    //Output the answer and if the user answered the problem correctly
    document.getElementById("output").innerHTML = message + ". The answer is " + answer;

}





