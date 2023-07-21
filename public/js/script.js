console.log("Hello World!");

// const daysMonths = [
//     { january : 31 }, 
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

let correctInputDay;
let correctInputMonth;
let correctInputYear;

day.onblur = function () {
    if (isNaN(day.value) != true && day.value != '' && day.value >= 1) {
        correctInputDay = true;
        return correctInputDay;
    }
    if (day.value <= 0) {
        console.log(day.value)
        day.style.borderColor = '#ff0000';
        dayLabel.style.color = '#ff0000';
        pRequiredDay.style.visibility = 'visible';
    }
    // if (isNaN(day.value) == true || day.value <= 0) {
    //     day.style.borderColor = '#ff0000';
    //     dayLabel.style.color = '#ff0000';
    //     pValidDay.style.visibility = 'visible';
    // }
}
month.onblur = function () {
    if (isNaN(month.value) != true && month.value != '' && month.value >= 1) {
        correctInputMonth = true;
        return correctInputMonth;
    }
    if (month.value == '') {
        month.style.borderColor = '#ff0000';
        monthLabel.style.color = '#ff0000';
        pRequiredMonth.style.visibility = 'visible';
    }
    if (isNaN(month.value) == true || month.value < 1) {
        month.style.borderColor = '#ff0000';
        monthLabel.style.color = '#ff0000';
        pValidMonth.style.visibility = 'visible';
    }
}
year.onblur = function () {
    if (isNaN(year.value) != true && year.value != '' && Number(year.value) <= todaysYear) {
        correctInputYear = true;
        return correctInputYear;
    }
    if (isNaN(year.value) === true) {
        year.style.borderColor = '#ff0000';
        yearLabel.style.color = '#ff0000';
        pValidYear.style.visibility = 'visible';
    }
    if (year.value === '') {
        year.style.borderColor = '#ff0000';
        yearLabel.style.color = '#ff0000';
        pRequiredYear.style.visibility = 'visible';
        pValidYear.innerHTML = 'Must be a valid day';
    }
    if (Number(year.value) > todaysYear) {
        year.style.borderColor = '#ff0000';
        yearLabel.style.color = '#ff0000';
        pValidYear.style.visibility = 'visible';
        pValidYear.innerHTML = 'Must be in the past';
    }
}
// --------------------------------------------------- 
day.onfocus = function () {
    day.style.borderColor = '#716f6f';
    dayLabel.style.color = '#716f6f';
    pRequiredDay.style.visibility = 'hidden';
    pValidDay.style.visibility = 'hidden';

}
month.onfocus = function () {
    month.style.borderColor = '#716f6f';
    monthLabel.style.color = '#716f6f';
    pRequiredMonth.style.visibility = 'hidden';
    pValidMonth.style.visibility = 'hidden';
}
year.onfocus = function () {
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
        calcMonth = ((todaysMonth + 1) - month.value);
        let calcDay;
        calcDay = todaysDay - day.value;
        // calcDay = daysMonths[`${}`].value;

        /* 
        day < 0 e month < 0 / day < 0 e month > 0 / day > 0 e month < 0 / day > 0 e month > 0 */

        if(calcDay < 0 && calcMonth < 0) {
            calcDay *= -1;
            calcMonth = calcMonth + 12;
            calcYear--;
        }
        if(calcDay >= 0 && calcMonth < 0) {
            calcMonth = calcMonth + 12;
            calcYear--;
        }
        if(calcDay < 0 && calcMonth > 0) {
            calcDay *= -1;
        }
        if(calcDay < 0 && calcMonth >= 0) {
            calcDay *= -1;
        }
        
        // if(calcDay < 0) {
        //     calcDay *= -1;
        //     calcMonth--;
        //     calcMonth += 12;
        //     calcYear--;
        // }
        // if(calcMonth < 0) {
        //     calcMonth += 12;
        //     calcYear--;
        // }
        // if(calcMonth < 0 && calcDay < 0){
        //     calcDay *= -1;
        //     calcMonth -= -12;
        //     calcYear--;
        // }

        if(calcDay < 0 && calcMonth )

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