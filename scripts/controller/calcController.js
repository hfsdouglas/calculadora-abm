class calcController {
    constructor() {
        this._locale = "pt-BR"
        this._timeEl = document.getElementById("time")
        this._dateEl = document.getElementById("date")
        this._operation = []
        this._currentDate
        this.initialize()
        this.initBtnEvents()
    }
    initialize() {
        this.setDisplayDateTime()
        setInterval(()=>{
            this.setDisplayDateTime()
        },1000)
    }
    setDisplayDateTime() {
        let date = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        this.displayDate = date.toUpperCase()
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }
    initBtnEvents() {
        let buttons = document.querySelectorAll("div#rows > div > button")
        buttons.forEach(btn =>{
            this.addEventListenerAll(btn, 'mouseover mousedown mouseup', e=>{
                btn.style.cursor = 'pointer'
            })
            this.addEventListenerAll(btn, 'click drag', e => {
                let btnText = btn.id
                btnExec(btnText)
            })
        })
    }
    getLastOperation(){
        return this._operation[this._operation.length - 1]
    }
    isOperator(value){
        return ['+', '-', '/', '*', '%'].indexOf(value) > -1
    }
    addOperation(value){
        if(NaN(this.getLastOperation())){
            if (this.isOperator(value)){

            }
            
        } else {

        }
    }
    btnExec(value){
        switch(value){
            case 'AC': 

            break;
            case 'CE': 
                
            break;
            case 'prcnt': 
                addOperation('%')
            break;
            case 'div': 
                addOperation('/')
            break;
            case 'mult': 
                addOperation('*')
            break;
            case 'minus': 
                addOperation('-')
            break;
            case 'sum': 
                addOperation('+')
            break;
            case 'dot': 
                addOperation('.')
            break;
            case 'equal': 
                
            break;
            case '0': 
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': 
            case '9':
                addOperation(value)
            break;
            default:
            break;
        }
    }
    get displayTime() {
        return this._timeEl.innerHTML
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value
    }
    get displayDate() {
        return this._dateEl.innerHTML
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value
    }
    get currentDate() {
        return new Date()
    }
    set currentDate(value) {
        this._currentDate = value
    } 
    
}