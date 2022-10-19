<template>
 <div>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide data-aos="fade-in" data-aos-duration="1000" class="slide" style="background-image:url(image/bg1.jpg);">
      <v-layout data-aos="fade-up" data-aos-duration="1000" fill-height align-center justify-center>
        <div class="slog">명지전문대학 졸업프로젝트 중간고사</div>
      </v-layout>
    </swiper-slide>
    
  
    <swiper-slide class="slide" style="background-image:url(image/bg2.jpg);">
      <v-layout fill-height align-center justify-center>
        <div class="slog">2022541004 박민하</div>
      </v-layout>
    </swiper-slide>
   
    <swiper-slide class="slide" style="background-image:url(image/bg3.jpg);">
      <v-layout fill-height align-center justify-center>
        <div class="slog">저의 포트폴리오를 소개합니다</div>
      </v-layout>
    </swiper-slide>
  </swiper>
  
  <div class = "section">
    <div class ="header">Contents</div>
    <v-layout wrap>
      <v-flex xs4 class="pa-2" data-aos="zoom-in-up" data-aos-delay="200">
        <v-responsive :aspect-ratio="1/1">
        <img src="image/aboutme.png" class="image" @click="aboutme">
      </v-responsive>
      <div class = "text"> About me </div>
      </v-flex>
      <v-flex xs4 class="pa-2" data-aos="zoom-in-up" data-aos-delay="400">
        <v-responsive :aspect-ratio="1/1">
        <img src="image/education.png" class="image" @click="education">
      </v-responsive>
      <div class = "text"> Education </div>
      </v-flex>
      <v-flex xs4 class="pa-2" data-aos="zoom-in-up" data-aos-delay="600">
        <v-responsive :aspect-ratio="1/1">
        <img src="image/career.png" class="image" @click="career">
      </v-responsive>
      <div class = "text"> Career </div>
      </v-flex>
      <v-flex xs4 class="pa-2" data-aos="zoom-in-up" data-aos-delay="800">
        <v-responsive :aspect-ratio="1/1">
        <img src="image/certificate.png" class="image" @click="certificate">
      </v-responsive>
      <div class = "text"> Certificate </div>
      </v-flex>
      <v-flex xs4 class="pa-2" data-aos="zoom-in-up" data-aos-delay="1000">
        <v-responsive :aspect-ratio="1/1">
          <img src="image/portfolio.png" class="image" @click="portfolio">
      </v-responsive>
      <div class = "text"> Portfolio </div>
      </v-flex>
      <v-flex xs4 class="pa-2" data-aos="zoom-in-up" data-aos-delay="1200">
        <v-responsive :aspect-ratio="1/1">
        <img src="image/awards.png" class="image"  @click="awards">
      </v-responsive>
      <div class = "text"> Awards & Scholarships </div>
      </v-flex>
    </v-layout>
  </div>
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
      certificate() {
        this.$router.push("/certificate")
      },
      career() {
        this.$router.push("/career")
      },
      portfolio() {
        this.$router.push("/portfolio")
      },
      aboutme() {
        this.$router.push("/aboutme")
      },
      education() {
        this.$router.push("/education")
      },
      awards() {
        this.$router.push("/awards")
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
  .swiper{
    height:100vh;
    .slide{
      background-size:cover;
      background-position: center center;
    .slog{
      font-size:60px;
      font-weight:bold;
      color:rgba(10, 7, 7, 0.869);
    }
  }
 }

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
    padding: 50px;
  }
  .text{
    text-align: center;
    font-size:40px;
    font-weight:bold;
    
  }
 }

</style>