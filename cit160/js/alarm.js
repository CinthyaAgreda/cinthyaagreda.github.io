function alarm() {
//Input
let now = new Date();
let month = now.getMonth();
let dayOfMonth = now.getDate();
let dayOfWeek = now.getDay();
let message;

// Processing
if ((month == 0 && dayOfMonth == 1) || (month == 6 && dayOfMonth == 4) || 
(month == 11 && dayOfMonth == 25) || (dayOfWeek === 0) || (dayOfWeek === 6)) {

    message = "Keep Sleeping";
}

else {

    message = "Wake Up";
}

// Output
document.getElementById('output').innerHTML = message
}
