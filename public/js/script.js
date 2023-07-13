console.log("Hello World!");

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

// function leapYear(){
//     if ( todaysYear % 4 === 0  ) {
//         console.log("Yes, leap year");
//     }
// }

// check if input day is over 2 numbers and bigger than 31
// check if input day is over 2 numbers and bigger than 12
// check if input day is over 4 digits


let date = new Date();
console.log(date);

let todaysYear = date.getFullYear(); // get the year
let todaysMonth = date.getMonth(); // get the month, starting from 0
let todaysDay = date.getDate(); // get the day of the month instead of the day of week
function calc() {
    event.preventDefault();
    
    let inputDay;
    let inputMonth;
    let inputYear;
    inputDay = day.value;
    inputMonth = month.value;
    inputYear = year.value;
    
    // let correctInputDay = checkInputDay();
    // function checkInputDay () {
    //     checkInputDay = (inputDay.lenght = 2 && inputDay >= 31) ? true : false;
    //     return;
    // }

    let correctInputDay = checkInputDay();
    function checkInputDay () {
        if (inputDay.lenght < 3 && inputDay < 32) {
            return true;
        }
        else {
            return false;
        }
    }
    
    // let correctInputDay = checkInputDay();
    // function checkInputDay () {
    //     if (inputDay.lenght < 3 && inputDay < 32) {
    //         return true;
    //     }
    // }

    console.log(correctInputDay);
    // if () {
    //     let calcYear;
    //     calcYear = todaysYear - inputYear;
    //     let calcMonth;
    //     calcMonth = ((inputMonth - todaysMonth) + 1);
    //     let calcDay;
    //     calcDay = inputDay - todaysDay;

    //     if (todaysMonth > inputMonth) {
    //         calcMonth *= -1;
    //     }

    //     if (todaysDay > inputDay) {
    //         calcDay *= -1;
    //     }

    //     // write the exact day, month and year!
    //     yearResult.innerHTML = `${calcYear}`;
    //     monthResult.innerHTML = `${calcMonth}`;
    //     dayResult.innerHTML = `${calcDay}`;
    // }
    // else {
    //     alert('Please fill in all fields!');
    // }
};

