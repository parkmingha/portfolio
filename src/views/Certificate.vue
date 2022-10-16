<template> 
  <div class = "section">
    <div class ="header">My Certificate</div>
 <v-card
   class="mx-auto"
   max-width="704"
 >
   <v-img
     src="image/linux.png"
     height="250px"
   ></v-img>

   <v-card-title>
     리눅스마스터 2급
   </v-card-title>

   <v-card-subtitle>
     Linux Master level 2<br>
     취득일자:2021.10.01

   </v-card-subtitle>

   <v-card-actions>
     <v-btn :href="'https://www.kait.or.kr/'" target="_blank"
       color="orange"
       text
     >
       한국정보통신진흥협회
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show1 = !show1"
     >
       <v-icon>{{ show1? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   <v-expand-transition>
     <div v-show="show1">
       <v-divider></v-divider>

       <v-card-text>
         리눅스로 운영되는 전세계 80% 이상의 스마트폰, 70% 이상의 클라우드 서버, 세계 상위의 500대 슈퍼컴퓨터를 비롯해서 5세대 이동통신(5G), 사물인터넷(IoT), 드론, 자율주행차 등 미래성장동력 분야에서 
         다양한 응용기반기술에 토대가 되는 자격종목이다. 리눅스 기반 시스템의 관리능력을 평가하는 1급 자격과 리눅스 운영시스템의 프로그램 사용능력을 평가하는 2급 자격으로 구분한다.
         리눅스마스터 1, 2급은 NCS(국가직무능력표준) 등을 바탕으로 SW기술자의 체계적 역량 가이드라인 ITSQF(IT분야역량체계)의 IT시스템관리자(L5, L3)로 인정한다.
       </v-card-text>
     </div>
   </v-expand-transition>
 </v-card>
 <br>
 <br>
 <v-card
   class="mx-auto"
   max-width="704"
 >
   <v-img
     src="image/network.png"
     height="250px"
   ></v-img>

   <v-card-title>
     네트워크관리사 2급
   </v-card-title>

   <v-card-subtitle>
     Network Administrator level 2 <br>
     취득일자:2021.06.01

   </v-card-subtitle>

   <v-card-actions>
     <v-btn :href="'https://www.icqa.or.kr/cn/'" target="_blank"
       color="blue"
       text
     >
       한국정보통신자격협회
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show2 = !show2"
     >
       <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   <v-expand-transition>
     <div v-show="show2">
       <v-divider></v-divider>

       <v-card-text>
         네트워크관리사란 서버를 구축하고 보안 설정, 시스템 최적화 등 네트워크구축 및 이를 효과적으로 관리할 수 있는 인터넷 관련 기술력에 대한 자격이다.
         네트워크 관련 업무 수행을 위한 일반적인 운용지식과 구축기술 NOS운영, Packet분석, Monitoring, 인터넷기술, Protocol 등 기초 이론과 실무능력이 필요하다.
       </v-card-text>
     </div>
   </v-expand-transition>
 </v-card>
 <br>
 <br>
 <v-card
   class="mx-auto"
   max-width="704"
 >
   <v-img
     src="image/drive.png"
     height="250px"
   ></v-img>

   <v-card-title>
     자동차운전면허증
   </v-card-title>

   <v-card-subtitle>
     Driver's license<br>
     취득일자:2019.03.29

   </v-card-subtitle>

   <v-card-actions>
     <v-btn :href="'https://www.koroad.or.kr/'" target="_blank"
       color="green"
       text
     >
       도로교통공단
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show3 = !show3"
     >
       <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
     </v-btn>
   </v-card-actions>

   <v-expand-transition>
     <div v-show="show3">
       <v-divider></v-divider>

       <v-card-text>
        운전면허의 경우는 승용자동차는 물론 승차정원 10명 이하의 승합자동차와 적재중량 4톤 이하의 화물자동차 및 총중량 3.5톤 이하의 특수자동차(대형견인차, 소형견인차 및 구난차는 제외) 등을 운전할 수 있다.
       </v-card-text>
     </div>
   </v-expand-transition>
 </v-card>
</div>
</template>
<script>
export default {
data: () => ({
 show1: false,
 show2: false,
 show3: false,
}),
}
</script>

<style scoped lang="less">
.section{
width:1190px;
margin: 0 auto;
padding-top:110px;
padding-bottom:150px;
background-color: rgb(255, 255, 255);
.header{
  text-align: center;
  font-size:60px;
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