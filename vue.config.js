module.exports = {
	devServer: {
		
		proxy: {
			'^/backend': {
				target: 'http://localhost:3000',
				ws: true,
				changeOrigin: true
			},
		}
	},
	
};
