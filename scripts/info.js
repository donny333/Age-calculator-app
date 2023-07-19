const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysInMonthLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const leapYears = [];
for (let year = 4; year <= 4000; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leapYears.push(year);
  }
}

export {daysInMonth, daysInMonthLeapYear, leapYears}