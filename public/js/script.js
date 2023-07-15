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

let todaysYear = date.getFullYear();
let todaysMonth = date.getMonth();
let todaysDay = date.getDate();

// 1º focus in to create a variable so i dont get the error, cause you can resign a value for it later!"

let dayInput;
let monthInput;
let yearInput;

let correctInputDay;
let correctInputMonth;
let correctInputYear;
// 2º store the value of it input day, month and year"(.value)

day.onkeyup = function () {
    dayInput = Number(day.value);
    return dayInput;
}
month.onkeyup = function () {
    monthInput = Number(month.value);
    return monthInput;
}

year.onkeyup = function () {
    yearInput = Number(year.value);
    return yearInput;
}

// 2º focus out or blur to have a variable to check on a IF ELSE for valid data 
day.onblur = function () {
    if (dayInput != undefined && dayInput != null) {
        correctInputDay = true;
        console.log(correctInputDay);
        return correctInputDay;
    } else {
        alert("Olha o vacilo");
    };
}
month.onblur = function () {
    if (dayInput != undefined && dayInput != null) {
        correctInputMonth = true;
        return correctInputMonth;
    } else {
        alert("Olha o vacilo");
    };
}
year.onblur = function () {
    if (dayInput != undefined && dayInput != null) {
        correctInputYear = true;
        return correctInputYear;
    }
    else {
        alert("Olha o vacilo");
    }
}
// 3º


function calc() {
    event.preventDefault();
    console.log(correctInputDay);
    if (correctInputDay === true & correctInputMonth === true && correctInputYear === true) {
        let calcYear;
    calcYear = todaysYear - year.value;
    let calcMonth;
    calcMonth = (todaysMonth - month.value) + 1;
    let calcDay;
    calcDay = todaysDay - day.value;

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
    
    // else {alert('Please fill in all fields!');}
};

