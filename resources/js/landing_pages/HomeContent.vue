<template>
    <div>
        <v-container fluid class="pa-0">
            <div class="position-relative bottom-wrapper-container">
            <v-parallax 
            height="90vh"
            src="../../images/background.jpg"> 
            <div class=" w-100 h-100 d-flex align-center">
                <v-card
                append-icon="mdi-check"
                class="pa-5 opacity-70 ma-5"
                min-width="300px"
                height="200px"
                color="primary"
                prepend-icon="mdi-account"
                subtitle="prepend-icon and append-icon"
                title="Icons"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.">
                <template v-slot="actions">
                <div class="d-flex">
                    <v-spacer></v-spacer>
                    <v-btn
                    variant="tonal">
                        Click Me
                    </v-btn>
                </div>
                </template>

                </v-card>
                
            </div>
            


            </v-parallax>
            
                <div class="bottom-wrapper position-absolute d-flex flex-row-reverse align-baseline" >
                    <div class="box-right box-color"></div>
                    <div class="box-left mr-6 box-color"></div>
                    <div class="box-left-mini mr-3 box-color"></div>
                    <div class="box-left-mini2 mr-3 box-color"></div>
                </div>
            </div>
        </v-container>
    </div>
</template>
<style scope>
.bottom-25{
    bottom:15%;
}
.bottom-wrapper-container{

}
.bottom-wrapper{
    width: 120%;
    height: 10vh;
    /* background-color: #424242; */
    bottom: -2.5%;
    right: -10%;
    -webkit-filter: drop-shadow(5px 5px 5px #666666);
    filter: drop-shadow(5px 5px 5px #666666);
}
.box-color{
    background-color: #424242;
}
.box-right{
    position: relative;
    width:35%;
    height: 100%;
    z-index: 1;
    transform: skew(-30deg);
    /* border-style: inset; */
    border-top:2px solid #ffffff ;
    border-left:2px solid #ffffff ;
    border-bottom: none;
    box-shadow:5px 5px 5px #FFC107 inset;

}
.box-left{
    width:20%;
    height: 50%;
    transform: skew(-30deg);
    border-top:2px solid #ffffff ;
    border-left:2px solid #ffffff ;
    border-bottom: none;
    box-shadow:5px 5px 5px #FFC107 inset;
}
.box-left-mini{
    width:4%;
    height: 50%;
    transform: skew(-30deg);
    border-top:2px solid #ffffff ;
    border-left:2px solid #ffffff ;
    border-bottom: none;
    box-shadow:5px 5px 5px #FFC107 inset;
}
.box-left-mini2{
    width:1%;
    height: 50%;
    transform: skew(-30deg);
    border-top:2px solid #ffffff ;
    border-left:2px solid #ffffff ;
    border-bottom: none;
    box-shadow:5px 5px 5px #FFC107 inset;
}

</style>