<template>
    <div class = "section">
  <div class ="header">Awards & Scholarships</div>
  <v-layout align-center justify-center>
           <img src="image/kookje.jpg" class="image">
       </v-layout>
    <div class = "panel">
      <v-expansion-panels
        v-model="panel1"
      >
        <v-expansion-panel>
        <v-expansion-panel-header>⁂ 성적우수장학 1종 & 2종 ⁂</v-expansion-panel-header>
          <v-expansion-panel-content>
            ○ 당해학기 성적이 우수한 자에게 지급하며, 학과·전공별 석차 순으로 지급

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels
        v-model="panel2"
      >
        <v-expansion-panel>
        <v-expansion-panel-header>⁂ 마일리지 장학금 ⁂</v-expansion-panel-header>
          <v-expansion-panel-content>
            ○ 비교과 교육과정 프로그램 참여 및 기타 활동으로 마일리지 포인트를 일정 기준 이상 취득한 자 <br>
            ○ 누적 포인트별 장학금 지급 금액은 장학위원회를 통해 변동 가능
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels
        v-model="panel3"
      >
        <v-expansion-panel>
        <v-expansion-panel-header>⁂ 봉사 장학금 8종 ⁂</v-expansion-panel-header>
          <v-expansion-panel-content>
            ○ 직전학기 성적이 평점평균 2.0 이상인 자로 학교발전에 공로가 있다고 인정된 자에게 지급 <br>
            ○ 총학생회, 대의원회, 학보사, 방송국 등 학생자치운영기구의 임원과 학생생활관 임원에게 지급
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels
        v-model="panel4"
      >
        <v-expansion-panel>
        <v-expansion-panel-header>⁂ ICQA 장학금⁂ </v-expansion-panel-header>
          <v-expansion-panel-content>
          ○ 자격증 프로그램에 참여 및 자격증 취득으로 인한 장학금
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels
        v-model="panel5"
      >
        <v-expansion-panel>
        <v-expansion-panel-header>⁂ 교내 근로 장학금 ⁂</v-expansion-panel-header>
          <v-expansion-panel-content>
            ○ 학교 행정부서 및 부속기관 등에 근무하는 자에게 지급
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        panel1: [],
        panel2: [],
        panel3: [],
        panel4: [],
        panel5: [],
      }
    },
    methods: {
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },

      none () {
        this.panel = []
      },
    },
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
  font-size:70px;
  font-weight:bold;
  padding-top:65px;
  padding-bottom:150px;
}
.image{
  width:600px;
  height:800px;
  outline: auto;
  object-fit: cover;
  padding: 20px;
}
.panel{
    padding-top:50px;
}
}

</style>