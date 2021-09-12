import axios from 'axios';
export default{
	
	state:{
		test: 0,
	},
	mutations:{
	
	},
	
	actions:{
		async GetHtml({state},params){
			state.test = 0
			const options = {
				headers: {
					"content-type": "application/json",
					"cache-control": "no-cache",
				},
				params:params
			};
			
			let api = '/backend/details'
			
			return new Promise((resolve, reject) => {
			
				axios.get(api, options)
					.then(function(response) {
			
						resolve(response)
			
					})
					.catch(error => {
						reject(error)
					})
			
			})
			
		}
	}
	
	
}