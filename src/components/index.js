import Vue from 'vue'
import search from './search'

const components = {
    search
}

export default {
    install(Vue){
        Object.keys(components).forEach( item => {
            Vue.component(item,components[item])
        })
    }
}