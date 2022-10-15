<template>
  <div class = "section">
    <div class ="header">About Me</div>
       <v-layout align-center justify-center>
           <img src="image/me.jpg" class="image">
           <div class = "text">
           <h1><v-icon>mdi-account-circle</v-icon>: Park Min Ha<br><v-icon>mdi-phone</v-icon>: 010-2433-8610<br><v-icon>mdi-email</v-icon>: mhtm_love@naver.com
            <br><v-icon>mdi-cake</v-icon>: 29th April, 2000<br><v-icon>mdi-home</v-icon>: 257 Ga-gil 25, Nambusunhwan-ro, Dongjak-gu, Seoul
           </h1>
          </div>
       </v-layout>
       <div class = "link">
  <v-bottom-navigation grow dark>
    <v-btn :href="'https://github.com/parkmingha'" target="_blank">
      <span>GitHub</span>
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn :href="'https://open.kakao.com/o/stHUTUHe'" target="_blank">
      <span>kakaotalk</span>
      <v-icon>mdi-chat</v-icon>
    </v-btn>

    <v-btn :href="'https://www.instagram.com/b_minha/'" target="_blank">
      <span>Instagram</span>
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    </v-bottom-navigation>
  </div>
  </div>
      
</template>

<script>



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