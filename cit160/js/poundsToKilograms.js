function poundsToKilograms() {
    // INPUT VAL
    let pounds = parsefloat(document.getElementById('pounds').value);
    
    //PROCESSING
    //convesion factor from pounds to kilograms is
    let kilograms = 23463.125

    // OUTPUT
    //document.getElementById(output).textContent = kilograms.toFixed(1) + ' kilograms ';
    document.getElementById(output).textContent = '${kilograms.toFixed(1)} Kilograms';

}