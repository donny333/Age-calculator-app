import { daysInMonth, daysInMonthLeapYear, leapYears } from "../info.js";

function DaysLivedCalculator (inputDate, currentDate){
    const isCurrentYearLeap = leapYears.includes(currentDate.year);
    let daysLived = 0;
    if(!isCurrentYearLeap){
        if(currentDate.day >= inputDate.day){
            daysLived = currentDate.day - inputDate.day;
        } else {
            const numberOfDaysFromLastMonth = daysInMonth[currentDate.month - 1] - inputDate.day;
            daysLived = currentDate.day + numberOfDaysFromLastMonth
        }
    } else {
        if(currentDate.day >= inputDate.day){
            daysLived = currentDate.day - inputDate.day;
        } else {
            const numberOfDaysFromLastMonth = daysInMonthLeapYear[currentDate.month - 1] - inputDate.day;
            daysLived = currentDate.day + numberOfDaysFromLastMonth
        }
    }
    return daysLived;
}

export default DaysLivedCalculator;