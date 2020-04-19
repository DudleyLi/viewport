module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "~@/style/index.scss";`
        },
        }
      },
}