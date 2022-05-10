// Styles get loaded in js for fast compiling during development
import '../sass/style.scss'

// Import vue and the example component
import Vue from 'vue/dist/vue.js'
import ExampleComponent from './components/ExampleComponent.vue'

const init = () => {
  // Initialize javascript functions
  loadComponent()
}

const loadComponent = () => {
  new Vue({ // eslint-disable-line no-new
    el: '#vue',
    components: {
      ExampleComponent
    }
  })
}

init()
