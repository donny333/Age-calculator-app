function YearsLivedCalculator (inputDate, currentDate){
    let yearsLived = currentDate.year - inputDate.year
    if (inputDate.month === currentDate.month){
        if(inputDate.day > currentDate.day){
            yearsLived -=1
        }
    } else if(inputDate.month > currentDate.month){
        yearsLived -=1
    }
    return yearsLived
}

export default YearsLivedCalculator;