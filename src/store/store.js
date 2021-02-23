Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        numero : 20,
        elevate : true,
        usuarios: []
    },
    mutations: {
        increment(state) {
            if(state.elevate)
                state.numero++
        },
        decrease(state) {
            if(state.elevate)
                state.numero--
        },
        onElevate(state){
            state.elevate = !state.elevate;
        },
        llenarUsuarios(state,payload){
            state.usuarios = payload;
        },
        eliminarUltimoUsuario(state){
            state.usuarios = [...state.usuarios.filter( (u,i) => i !== state.usuarios.length - 1)]
        },
        eliminarUsuarioPorId(state,payload){
            state.usuarios = [...state.usuarios.filter( (u,i) => u.id !== payload )]
        }
    },
    actions : {
        async getUsuarios({commit}){
            const url = 'https://jsonplaceholder.typicode.com/users';


            const data = await fetch(url);
            const usuarios = await data.json();

            console.log(usuarios)

            commit('llenarUsuarios',usuarios);

        },
        eliminarUltimoUsuario({commit}){
            
            commit('eliminarUltimoUsuario');
        },
        eliminarUsuarioPorId({commit},id){
            
            commit('eliminarUsuarioPorId',id);
        }
    },
    getters : {
        getNumeroUsuarios : (state)  =>{
            return state.usuarios.length;
        }
    }
})








