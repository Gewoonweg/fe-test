// Styles get loaded in js for fast compiling during development
import '../sass/style.scss'
import {Tooltip} from "bootstrap";
// Import vue and the example component
import Vue from 'vue/dist/vue.js'
import RegistrationFormComponent from './components/RegistrationFormComponent.vue'

const init = () => {
  // Initialize javascript functions
  loadComponent()

  // add tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl)
  })
}

const loadComponent = () => {
  new Vue({
    el: '#vue',
    components: {
      'registration-form': RegistrationFormComponent
    }
  })
}

init()
