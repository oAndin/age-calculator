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

let correctInputDay;
correctInputDay = checkInputDay();

let correctInputMonth;
correctInputMonth = checkInputMonth();

let correctInputYear;
correctInputYear = checkInputYear();

let todaysYear = date.getFullYear(); // get the year
let todaysMonth = date.getMonth(); // get the month, starting from 0
let todaysDay = date.getDate(); // get the day of the month instead of the day of week

function checkInputDay() {
    return (day < 32) ? true : false;
}
function checkInputMonth() {
    return (month.length < 3 && month.value < 32) ? true : false;
}
function checkInputYear() {
    return (year.length < 5) ? true : false;
}


day.onblur = function () {
    checkInputDay();
    console.log(correctInputDay)
    console.log(day.value)
    console.log(typeof(day.value))
    console.log((typeof(Number(day.value))))
    if (correctInputDay == false) {
        
    }
}
month.onblur = function () {
    checkInputMonth();
    if (correctInputMonth == false) {
        
    }
}
year.onblur = function () {
    checkInputYear();

    if(correctInputYear == false) {
        
    }
};

function calc() {
    event.preventDefault();

    checkInputDay()
    checkInputMonth()
    checkInputYear()
    
    if (correctInputDay === true & correctInputMonth === true && correctInputYear === true) {
        let calcYear;
        calcYear = todaysYear - year.value;
        let calcMonth;
        calcMonth = (todaysMonth - month.value) + 1;
        let calcDay;
        calcDay =  todaysDay - day.value;

        if (calcDay < 0) {
            calcDay *= -1;
        }

        if (calcMonth < 0) {
            calcMonth *= -1;
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

