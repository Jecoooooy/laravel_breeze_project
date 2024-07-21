<script setup>
import { method } from 'lodash';
import { ref, reactive } from 'vue'
const RegisterData = reactive({});
const show = ref(false);
const show2 = ref(false);

function register() {
    axios.post('/register',RegisterData).then((res)=>{
        // location.reload();
        // console.log(res.data);
    }).catch((err)=>{
        console.log(err)
    })

    // axios({
    //     method:'post',
    //     url:'/register',
    //     data:RegisterData
    // }).then((res)=>{
    //     console.log(res.data);
    // })
}
</script>

<template>
    <div>
        <div class="d-flex pt-3 pl-3 align-center">
            <div class="title-bar"></div>
            <h1 class="pl-3">Admin</h1>
        </div>
    <br>
    <br>
        <v-container class="pa-5">
            <v-row class="justify-center"> 
                <v-form @submit.prevent="register" style="width:500px;">
                    <v-card
                        prepend-icon="mdi-account"
                        width="100%"
                        max-width="500px"
                        title="Register Account">
                        <template v-slot:default>
                            <div class="pa-5">
                                <v-text-field 
                                    v-model="RegisterData.name"
                                    label="Name:"
                                    variant="outlined"
                                    density="comfortable">
                                </v-text-field>
                                <v-text-field 
                                    v-model="RegisterData.email"
                                    label="Email:"
                                    variant="outlined"
                                    density="comfortable">
                                </v-text-field>
                                <v-text-field 
                                    v-model="RegisterData.password"
                                    label="Password"
                                    :append-inner-icon="show ?'mdi-eye':'mdi-eye-off'"  
                                    :type="show ? 'text' : 'password'"
                                    @click:append-inner="show=!show"
                                    type="password"
                                    variant="outlined"
                                    density="comfortable">
                                </v-text-field>
                                <v-text-field 
                                    v-model="RegisterData.password_confirmation"
                                    label="Confirm Password"
                                    :append-inner-icon="show2 ?'mdi-eye':'mdi-eye-off'"  
                                    :type="show2 ? 'text' : 'password'"
                                    @click:append-inner="show2=!show2"
                                    type="password"
                                    variant="outlined"
                                    density="comfortable">
                                </v-text-field>
                            </div>
                        </template>
                        <template v-slot:actions>
                            <v-btn
                            block
                            type="sumbit"
                            variant="elevated"
                            text="create account"></v-btn>
                        </template>
                    </v-card>
                </v-form>
                <v-col>
                    
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style>
    .title-bar{
        width:7px;
        height: 35px;
        background-color: #263238;
    }
</style>