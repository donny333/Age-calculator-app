import YearsLivedCalculator from "./calculators/YearsLived.js";
import MonthsLivedCalculator from "./calculators/MonthsLivedCalculator.js";
import DaysLivedCalculator from "./calculators/DaysLivedCalculator.js";
import requiredFieldValidation from "./validations/requiredFieldValidation.js";
import futureYearValidation from "./validations/futureYearValidation.js";


function ageCalculatorHandler(event){
    event.preventDefault();
    
    const inputDate = {
        year: event.target.year.valueAsNumber,
        month: event.target.month.valueAsNumber,
        day: event.target.day.valueAsNumber
    }
    const dateNow = new Date;
    const currentDate = {
        year: dateNow.getFullYear(),
        month: dateNow.getMonth() + 1,
        day: dateNow.getDate()
    }
    
    if(requiredFieldValidation(inputDate) && futureYearValidation(inputDate, currentDate)) {    
        const yearsLived = YearsLivedCalculator(inputDate, currentDate);
        const monthsLived = MonthsLivedCalculator(inputDate, currentDate);
        const daysLived = DaysLivedCalculator(inputDate, currentDate)        
        console.log(`Years lived: ${yearsLived}`)
        console.log(`Months lived: ${monthsLived}`)
        console.log(`Days lived: ${daysLived}`)
    }



}

document
    .querySelector('#ageCalculatorForm')
    .addEventListener('submit', ageCalculatorHandler)