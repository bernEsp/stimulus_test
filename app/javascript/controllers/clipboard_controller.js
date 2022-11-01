import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = ["source"]
  static classes = [ "supported" ]


  copy(event) {
    this.sourceTarget.select()
    document.execCommand("copy")
    navigator.clipboard.writeText(this.sourceTarget.value)
  }

  connect() {
    navigator.permissions.query({ name: 'clipboard-write' }).then( (result) => {
      if (result.state == "granted") {
        this.element.classList.add(this.supportedClass)
      }
    })
  }
}
