<template>

	<div class="android-main">
		<transition-group name="more" v-bind:css="false" @before-enter="beforeEnter" @enter="enter"
			@after-enter="afterenter">
			<div class="blog-item" v-bind:data-index="index" v-show="showAnim" v-for="(item,index) in blogs"
				:key="item.id">
				<el-card class="card">
					<div class="card-div" @click="clickItem(item)">
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
	export default {
		name: 'android',
		data() {
			return {
				showAnim: false,
				blogs: [

					{
						title: "kotlin结合livedata+databing框架实现MVVM",
						details: "传统的项目中都是通过MVC或者MVP模式来实现的，最近公司的几个项目都用到了MVVM架构，通过数据驱动UI，只需要关注数据变化即可，非常方便",
						id: "1",
						type: 'android',
					},

					{
						title: "跨进程通信与binder机制",
						details: "Binder 是一种进程间通信机制，基于开源的 OpenBinder 实现；OpenBinder 起初由 Be Inc. 开发，后由 Plam Inc. 接手。从字面上来解释 Binder 有胶水、粘合剂的意思，顾名思义就是粘和不同的进程，使之实现通信",
						id: "2",
						type: 'android',
					},


					{
						title: "系统与app启动过程",
						details: "系统启动流程 开机之后，会启动init进程，它通过解析init.rc文件，启动Zygote和ServiceManager。之后Zygote进程会fork出SystemServer进程，并且开启各种系统服务......",
						id: "3",
						type: 'android',
					},

					{
						title: "Android GUI系统",
						details: "Android GUI系统主要由SufaceFlinger 以及WindowManagerService组成。由view产生的图像数据(BufferQueue)，最终都是通过SufaceFlinger进行合成，最终显示到屏幕上。",
						id: "4",
						type: 'android',
					},
					{
						title: "View的绘制流程",
						details: "调用attach方法生成phonewindow,在通过setcontentView生成顶级decorview。向WMS注册,最终调用performtraversals方法进行绘制",
						id: "5",
						type: 'android',
					},
					{
						title: "apk打包流程",
						details: "aapt将除了asset和res/raw以外的资源文件编译成resources.arsc,同时生成R.java,用于资源文件的映射。然后java编译器将R.java,源码以及intefaces打包成.class文件......",
						id: "6",
						type: 'android',
					},

				]


			}

		},

		methods: {
			clickItem(item) {

				this.$router.push({
					path: '/details',
					query: {
						id: item.id,
						type: 'android'
					}
				})
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
			//console.log("mounted")
			this.showAnim = true
		}

	}
</script>

<style scoped>
	@media(min-width:640px){
		.blog-item {}
		
		.android-main {
			padding-bottom: 50px;
		}
		
		.card {
			cursor: pointer;
			margin-left: 20px;
			margin-right: 20px;
			margin-bottom: 20px;
			height: 160px;
		}
		
		.card-div {}
		
		.title-div {
			font-size: 20px;
		}
		
		.title-div #title {}
		
		.details-div {
			margin-top: 20px;
		}
		
		.details-div #details {
		
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
	}
	@media (max-width:640px) {
		.blog-item {}
		
		.android-main {
			padding-bottom: 50px;
		}
		
		.card {
			cursor: pointer;
			margin-left: 20px;
			margin-right: 20px;
			margin-bottom: 20px;
			min-height: 160px;
		}
		
		.card-div {}
		
		.title-div {
			font-size: 16px;
		}
		
		.title-div #title {}
		
		.details-div {
			margin-top: 20px;
		}
		
		.details-div #details {
		
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
	}
</style>
