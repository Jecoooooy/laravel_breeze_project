<template>
    <div class="d-flex mt-10 align-center w-100">
        <v-divider class="opacity-50" :thickness="3"></v-divider>
        <h3 class="ma-5 text-center text-h3">About</h3>
        <v-divider class="opacity-50" :thickness="3"></v-divider>
    </div>
    <v-container>
        <v-col  xs="8" cols="12" sm="6" md="6" lg="4" xl="3" xxl="3" class="image-wrapper pa-0 float-left">
            <img src="../../images/jerico.png" alt="" >
        </v-col>
        <h4 class="text-h4">Jerico B. Bencito</h4>
        <h6 class="text-h6">Full Stack website Developer</h6>
        
        <p class="text-justify text-indent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br>
        <p class="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </v-container>
</template>
<style scope>

.image-wrapper img{
    width: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px #666666);
    filter: drop-shadow(5px 5px 5px #666666);
}

</style>