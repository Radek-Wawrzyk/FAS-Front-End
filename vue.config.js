module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/components/variables.scss";`
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
}
