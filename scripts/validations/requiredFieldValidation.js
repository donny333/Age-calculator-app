import ValidationErrorText from "./validationErrorText.js";

function requiredFieldValidation(inputDate){
    if(!inputDate.year || !inputDate.month || !inputDate.day){
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
            
        } else {
            const yearLabel = document.querySelector('#yearInput > label');
            yearLabel.classList.remove('fontRed')
            const yearInput = document.querySelector('#yearInput > input');
            yearInput.classList.remove('borderRed')
            if(document.querySelector('#yearInput > p')){
                document.querySelector('#yearInput > p').remove()
            }
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

        } else {
            const monthLabel = document.querySelector('#monthInput > label');
            monthLabel.classList.remove('fontRed')
            const monthInput = document.querySelector('#monthInput > input');
            monthInput.classList.remove('borderRed')
            if(document.querySelector('#monthInput > p')){
                document.querySelector('#monthInput > p').remove()
            }
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

        } else {
            const dayLabel = document.querySelector('#dayInput > label');
            dayLabel.classList.remove('fontRed')
            const dayInput = document.querySelector('#dayInput > input');
            dayInput.classList.remove('borderRed')
            if(document.querySelector('#dayInput > p')){
                document.querySelector('#dayInput > p').remove()
            }

        }
    } else {
        const paragraphsWithFontRed = document.querySelectorAll('.fontRed');
        paragraphsWithFontRed.forEach(paragraph => {
            paragraph.classList.remove('fontRed')
        });
        const paragraphsWithBorderRed = document.querySelectorAll('.borderRed');
        paragraphsWithBorderRed.forEach(paragraph => {
            paragraph.classList.remove('borderRed')
        });
        const paragraphs = document.querySelectorAll('.field > p');
        paragraphs.forEach(paragraph => {
            paragraph.remove()
        });

        return true
    }


}

export default requiredFieldValidation;