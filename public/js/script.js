console.log("Hello World!");

let date = new Date();
console.log(date);


let todaysYear = date.getFullYear(); // get the year
let todaysMonth = date.getMonth(); // get the month, starting from 0
let todaysDay = date.getDate(); // get the day of the month instead of the day of week

console.log(todaysYear);
console.log(todaysMonth);
console.log(todaysDay);


 // array with objects in case of select input type
// let daysMonths = [
//     { january: 31 }, 
//     { february: 28 }, 
//     { march: 31 }, 
//     { april: 30 }, 
//     { may: 31 }, 
//     { juny: 30 }, 
//     { july: 31 }, 
//     { august: 31 }, 
//     { september: 30 }, 
//     { october: 31 }, 
//     { november: 30 }, 
//     { december: 31 },
// ];

// leap year function
function leapYear(){
    if ( todaysYear % 4 === 0  ) {
        console.log("Yes, leap year");
    }
}

leapYear();

calcBtn.onclick = function calc() {
    event.preventDefault();
    
    

    let inputDay; 
    inputDay = day.value;
    let inputMonth; 
    inputMonth = month.value;
    let inputYear; 
    inputYear = year.value;
    
    let calcYear;
    calcYear = todaysYear - inputYear; 
    
    let calcMonth;
    calcMonth = todaysMonth - inputMonth;

    let calcDay;
    calcDay = inputDay - todaysDay;

    // write the exact day, month and year!
    yearResult.innerHTML = `${calcYear}`;
    monthResult.innerHTML = `${calcMonth}`;
    dayResult.innerHTML = `${calcDay}`;
};


