function poundsToKilograms() {
    // INPUT
    let pounds = parseFloat(document.getElementById("pounds").value);
    
    //PROCESSING
    //conversion factor from pounds to kilograms is
    let kilograms = pounds * .453592
    
    // OUTPUT

    document.getElementById("output").innerHTML = kilograms.toFixed(1) + " Kilograms";
}