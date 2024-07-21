import './bootstrap';
// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();
import axios from 'axios';
import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "./layouts/App.vue";
import Login from "./auth/Login.vue";
import Home from "./landing_pages/Home.vue";

// import axios from 'axios';
import router from "./router";


// const token = document.head.querySelector('meta[name="csrf-token"]').content;
// axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
// createApp(App)

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const customeTheme = {
    dark: false,
    colors: {
        primary: "#263238",
        secondary: "#FF9800",
        accent: "#FFB74D",
        error: "#B71C1C",
        info: "#FFECB3",
        success: "#C8E6C9",
        warning: "#FFC107",
        background:"#ECEFF1",
        surface:'#B0BEC5',
        subcolor:"#78909C",

    },
};


const vuetify = createVuetify({
    components,
    directives,

    theme: {
        defaultTheme: "customeTheme",
        themes: {
            customeTheme,
        },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })

const app = createApp({
  components: {
      App,
      Login,
      Home
    },
})
app.component(App)
app.component(Login)
app.component(Home)
app.use(vuetify) 
app.use(router)
app.mount("#app");