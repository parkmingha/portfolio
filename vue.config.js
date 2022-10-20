const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/portfolio",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})
