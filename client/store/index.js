import Vuex from 'vuex'

const cookieparser = process.server ? require('cookieparser') : undefined

const createStore = () => {
    return new Vuex.Store({
        state: {
            auth: null
        },

        mutations: {
            setAuth(state, auth){
                state.auth = auth
            }
        },

        actions: {
            nuxtServerInit({ commit }, { req }){
                let auth = null

                if(req.headers.cookie){
                    const parsedCookie = cookieparser.parse(req.headers.cookie)

                    try{
                        auth = JSON.parse(parsedCookie.auth)
                    }catch(err){

                    }
                }

                commit('setAuth', auth)
            }
        }
    })
}

export default createStore
