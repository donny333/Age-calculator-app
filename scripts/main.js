const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysInMonthLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const leapYears = [];
for (let year = 4; year <= 4000; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leapYears.push(year);
  }
}


function ageCalculatorHandler(event){
    event.preventDefault();
    const inputDay = event.target.day.valueAsNumber
    const inputMonth = event.target.month.valueAsNumber
    const inputYear = event.target.year.valueAsNumber

    const currentDate = new Date;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // console.log(`Date of birth: ${inputYear}-${inputMonth}-${inputDay}`);
    // console.log(`Current date: ${currentYear}-${currentMonth}-${currentDay}`);

    const isCurrentYearLeap = leapYears.includes(currentYear)
    const isInputYearLeap = leapYears.includes(inputYear)

    let yearsLived = currentYear - inputYear
    if (inputMonth === currentMonth){
        if(inputDay > currentDay){
            yearsLived -=1
        }
    } else if(inputMonth > currentMonth){
        yearsLived -=1
    }

    let monthsLived = currentMonth - inputMonth
    if(inputDay > currentDay) {
        monthsLived -= 1
    }
    if(monthsLived < 0){
        monthsLived +=12
    }
    
    let daysLived = 0;

    if(!isCurrentYearLeap){
        if(currentDay >= inputDay){
            daysLived = currentDay - inputDay;
        } else {
            const numberOfDaysFromLastMonth = daysInMonth[currentMonth - 1] - inputDay;
            daysLived = currentDay + numberOfDaysFromLastMonth
        }
    } else {
        if(currentDay >= inputDay){
            daysLived = currentDay - inputDay;
        } else {
            const numberOfDaysFromLastMonth = daysInMonthLeapYear[currentMonth - 1] - inputDay;
            daysLived = currentDay + numberOfDaysFromLastMonth
        }
    }


    console.log(`Years lived: ${yearsLived}`)
    console.log(`Months lived: ${monthsLived}`)
    console.log(`Days lived: ${daysLived}`)
}

document
    .querySelector('#ageCalculatorForm')
    .addEventListener('submit', ageCalculatorHandler)