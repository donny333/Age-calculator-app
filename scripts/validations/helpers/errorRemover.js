export default function errorRemover(){
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
}