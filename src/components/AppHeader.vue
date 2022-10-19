<template>
<div class="header">
    <v-layout>
        <div class="logo" @click="home">박민하의 포트폴리오</div>
        <v-spacer></v-spacer>
        <div class="button">
        <v-btn text  @click="home">Home</v-btn>
        <v-btn text @click="career">Career</v-btn>
        <v-btn text @click="certificate">Certificate</v-btn>
        <v-btn text @click="portfolio">Portfolio</v-btn>
    </div>
    </v-layout>
</div>
</template>
<script>


export default{
    name: "Home",
    methods: {
        home() {
            this.$router.push("/")
        },
        career() {
            this.$router.push("/career")
            
        },
        certificate() {
            this.$router.push("/certificate")
            
        },
        portfolio() {
            this.$router.push("/portfolio")
            
        },
    }      
 };
</script>


<style scoped>
    .header{
        position: fixed; 
        top: 0px;
        width:100%;
        z-index: 100;
        padding:20px;
        box-shadow: 0 6px rgb(136, 133, 133);
        background-color: rgb(186, 186, 185);
    }
    .header .logo{
        font-size:20px;
        font-weight:bold;
        color:rgb(56, 55, 55)
    }
</style>