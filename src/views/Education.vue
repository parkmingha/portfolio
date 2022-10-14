<template>
     <div class = "section">
       <div class ="header">My Education</div>
       <v-layout wrap>
         <v-flex xs4 class="pa-2" data-aos="fade-up">
           <v-responsive :aspect-ratio="1/1">
           <img src="image/top1.jpg" class="image">
         </v-responsive>
         </v-flex>
         <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="200">
           <v-responsive :aspect-ratio="1/1">
           <img src="image/top2.jpg" class="image">
         </v-responsive>
         </v-flex>
         <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="400">
           <v-responsive :aspect-ratio="1/1">
           <img src="image/top3.jpg" class="image">
         </v-responsive>
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
     padding-top:40px;
     padding-bottom:40px;
     .header{
       text-align: center;
       font-size:40px;
       font-weight:bold;
     }
     .image{
       width:100%;
       height:100%;
       object-fit: cover;
     }
    }
   
   </style>