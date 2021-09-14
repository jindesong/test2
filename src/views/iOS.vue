<template>
	<div class="ios-main">
		<transition-group name="more" v-bind:css="false" @before-enter="beforeEnter" @enter="enter"
			@after-enter="afterenter">
		<div class="blog-item" v-bind:data-index="index" v-show="showAnim" v-for="(item,index) in blogs" :key="item.id">
			<el-card class="card">
				<div class="card-div" @click="onClick(item)">
					<div class="title-div">
						<font id="title">{{item.title}}</font>
					</div>
					<div class="details-div">
						<font id="details">{{item.details}}</font>
					</div>
				</div>
			</el-card>
		</div>
		</transition-group>
		<el-backtop></el-backtop>
	</div>
	
</template>

<script>
	export default{
		name: 'ios',	
		data(){
			return {
				showAnim: false,
				blogs: [
					
					{
						title: "【基础】iOS动画",
						details: "MVVM架构实现",
						id: "1",
						type: 'iOS',
					},
									
				]
				
				
			}
		},
		methods:{
			onClick(item){
				let path = '/details/'+item.id+'?type='+item.type
				this.$router.push(path)
				
			},
			beforeEnter(el) {
				el.style.opacity = 0
			},
			enter(el, done) {
				//console.log(el.dataset.index)
			
				let delay = el.dataset.index * 200
				//console.log(delay)
				setTimeout(() => {
					el.style.opacity = 0
					el.classList.add('slidegroup-enter-class')
					done()
				}, delay)
			},
			afterenter(el) {
				el.addEventListener('animationend', () => {
					el.classList.remove('slidegroup-enter-class');
					el.style.opacity = 1
				})
				console.log("after enter")
			},
		},
		mounted() {
			this.showAnim = true
		}
		
	}
</script>

<style scoped>
	.blog-item{
		
	}
	.ios-main{
		padding-bottom: 50px;
	}
	.card{
		cursor: pointer;
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 20px;
		height: 160px;
	}
	.card-div{
		
	}
	.title-div{
		font-size: 20px;
	}
	.title-div #title{
		
	}
	
	.details-div{
		margin-top: 20px;
	}
	
	.details-div #details{
		
		font-size: 14px;
	}
	.slidegroup-enter-class {
	
		-webkit-animation-name: fadeInOut;
		-webkit-animation-timing-function: ease-in-out;
		/* -webkit-animation-iteration-count: infinite; */
		-webkit-animation-duration: 1s;
		-webkit-animation-direction: alternate;
	}
	
	@keyframes fadeInOut {
		0% {
			/* padding-bottom: 100%; */
			opacity: 0;
		}
	
		50% {
			opacity: 0.5;
		}
	
		75 {
			opacity: 0.75;
		}
	
		100% {
			/* padding-bottom: 0%; */
			opacity: 1;
		}
	}
	
</style>
