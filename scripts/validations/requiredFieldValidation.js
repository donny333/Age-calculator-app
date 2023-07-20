import errorRemover from "./helpers/errorRemover.js";
import ValidationErrorText from "./helpers/validationErrorText.js";

function requiredFieldValidation(inputDate){
    if(!inputDate.year || !inputDate.month || !inputDate.day){
        errorRemover();
        if(!inputDate.year){
            const yearPar = new ValidationErrorText('This field is required')
            
            const yearLabel = document.querySelector('#yearInput > label');
            yearLabel.classList.add('fontRed')
            const yearInput = document.querySelector('#yearInput > input');
            yearInput.classList.add('borderRed')
            
            const yearDiv = document.querySelector('#yearInput');
            if(document.querySelector('#yearInput > p')){
                document.querySelector('#yearInput > p').remove()
            }
            yearDiv.appendChild(yearPar)
            
        } 
        if(!inputDate.month){
            const monthPar = new ValidationErrorText('This field is required')
            
            
            const monthLabel = document.querySelector('#monthInput > label');
            monthLabel.classList.add('fontRed')
            const monthInput = document.querySelector('#monthInput > input');
            monthInput.classList.add('borderRed')
            
            const monthDiv = document.querySelector('#monthInput');
            if(document.querySelector('#monthInput > p')){
                document.querySelector('#monthInput > p').remove()
            }
            monthDiv.appendChild(monthPar)

        }
        if(!inputDate.day){
            const dayPar = new ValidationErrorText('This field is required')

            const dayLabel = document.querySelector('#dayInput > label');
            dayLabel.classList.add('fontRed')
            const dayInput = document.querySelector('#dayInput > input');
            dayInput.classList.add('borderRed')
            
            const dayDiv = document.querySelector('#dayInput');
            if(document.querySelector('#dayInput > p')){
                document.querySelector('#dayInput > p').remove()
            }
            dayDiv.appendChild(dayPar)

        } 
    } else {
        errorRemover();
        return true
    }


}

export default requiredFieldValidation;