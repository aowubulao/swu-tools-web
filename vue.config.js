module.exports = {
    publicPath : './',
    devServer: {
        port: 7533,
    },
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
        }
    }
}