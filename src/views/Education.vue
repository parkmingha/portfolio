<template>
  <div class = "section">
  <div class ="header">My Education</div>
  <v-timeline>
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <!-- <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon> -->
          <h2 class="display-1 white--text font-weight-light">명지전문대학교</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              2022년 03월 - 2023년 02월 졸업예정<br> Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <!-- <v-icon size="64">mdi-calendar-text</v-icon> -->
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">국제대학교</h2>
          <!-- <v-icon
            dark
            size="42"
          >mdi-home-outline</v-icon> -->
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              2019년 03월 - 2022년 02월 졸업<br> Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <!-- <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon> -->
          <h2 class="display-1 white--text font-weight-light">서문여자고등학교</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              2017년 03월 - 2019년 02월 졸업<br> Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
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