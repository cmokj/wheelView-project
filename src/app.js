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

const expect = chai.expect;

{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount();
    let spy = chai.spy(function(){});
    vm.$on('click',spy);
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();
}