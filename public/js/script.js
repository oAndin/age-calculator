console.log("Hello World!");

let date = new Date();

console.log(date);

let year;

 
let daysMonths = [
    { january: 31 }, 
    { february: 28 }, 
    { march: 31 }, 
    { april: 30 }, 
    { may: 31 }, 
    { juny: 30 }, 
    { july: 31 }, 
    { august: 31 }, 
    { september: 30 }, 
    { october: 31 }, 
    { november: 30 }, 
    { december: 31 },
];

function leapYear(){
    if ( year % 4 === 0 ) {

    }
    else {

    }
}

leapYear();

calcBtn.onclick = function calc() {
    event.preventDefault();

    parseInt()

    console.log(day.value);
    console.log(month.value);
    console.log(year.value);

    // write the exact day, month and year!
    yearResult.innerHTML = `${year.value}`;
    monthResult.innerHTML = `${month.value}`;
    dayResult.innerHTML = `${day.value}`;
};