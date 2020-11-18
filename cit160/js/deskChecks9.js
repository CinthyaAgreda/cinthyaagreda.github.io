function futureValue() {
    let balance = parseFloat(document.getElementById('balance').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numMonths = parseInt(document.getElementById('months').value);
    let monthlyRate = annualRate / 12;

    // For each month, compute the interest and add it to the balance.
    for (let month = 1;  month <= numMonths;  month++) {
        // Compute the interest for a month.
        let interest = balance * monthlyRate;

        // Round the interest to pennies.
        interest = Math.round(interest * 100) / 100;

        // Add the interest to the balance.
        balance += interest;
    }

    document.getElementById('output').innerHTML =
        "Your balance after " + numMonths + " months will be $" + balance;
}