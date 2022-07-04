import {createStore} from "vuex";

const getAllNews = () => {
    return fetch("https://inshorts.deta.dev/news?category=all")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            return res.data
        })
}


const store = createStore({
    state() {
        return {
            allNews: []
        }
    },
    mutations: {
        SET_NEWS(state, payload) {
            state.allNews = payload
        }
    },
    getters: {
        getNews(state) {
            return state.allNews
        }
    },
    actions: {
        async getNewsAll({ commit }) {
            try {
                const data = await getAllNews()
                commit("SET_NEWS", data)
            } catch (err) {
                console.error(err)
            }
        }
    }
})

export default store
