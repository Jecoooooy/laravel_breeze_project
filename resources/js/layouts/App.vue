<template>
    <v-app>
        <v-app-bar  color="primary" :elevation="8" > 
            <template v-slot:prepend>
            <div class="mx-2"></div>
                <v-app-bar-nav-icon
                tile
                color="accent"
                rounded 
                ripple
                density="comfortable"
                variant="elevated"
                @click.stop="drawer = !drawer"
                elevation="5">
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title><h3>My Website</h3></v-app-bar-title>
            <template v-slot:append>
                <h4 class="mx-3">Hi, {{ user.name }}</h4>
                <v-divider inset :thickness="1" vertical></v-divider>
                <v-btn @click="logout()">logout</v-btn>
                <div class="mx-1"></div>
            </template>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            color="subcolor"
            :location="$vuetify.display.mobile ? 'top' : undefined">
            <v-list>
                <v-list-item
                    v-for="route in router" 
                    :key="route.path"
                    :to="route.path">{{ route.name }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main style="height: 500px;">
                <router-view v-slot="{ Component }">
                        <transition name="slide-fade" mode="out-in">
                            <Component :is="Component">
                            
                            </Component>
                        </transition>
                </router-view>
        </v-main>
    </v-app>
</template>


<script setup>
import{onMounted, ref  } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter().options.routes

const user = ref(window.user)
const drawer = ref(true)
function logout() {
    axios.post('/logout').then((res)=>{
        location.reload();
        // console.log(res.data);
    })
}

onMounted(() => {
    // axios.defaults.headers.common['X-CSRF-TOKEN'] = this.csrfToken;
    console.log(router);
})

</script>

<style>
    .slide-fade-enter-active {
    transition: all 0.4s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(50px);
        opacity: 0;
    }
    .slide-fade-enter-to, .slide-fade-leave-from{
        transition: opacity 0.5s ease;
    }
</style>