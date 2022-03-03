import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from "vue-router"
import { createStore } from "vuex"

import Comp1 from "./components/Comp1"
import Comp2 from "./components/Comp2"
import Comp3 from "./components/Comp3"

const app = createApp(App)

const store = createStore({
    state() {
        return{
            count: 0
        }
    },
    mutations: {
        increment(state, amount){
            state.count += amount
        }
    }
})

const routes = [
    {path: "/", component: Comp1},
    {path: "/Comp2", component: Comp2},
    {path: "/Comp3", component: Comp3}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active"
})

app.use(store)
app.use(router)

app.mount('#app')