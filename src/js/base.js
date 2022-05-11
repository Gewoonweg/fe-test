import '../sass/base.scss'

// Import vue and the example component
import Vue from 'vue/dist/vue.js'
import ExampleComponent from './components/RegistrationFormComponent.vue'

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


window.onload = function() {
    /*
    * Maak hamburger menu aanklikbaar. Toggle active-menu class.
    * */
    document.getElementById("menu-btn").addEventListener("click", function() {

        var activeClass = 'active-menu';
        if (document.body.classList.contains(activeClass)) {
            document.body.classList.remove(activeClass);
        } else {
            document.body.classList.add(activeClass);
            var items = document.getElementsByClassName('menu-item');
            if (items.length > 0) {
                items[0].focus();
            }
        }

        document.getElementById("menu-btn").blur();

    });
}
