function MonthsLivedCalculator(inputDate, currentDate){
    let monthsLived = currentDate.month - inputDate.month
    if(inputDate.day > currentDate.day) {
        monthsLived -= 1
    }
    if(monthsLived < 0){
        monthsLived +=12
    }
    return monthsLived
}

export default MonthsLivedCalculator;