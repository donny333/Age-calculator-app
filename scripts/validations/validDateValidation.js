import ValidationErrorText from "./helpers/validationErrorText.js";
import { daysInMonth, daysInMonthLeapYear, leapYears } from "../info.js";

function validDateValidation(inputDate){
    let totalDaysInMonth = 31;
    const yearIsLeap = leapYears.includes(inputDate.year);
    console.log(yearIsLeap)
    if(yearIsLeap){
        totalDaysInMonth = daysInMonthLeapYear[inputDate.month - 1]
    } else {
        totalDaysInMonth = daysInMonth[inputDate.month - 1]
    }
    console.log(totalDaysInMonth)

    if(inputDate.day < 1 || inputDate.day > totalDaysInMonth){
        const notValidDate = new ValidationErrorText('Must be a valid date')
        const dayPar = document.querySelector('#dayInput')
        dayPar.appendChild(notValidDate)
        const dayLabel = document.querySelector('#dayInput > label');
        dayLabel.classList.add('fontRed')
        const dayInput = document.querySelector('#dayInput > input');
        dayInput.classList.add('borderRed')
    } else {
        return true
    }
}

export default validDateValidation;