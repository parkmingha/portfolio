<template>
<div class="header">
    <v-layout>
        <div class="logo" @click="home">박민하의 포트폴리오</div>
        <v-spacer></v-spacer>
        <v-btn text @click="career">Career</v-btn>
        <v-btn text @click="certificate">Certificate</v-btn>
        <v-btn text @click="portpolio">Portpolio</v-btn>
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
        portpolio() {
            this.$router.push("/portpolio")
            
        },
    }      
 };
</script>


<style scoped>
    .header{
        padding:20px;
        box-shadow: 0 6px #eee;
    }
    .header .logo{
        font-size:20px;
        font-weight:bold;
    }
</style>