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

let date = new Date();
console.log(date);

// check if input day is over 2 numbers and bigger than 31
// check if input day is over 2 numbers and bigger than 12
// check if input day is over 4 digits



let todaysYear = date.getFullYear(); // get the year
let todaysMonth = date.getMonth(); // get the month, starting from 0
let todaysDay = date.getDate(); // get the day of the month instead of the day of week

function calc() {
    event.preventDefault();

    let inputDay;
    inputDay = day.value;
    let correctInputDay = checkInputDay();
    function checkInputDay() {
        return checkInputDay = (inputDay.lenght = 2 && inputDay < 31) ? true : false;
    }

    let inputMonth;
    inputMonth = month.value;
    let correctInputMonth = checkInputMonth();
    function checkInputMonth() {
        return checkInputMonth = (inputMonth.lenght = 2 && inputMonth < 31) ? true : false;
    }

    let inputYear;
    inputYear = year.value;
    let correctInputYear = checkInputYear();
        function checkInputYear() {
        return (inputYear.lenght = 4) ? true : false;
    }

    console.log(correctInputDay);
    console.log(correctInputMonth);
    console.log(correctInputYear);
    if (correctInputDay != false & correctInputMonth != false && checkInputYear != false) {
        let calcYear;
        calcYear = todaysYear - inputYear;
        let calcMonth;
        calcMonth = ((inputMonth - todaysMonth) + 1);
        let calcDay;
        calcDay = inputDay - todaysDay;

        if (todaysMonth > inputMonth) {
            calcMonth *= -1;
        }

        if (todaysDay > inputDay) {
            calcDay *= -1;
        }

    // write the users's age!
        yearResult.innerHTML = `${calcYear}`;
        monthResult.innerHTML = `${calcMonth}`;
        dayResult.innerHTML = `${calcDay}`;
    }
    else {
        alert('Please fill in all fields!');
    }
};

