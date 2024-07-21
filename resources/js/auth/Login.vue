

<script setup>
import { ref, reactive } from 'vue'

const LoginData = reactive({});
const RegisterData = reactive({});
const show =ref(false);
const  tab = ref(null);

function login() {
    axios.post('/login',LoginData).then((res)=>{
        location.reload();
        // console.log(res.data);
    })
}
function register() {
    axios.post('/register',RegisterData).then((res)=>{
        // location.reload();
        console.log(res.data);
    })
}


</script>

<template>
    <v-tabs
        v-model="tab"
        bg-color="primary">
        <v-tab value="one">Login</v-tab>
        <v-tab value="two">Register</v-tab>
    </v-tabs>
    <div class="background position-relative d-flex align-center justify-center">
        <v-col xs="10" cols="10" sm="6" md="7" lg="5" xl="4" xxl="3" >
            <v-tabs-window v-model="tab" fixed-tabs class="pa-10">
                <v-tabs-window-item value="one">
                    <v-form @submit.prevent="login" >
                        <v-sheet
                            rounded
                            class="pa-3 login-card">
                            <v-row class="justify-center">
                                <v-col xs="12" cols="8"  sm="8" md="6" >
                                    <img src="../../images/logo 6.png"></img>
                                </v-col>
                                <v-col xs="12" cols="12" sm="12" md="6" class="d-flex flex-column justify-center">
                                    <div class="inputs"> 
                                        <v-text-field 
                                        v-model="LoginData.email"
                                        color="accent"
                                        label="Email:"
                                        variant="outlined"
                                        density="comfortable">
                                        </v-text-field>
                                        <v-text-field 
                                        v-model="LoginData.password"
                                        color="accent"
                                        label="Password"
                                        :append-inner-icon="show ?'mdi-eye':'mdi-eye-off'"  
                                        :type="show ? 'text' : 'password'"
                                        @click:append-inner="show=!show"
                                        variant="outlined"
                                        density="comfortable">
                                        </v-text-field>
                                    </div>
                                    <v-btn
                                        class="mt-10"
                                        color="secondary"
                                        text="Submit"
                                        type="submit"
                                        variant="elevated"
                                        :elevation="10">
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-form>
                </v-tabs-window-item>

                <v-tabs-window-item value="two">
                    <v-form @submit.prevent="register">
                        <v-card
                            rounded
                            class="pa-5 login-card">
                            
                            <div class="inputs"> 
                                <h1 class="pb-5 text-center">Register </h1>
                                <v-text-field 
                                v-model="RegisterData.name"
                                color="accent"
                                base-color="accent"
                                label="Name:"
                                variant="outlined"
                                density="comfortable">
                                </v-text-field>
                                <v-text-field 
                                v-model="RegisterData.email"
                                color="accent"
                                base-color="accent"
                                label="Email:"
                                variant="outlined"
                                density="comfortable">
                                </v-text-field>
                                <v-text-field 
                                v-model="RegisterData.password"
                                color="accent"
                                base-color="accent"
                                label="Password"
                                type="password"
                                variant="outlined"
                                density="comfortable">
                                </v-text-field>
                                <v-text-field 
                                v-model="RegisterData.password_confirmation"
                                color="accent"
                                base-color="accent"
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                density="comfortable">
                                </v-text-field>
                            </div>
                            <v-btn
                                class="mt-10"
                                color="secondary"
                                type="submit"
                                text="Submit"
                                block
                                variant="elevated"
                                :elevation="10">
                            </v-btn>
                        </v-card>
                    </v-form>
                </v-tabs-window-item>
            </v-tabs-window>



        </v-col>

    </div>
</template>
<style scope>
.background{
    background-image:linear-gradient(135deg,#1a0000,#411002,#6b350a,#5a380c,#250a02), url('../../images/login_background.png');
    /* background-image: url('../../images/login_background.png'); */
    background-size: cover,cover;
    background-blend-mode:overlay;
    width: 100vw;
    height: 100vh;
}
.login-card{
    background-color: #270101a6!important;
    box-shadow: 0px 0px 15px black!important;
    transition: .5s;

}
.login-card:hover{
    /* background-color: rgba(107, 62, 4, 0.815)!important; */
    box-shadow: 0px 0px 15px rgba(223, 223, 223, 0.527)!important;
    scale: 104%;
}
.login-card img{
    width:100%; 
    -webkit-filter: drop-shadow(5px 5px 5px rgba(223, 223, 223, 0.527)); 
    filter: drop-shadow(0px 0px 5px rgba(223, 223, 223, 0.527));
}
.inputs *{
    color:#FF9800!important;
}
</style>