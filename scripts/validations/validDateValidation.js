import ValidationErrorText from "./helpers/validationErrorText.js";
import { daysInMonth, daysInMonthLeapYear, leapYears } from "../info.js";

function validDateValidation(inputDate){
    if(inputDate.month < 1 || inputDate.month > 12){
        const notValidMonth = new ValidationErrorText('Must be a valid month')
        const monthPar = document.querySelector('#monthInput')
        monthPar.appendChild(notValidMonth)
        const monthLabel = document.querySelector('#monthInput > label');
        monthLabel.classList.add('fontRed')
        const monthInput = document.querySelector('#monthInput > input');
        monthInput.classList.add('borderRed')
    } else if(inputDate.month < 1 && inputDate > totalMonthDays){
        const notValidDate = new ValidationErrorText('Must be a valid date')
        const dayPar = document.querySelector('#dayInput')
        dayPar.appendChild(notValidDate)
        const dayLabel = document.querySelector('#dayInput > label');
        dayLabel.classList.add('fontRed')
        const dayInput = document.querySelector('#dayInput > input');
        dayInput.classList.add('borderRed')
    }else {
        return true
    }
}

export default validDateValidation;