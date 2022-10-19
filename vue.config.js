const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/portpolio",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})
