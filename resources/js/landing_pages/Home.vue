<template>
    <div>
    
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
                    elevation="5">
                    </v-app-bar-nav-icon>
                </template>
                <v-app-bar-title><h3>My Website</h3></v-app-bar-title>
<!-- navigation links ----------------------------------------------------->
                <template v-slot:append>
                    <v-divider inset :thickness="1" vertical></v-divider>
                    <a href="#home">
                        <v-btn
                        variant="text"
                        color="secondary"
                        text="Home">
                        </v-btn>
                    </a>
                    <v-divider inset :thickness="1" vertical> </v-divider>
                    <a href="#portfolio">
                        <v-btn
                        variant="text"
                        color="secondary"
                        text="Portfolio">
                        </v-btn>
                    </a>
                    <v-divider inset :thickness="1" vertical> </v-divider>
                    <a href="#about">
                        <v-btn
                        variant="text"
                        color="secondary"
                        text="About">
                        </v-btn>
                    </a>
                    <v-divider inset :thickness="1" vertical> </v-divider>
                    <a href="#contact">
                        <v-btn
                        variant="text"
                        color="secondary"
                        text="contact">
                        </v-btn>
                    </a>
                    <v-divider class="" inset :thickness="1" vertical> </v-divider>
                    <a href="/login">
                        <v-btn
                        variant="text"
                        color="secondary"
                        text="Log In">
                        </v-btn>
                    </a>
                    <div class="mx-1"></div>
                </template>
            </v-app-bar>
            <div class="mt-16"></div>
            <section id="home">
                <HomeContent></HomeContent>
            </section>
            <section id="portfolio">
                <Portfolio></Portfolio>
            </section>
            <section id="about">
                <About></About>
            </section>
            <v-footer color="primary"> 
                <div class="text-center ma-auto">
                    <p class="text-subtitle-2">This is a Laravel 9, Vue 3 project  © — {{ new Date().getFullYear() }}</p>
                </div>
            </v-footer>
        </v-app>
    </div>
</template>
<script setup>
import HomeContent from './HomeContent.vue'
import Portfolio from './Portfolio.vue'
import About from './About.vue'
</script>