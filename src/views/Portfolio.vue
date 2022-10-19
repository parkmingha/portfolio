<template>
  <div class = "section">
  <div class ="header">My Portfolio</div>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="image/thumbnail.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            게시판 사이트
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
      <v-btn :href="'https://github.com/parkmingha/talkingmarket'" target="_blank"
          absolute
          color="blue"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon >mdi-magnify</v-icon>
        </v-btn>
        <h3 class="text-h4 font-weight-light blue--text mb-2">
          Talking Market
        </h3>
        <div class="font-weight-light text-h6 mb-2 bold">
          사용자들이 회원가입을 한 후 로그인을 하면 게시판 이용이 가능해지며 게시판 글 작성, 수정, 삭제 및 댓글 작성이 가능한 사이트입니다.
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
  
  
  </div>
</template>
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