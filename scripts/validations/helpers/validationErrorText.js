export default class ValidationErrorText{
    constructor(text){
        this.text = text;
        return this.render();
    }
    render(){
        this.requiredPar = document.createElement('p');
        this.requiredText = document.createTextNode(this.text);
        this.requiredPar.appendChild(this.requiredText);
        this.requiredPar.classList.add('required')
        return this.requiredPar
    }
}