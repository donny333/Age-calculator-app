export default function resultRenderer(yearsLived, monthsLived, daysLived){    
    const yearNumber = document.querySelector('#yearsResult > h1:first-child')
    const yearText = document.querySelector('#yearsResult > h1:last-child')
    if(yearsLived === 1){
        yearNumber.innerHTML=`${yearsLived}`
        yearText.innerHTML=`year`
    } else {
        yearNumber.innerHTML=`${yearsLived}`
        yearText.innerHTML=`years`
    }
    const monthNumber = document.querySelector('#monthsResult > h1:first-child')
    const monthText = document.querySelector('#monthsResult > h1:last-child')
    if(monthsLived === 1){
        monthNumber.innerHTML=`${monthsLived}`
        monthText.innerHTML=`month`
    } else {
        monthNumber.innerHTML=`${monthsLived}`
        monthText.innerHTML=`months`
    }
    const dayNumber = document.querySelector('#daysResult > h1:first-child')
    const dayText = document.querySelector('#daysResult > h1:last-child')
    if(daysLived === 1){
        dayNumber.innerHTML=`${daysLived}`
        dayText.innerHTML=`day`
    } else {
        dayNumber.innerHTML=`${daysLived}`
        dayText.innerHTML=`days`
    }
}