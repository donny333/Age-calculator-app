import ValidationErrorText from "./helpers/validationErrorText.js";

export default function monthValidation(inputDate){
    if(inputDate.month < 1 || inputDate.month > 12){
        const notValidMonth = new ValidationErrorText('Must be a valid month')
        const monthPar = document.querySelector('#monthInput')
        monthPar.appendChild(notValidMonth)
        const monthLabel = document.querySelector('#monthInput > label');
        monthLabel.classList.add('fontRed')
        const monthInput = document.querySelector('#monthInput > input');
        monthInput.classList.add('borderRed')
    } else {
        return true
    }
};