const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受参数 value.', () => {
            vm = new Constructor({
                propsData: {
                    value: '123'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123')
        })
        it('接受参数 disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接受参数 readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接受参数 error.', () => {
            vm = new Constructor({
                propsData: {
                    error: '222'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('222')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change','input','focus','blur'].
            forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                let event = new Event(eventName)
                Object.defineProperty(
                    event, 'target', {
                        value: {value: 'hi'}, enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })
})