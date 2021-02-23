export default Vue.component('componente', {

    template: /*html*/ `
        <div>
            <h1>Componente 1 {{ numero }}</h1>
            <h2>Número de usuarios {{ count }}</h2>
 
            <button @click="onElevate">Super</button>

            <button @click="increment">Click ++</button>
            <button @click="decrease">Click --</button>
            <button @click="getUsuarios">Get usuarios</button>

            <button @click="eliminarUltimoUsuario">Eliminar ultimo usuario</button>
            <ul style="width:25%;">
                <li v-for="u of usuarios" style="margin-top:5px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        {{u.name}} 
                        <button @click="eliminarUsuarioPorId(u.id)" style="background-color:red;color:#FFF; border:0; padding:4px; border-radius:4px;">Eliminar</button>
                    </div>
                </li>
            </ul>

        </div>
    `, 
    data(){
        return { 
        }
    },
    computed:{
        ...Vuex.mapState(['numero','usuarios']),
        ...Vuex.mapState(['elevate']),
        ...Vuex.mapGetters( { count : 'getNumeroUsuarios' })
    },
    methods: { 
        ...Vuex.mapMutations(['increment','decrease','onElevate']),
        ...Vuex.mapActions(['getUsuarios','eliminarUltimoUsuario','eliminarUsuarioPorId'])

    } ,

    mounted(){
        this.$store.dispatch('getUsuarios');
    }

});