function addNumbers() {
    // INPUT
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    //PROCESSING
    // what is a string : is a serie of characters like words, number (integer int, float (decimal point)), boolean is a statement that evaluates to true or false
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    //add the two numbers together and store in my output variable
    let sum = number1 + number2;

    //OUTPUT
    document.getElementById("sum").innerHTML = `The sum <strong>is</strong> ${sum}!`;

}