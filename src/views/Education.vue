<template>
  <div class = "section">
  <div class ="header">My Education</div>
  <v-timeline>
    <v-timeline-item
      color="red lighten-3"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="red lighten-3">
          <v-icon
            dark
            size="42"
            class="mr-8"
          >
            mdi-school
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">명지전문대학교</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              2022년 03월 - 2023년 02월 졸업예정<br> 정보통신공학과<br>Department of Information and Communication Engineering
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            <v-btn icon href="https://www.mjc.ac.kr/mjcIndex.do" target="_blank">
            <v-icon size="50" color="pink">mdi-map-marker</v-icon>
             </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="purple lighten-3"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="purple lighten-3 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">국제대학교</h2>
          <v-icon
            dark
            size="42"
          >mdi-account-school-outline</v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              2019년 03월 - 2022년 02월 졸업<br> 전자정보통신공학과 <br>Department of Electronic Information and Communication Engineering
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="15"
            >
            <v-btn icon href="https://www.kookje.ac.kr/kor/" target="_blank">
            <v-icon size="50" color="purple">mdi-map-marker</v-icon>
             </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="blue lighten-3"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="blue lighten-3">
          <v-icon
            class="mr-8"
            dark
            size="42"
          >
            mdi-account-school
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">서문여자고등학교</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              2017년 03월 - 2019년 02월 졸업<br>이공계 <br>Natural sciences
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            <v-btn icon href="https://suhmoon.sen.hs.kr/" target="_blank">
            <v-icon size="50" color="blue">mdi-map-marker</v-icon>
             </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>
</template>
<style scoped lang="less">
.section{
width:1190px;
margin: 0 auto;
padding-top:40px;
padding-bottom:40px;
.header{
  text-align: center;
  font-size:70px;
  font-weight:bold;
  padding-top:65px;
  padding-bottom:150px;
}
.image{
  width:170px;
  height:200px;
  outline: auto;
}

.text{
  font-size:10px;
  padding-left:65px;
  color:rgb(7, 9, 10)
}
.link{
  padding-top: 600px;
}
}

</style>