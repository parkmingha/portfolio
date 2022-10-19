<template>
  <div class = "section">
  <div class ="header">My Career</div>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      data-aos="zoom-in-up" data-aos-delay="300">
      <v-img
        :aspect-ratio="16/9"
        src="image/pcb.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            (주)크레탐
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
      <div class="font-weight-light grey--text text-h6 mb-2">
          2021.07~2019.08
        </div>
        <div class="font-weight-light grey--text text-h6 mb-2">
          
        </div>
        <h3 class="text-h4 font-weight-light orange--text mb-2">
          (주)크레탐
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          PCB설계 및 제품 관리
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
  <br>
 <br>

    <v-hover v-slot="{ hover }">
    <v-card 
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      data-aos="zoom-in-up" data-aos-delay="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="image/engineering.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            (주)강텍엔지니어링
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <div class="font-weight-light grey--text text-h6 mb-2">
          2018.11~2019.01
        </div>
        <h3 class="text-h4 font-weight-light orange--text mb-2">
          (주)강텍엔지니어링
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          도면정리 및 EXCEL 작업
        </div>
      </v-card-text>
    </v-card>
  </v-hover>

  
  </div>
</template>
<script>
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
    },
    mounted(){
      AOS.init()
    },
  }
</script>

<style scoped lang="less">

.section{
width:1190px;
margin: 0 auto;
padding-top:40px;
padding-bottom:40px;
}
.header{
  text-align: center;
  font-size:70px;
  font-weight:bold;
  padding-top:65px;
  padding-bottom:150px;
}
.image{
     width:100%;
     height:100%;
     object-fit: cover;
     }
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
    padding-top:40px;
}
</style>