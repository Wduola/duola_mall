module.exports = {
	// 开发服务器
	devServer:{
		// 解决跨域问题方法一：配置代理服务器
		// 注意：小程序不存在跨域问题，直接配置服务器域名即可，H5存在跨域问题；
		proxy:{//配置代理服务器
			'/api':{
				target:'http://localhost:3002',
				changeOrigin:true,//允许跨域
				pathRewrite:{
					'^/api':''//以/api开头的替换为空串
				}
			}
		}
	}
}