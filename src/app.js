import Vue from 'vue';
import Button from './button';
import Icon from  './icon';
import ButtonGroup from './buttonGroup';
import Input from './input';
import Row from './row';
import Col from './col';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);

var app = new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '123'
    },
    methods: {
        inputChange(e) {
            console.log(e)
        }
    }
})

