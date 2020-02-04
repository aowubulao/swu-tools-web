module.exports = {
    publicPath : './',
    devServer: {
        port: 7533,
        proxy: {
            '/swu': {
                target: 'http://api.neoniou.com'
            }
        }
    },
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
        }
    }
}