import componente from './components/componente.js';
import { store } from './store/store.js'

const app = new Vue({
    store,
    el: '#root',
    template: /*html*/ `
        <div>  
        <button @click="onIncrement">Incrementar</button>
        <button @click="onDecrease">Decrementar</button>
            {{ numero }}
            <componente ></componente>
        </div>
    `, 
    //Properties computed
    computed:{
       ...Vuex.mapState(['numero'])
    },
    methods:{
        
        onIncrement() { 
            store.commit('increment')
        },
        onDecrease() { 
            store.commit('decrease')
        }
    }
});


//Store

