function afterTaxPayment() {
    // INPUT
    let regular = parseFloat(document.getElementById("regular").value);
    let overtime = parseFloat(document.getElementById("overtime").value);

    //PROCESSING
    
    regular = parseFloat(regular);
    overtime = parseFloat(overtime);
    const rate = 15 
    const overtime = 22.50
    const tax = 0.15 * (total)
  
    let over = 0.15 * (overtime * 2.5)
    let total = (regular * 40) + (overtime * 2.5) - tax
   

    //OUTPUT
    document.getElementById("output").innerHTML = total.toFixed(2);
}
    