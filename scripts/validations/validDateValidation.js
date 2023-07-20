import ValidationErrorText from "./validationErrorText.js";
import { daysInMonth, daysInMonthLeapYear, leapYears } from "../info.js";

function validDateValidation(inputDate){
    if(inputDate.month < 1 || inputDate.month > 12){
        const validMonth = new ValidationErrorText('Must be a valid month')
        
    }
}

export default validDateValidation;