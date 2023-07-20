import ValidationErrorText from "./validationErrorText.js";

function futureYearValidation(inputDate, currentDate){
if(inputDate.year > currentDate.year){
    const yearInFuture = new ValidationErrorText('Must be in the past')
    const yearPar = document.querySelector('#yearInput')
    yearPar.appendChild(yearInFuture)
    const yearLabel = document.querySelector('#yearInput > label');
    yearLabel.classList.add('fontRed')
    const yearInput = document.querySelector('#yearInput > input');
    yearInput.classList.add('borderRed')
} else if(inputDate.year === currentDate.year && inputDate.month > currentDate.month){
    const monthInFuture = new ValidationErrorText('Must be in the past')
    const monthPar = document.querySelector('#monthInput')
    monthPar.appendChild(monthInFuture)
    const monthLabel = document.querySelector('#monthInput > label');
    monthLabel.classList.add('fontRed')
    const monthInput = document.querySelector('#monthInput > input');
    monthInput.classList.add('borderRed')
} else if(inputDate.year === currentDate.year && inputDate.month === currentDate.month && inputDate.day > currentDate.day){
    const dayInFuture = new ValidationErrorText('Must be in the past')
    const dayPar = document.querySelector('#dayInput')
    dayPar.appendChild(dayInFuture)
    const dayLabel = document.querySelector('#dayInput > label');
    dayLabel.classList.add('fontRed')
    const dayInput = document.querySelector('#dayInput > input');
    dayInput.classList.add('borderRed')
} else {
    return true
}
}

export default futureYearValidation;