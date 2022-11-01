import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDom from "react-dom"
import { createRoot } from "react-dom/client"
import App from "../components/app"

// Connects to data-controller="react"
export default class extends Controller {


  connect() {
    console.log('React controller connected')
    const el = React.createElement(App)
    createRoot(this.element).render(el)
  }
}
