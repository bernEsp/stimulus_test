import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = [ "slide" ]

  static values = {index: Number}

  initialize() {
    this.showCurrentSlide()
  }

  next() {
    this.indexValue++
    this.resetValue()
    this.showCurrentSlide()
  }

  previous() {
    this.indexValue--
    this.resetValue()
    this.showCurrentSlide()
  }

  resetValue() {
    if(this.indexValue > this.slideTargets.length-1) {
      this.indexValue = this.slideTargets.length - 1
    }else if (this.indexValue < 0) {
      this.indexValue = 0
    }
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}
