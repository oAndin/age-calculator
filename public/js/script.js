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

// const numbers = /^[0-9]+$/;
// let test = prompt("valor");
// if(test.value.match(numbers)){
//     alert("Passou");
// };

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
    if (isNaN(dayInput) != true && dayInput != '' && dayInput >= 1) { //----------------------------------------------------------------------------
        correctInputDay = true;
        console.log(correctInputDay);
        return correctInputDay;
    }
    if (dayInput === '') {
        day.style.borderColor = '#ff0000';
        dayLabel.style.color = '#ff0000';
        pRequiredDay.style.visibility = 'visible';
    }
    if (isNaN(dayInput) == true || dayInput.value <= 0) {
        day.style.borderColor = '#ff0000';
        dayLabel.style.color = '#ff0000';
        pValidDay.style.visibility = 'visible';
    }
}
month.onblur = function () {
    if (isNaN(monthInput) != true && monthInput != '' && monthInput >= 1) {
        correctInputMonth = true;
        return correctInputMonth;
    }
    if (monthInput == '') {
        month.style.borderColor = '#ff0000';
        monthLabel.style.color = '#ff0000';
        pRequiredMonth.style.visibility = 'visible';
    }
    if (isNaN(monthInput) == true || monthInput < 1) {
        month.style.borderColor = '#ff0000';
        monthLabel.style.color = '#ff0000';
        pValidMonth.style.visibility = 'visible';
    }
}
year.onblur = function () {
    if (isNaN(yearInput) != true && dayInput != '' && yearInput >= 1) {
        correctInputYear = true;
        return correctInputYear;
    }
    if (yearInput == '') {
        year.style.borderColor = '#ff0000';
        yearLabel.style.color = '#ff0000';
        pRequiredYear.style.visibility = 'visible';
    }
    if (isNaN(yearInput) == true) {
        year.style.borderColor = '#ff0000';
        yearLabel.style.color = '#ff0000';
        pValidYear.style.visibility = 'visible';
    }
}
// --------------------------------------------------- 
day.onfocus = function () {
    dayInput = '';
    day.style.borderColor = '#716f6f';
    dayLabel.style.color = '#716f6f';
    pRequiredDay.style.visibility = 'hidden';
    pValidDay.style.visibility = 'hidden';

}
month.onfocus = function () {
    monthInput = '';
    month.style.borderColor = '#716f6f';
    monthLabel.style.color = '#716f6f';
    pRequiredMonth.style.visibility = 'hidden';
    pValidMonth.style.visibility = 'hidden';
}
year.onfocus = function () {
    yearInput = '';
    year.style.borderColor = '#716f6f';
    yearLabel.style.color = '#716f6f';
    pRequiredYear.style.visibility = 'hidden';
    pValidYear.style.visibility = 'hidden';
}
// 3º


function calc() {
    event.preventDefault();

    if (correctInputDay === true & correctInputMonth === true && correctInputYear === true) {
        let calcYear;
        calcYear = todaysYear - year.value;

        let calcMonth;
        calcMonth = (todaysMonth - month.value) + 1;

        let calcDay;
        calcDay = todaysDay - day.value;

        /*
        Dia negativo -> * -1;
        Dia negativo && Mês negativo -> menos um mês &&  * -1;
        */

        // 07 - 12 = -5 ;
        if (calcDay < 0 && calcMonth < 0){
            calcDay *= -1;
            calcMonth *= -1;
            calcMonth--;
        }
        if (calcDay < 0 && calcMonth > 0){
            calcDay *= -1;
            calcMonth--;
        }
        if (calcDay > 0 && calcMonth < 0){
            calcMonth *= -1;
            calcYear--;
        }

        if (calcDay == 0 && calcMonth == 0 && calcYear == 0) {
            alert("Really?");
        }
        if (calcDay == 0 && calcMonth == 0) {
            alert("Happy Birthday");
        }

        // write the users's age!
        yearResult.innerHTML = `${calcYear}`;
        monthResult.innerHTML = `${calcMonth}`;
        dayResult.innerHTML = `${calcDay}`;

    }
};

