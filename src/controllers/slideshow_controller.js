import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "slide" ]

    initialize() {
        this.showCurrentSlide()
    }

    showCurrentSlide(){
        this.slideTargets.forEach((el, i) => {
            el.classList.toggle("slide--current", this.index == i)
        })
    }



    next() {
        this.index++
    }

    previous() {
        this.index--
    }


    get index() {
        return parseInt(this.data.get("index"))
    }

    set index(value) {
        this.data.set("index", value)
        this.showCurrentSlide()
    }
}
