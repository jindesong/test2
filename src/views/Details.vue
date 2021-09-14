<template>
	<el-card v-loading="loading" body-style="padding:0" class="detail-main">
		<div class="header">
			<el-page-header class="pageheader" @back="goBack">
			</el-page-header>
			<!-- <font class="title">this is a test</font> -->
		</div>
		
		<markdown-it-vue class="md-body" :content="content" :options="options" />
	</el-card>
</template>

<script>
	import MarkdownItVue from 'markdown-it-vue'
	import 'markdown-it-vue/dist/markdown-it-vue.css'
	import {
		mapActions
	} from 'vuex'
	export default {
		components:{
			MarkdownItVue
		},
		data() {
			return {
				loading: false,
				content: '',
				options: {
					markdownIt: {
						linkify: true
					},
					linkAttributes: {
						attrs: {
							target: '_blank',
							rel: 'noopener'
						}
					}
				}
			}
		},

		created() {
			let params = {}
			params.type = this.$route.query.type
			params.id = this.$route.query.id
			this.loading = true
			this.GetHtml(params).then((res)=>{
				this.content = res.data
				this.loading = false
			}).catch(()=>{
				this.loading = false
			})
			
		},
		methods: {
			...mapActions(['GetHtml']),
			// loadHtml(elm, html) {

			// 	elm.innerHTML = html;
			// 	Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
			// 		const newScript = document.createElement("script");
			// 		Array.from(oldScript.attributes)
			// 			.forEach(attr => newScript.setAttribute(attr.name, attr.value));
			// 		newScript.appendChild(document.createTextNode(oldScript.innerHTML));
			// 		oldScript.parentNode.replaceChild(newScript, oldScript);
			// 	});
			// 	this.$forceUpdate()
			// },


			goBack() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.detail-main {}

	.header {
		margin-top: 10px;
		display: flex;
		align-items: center;
		height: 50px;
	}

	.pageheader {
		margin-left: 20px;
	}

	.title {
		margin-left: 30px;
	}


	.md-body{
		margin: 30px;
	}
</style>
