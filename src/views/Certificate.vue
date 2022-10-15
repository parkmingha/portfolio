<template>
     
     <div class = "section">
       <div class ="header">My Certificate</div>
       <v-layout wrap>
         <v-flex xs4 class="pa-2" data-aos="fade-up">
           <v-responsive :aspect-ratio="1/1">
           <img src="image/linux.png" class="image" @click="linux">
         </v-responsive>
         <div class = "text"> Linux Master </div>
         </v-flex>
         <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="200">
           <v-responsive :aspect-ratio="1/1">
           <img src="image/network.png" class="image" @click="network">
         </v-responsive>
         <div class = "text"> Network Administrator </div>
         </v-flex>
         <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="400">
           <v-responsive :aspect-ratio="1/1">
           <img src="image/drive.png" class="image" @click="drive">
         </v-responsive>
         <div class = "text"> Driver's license </div>
         </v-flex>
       </v-layout>
     </div>
   </template>
   
   <script>
   import { Swiper , SwiperSlide } from 'vue-awesome-swiper'
     import 'swiper/swiper-bundle.css'
     import AOS from "aos"
     import "aos/dist/aos.css";
   
      export default {
       name: 'Home',
       data(){
         return {
           swiperOption:{
             loop:true,
             autoPlay:{
               delay:3000
             }
           }
         }
       },
       methods: {
        linux() {
            this.$router.push("/certificate/linux")
        },
        network() {
            this.$router.push("/certificate/network")
        },
        drive() {
            this.$router.push("/certificate/drive")
        },
       },
       mounted(){
         AOS.init()
       },
       components:{
           Swiper,
           SwiperSlide
       }
     }
   </script>
   <style scoped lang="less">
    .section{
     width:1190px;
     margin: 0 auto;
     padding-top:80px;
     padding-bottom:150px;
     background-color: rgb(255, 255, 255);
     .header{
       text-align: center;
       font-size:40px;
       font-weight:bold;
       padding-bottom:150px;
     }
     .image{
       width:100%;
       height:100%;
       object-fit: cover;
       padding: 20px;
     }
     .text{
    text-align: center;
    font-size:33px;
    font-weight:bold;
    
  }
    }
   
   </style>