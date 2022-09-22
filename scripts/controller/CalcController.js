class CalcController {

  constructor() {

    this._displayCalcElemente = document.querySelector("#display")
    this._displayTime = document.querySelector("#hora");
    this._displayDate = document.querySelector("#data");
    this._currentDate;

    this.initialize();
  }

  initialize() {

    this.setDisplayDateTime()
    setInterval(() => {

      this.setDisplayDateTime()

    }, 1000)


  }


  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString('pt-BR')
    this.displayTime = this.currentDate.toLocaleTimeString('pt-BR')

  }

  get currentDate() {
    return new Date()
  }

  get displayCalc() {
    return this._displayCalcElemente.innerHTML;
  }
  set displayCalc(value) {
    this._displayCalcElemente.innerHTML = value
  }

  get displayDate() {
    return this._displayDate.innerHTML
  }
  set displayDate(value) {
    this._displayDate.innerHTML = value
  }

  get displayTime() {
    return this._displayTime.innerHTML
  }

  set displayTime(value) {
    this._displayTime.innerHTML = value
  }
}