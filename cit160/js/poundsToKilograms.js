function poundsToKilograms() {
    // INPUT
    let pounds = parsefloat(document.getElementById("pounds").value);
    
    //PROCESSING
    //conversion factor from pounds to kilograms is
    let kilograms = pounds * .453592
    
    // OUTPUT

    document.getElementById("output").innerHTML = kilograms.toFixed(2) + "Kilograms";

}