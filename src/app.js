import Vue from 'vue';
import Button from './button';
import Icon from  './icon';
import ButtonGroup from './buttonGroup';
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

Vue.component('g-button',Button)
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);

var app = new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
})

