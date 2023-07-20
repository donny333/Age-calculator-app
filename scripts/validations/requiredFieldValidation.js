import ValidationErrorText from "./validationErrorText.js";

function requiredFieldValidation(inputDate){
    if(!inputDate.year || !inputDate.month || !inputDate.day){
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