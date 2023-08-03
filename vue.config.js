const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@plugins': path.resolve(__dirname, 'src/plugins'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@layouts': path.resolve(__dirname, 'src/layouts')
      }
    }
  }
};
