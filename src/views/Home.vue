<template>
	<div class="home">
		<div class="header">
			<img src="../assets/logo.png" class="profile">
			<font class="title">Coding makes life better</font>

			<el-menu class="menu" :default-active="activeIndex" @select="handleSelect" mode="horizontal">
				<el-menu-item index="1">Android开发</el-menu-item>
				<el-menu-item index="2">iOS开发</el-menu-item>
				<el-menu-item index="3">Web开发</el-menu-item>
				<!-- <el-menu-item index="4">算法</el-menu-item>
				<el-menu-item index="5">服务端开发</el-menu-item> -->
			</el-menu>
		</div>
		<div class="bottom-container">
			<div class="bottom">

				<el-card class="left" body-style="padding:0">
					<div class="rowdiv">
						<span class="left-des">职业：大前端工程师</span>
					</div>
					<div class="rowdiv">
						<span class="left-des">地点：北京</span>
					</div>
					<div class="rowdiv">
						<div>
							<span class="left-des">擅长技能</span>
						</div>

						<el-tag class="tag">java</el-tag>
						<el-tag class="tag" type="success">swift</el-tag>
						<el-tag class="tag" type="info">kotlin</el-tag>
						<el-tag class="tag" type="warning">javascript</el-tag>
						
					</div>

					<my-chart class="mychart"></my-chart>
				</el-card>

				<div class="right">
					<keep-alive :include="cached">
						<router-view></router-view>
					</keep-alive>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import MyChart from '../components/MyEchart.vue'
	export default {
		data() {
			return {
				activeIndex: "1",
				cached: "android,ios,web,data,server"
			}
		},
		components: {
			MyChart,
		},
		methods: {

			handleSelect(key) {
				switch (key) {
					case "1":
						this.$router.push('/android')
						break;
					case "2":
						this.$router.push('/ios')
						break;
					case "3":
						this.$router.push('/web')
						break;
					case "4":
						this.$router.push('/data')
						break;
					case "5":
						this.$router.push('/server')
						break;
				}
			}
		},



		watch: {
			$route: {
				immediate: true,
				handler(to) {
					if (to.path === "/android") {
						this.activeIndex = "1"
					} else if (to.path === "/ios") {
						this.activeIndex = "2"
					} else if (to.path === "/web") {
						this.activeIndex = "3"
					} 
					//每次跳转都返回顶部
					document.body.scrollTop = 0
					document.documentElement.scrollTop = 0

				},
			},

		}

	}
</script>

<style scoped>
	.home {
		
		min-height: 100vh;
	}

	.header {
		width: 1300px;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		position: relative;
		display: flex;
		height: 150px;
	}

	.profile {
		
		border-radius: 50%;
		width: 100px;
		height: 100px;
	}

	.title {
		margin-left: 50px;
		font-size: 16px;
	}
	.bottom-container{
		background-color: #f5f5f5;
		width: 100%;
		height: 100%;
	}
	.bottom {
		margin-right: auto;
		margin-left: auto;
		width: 1300px;
		height: 100%;
		display: flex;

	}

	.menu {

		right: 50px;
		position: absolute;
	}

	.left {

		margin-top: 20px;
		width: 300px;
		height: 500px;
	}

	.rowdiv {
		margin: 20px;
	}

	.left-des {
		font-weight: 600;
		font-size: 14px;
	}

	.right {
		margin-left: 20px;
		margin-top: 20px;
		width: 980px;
		height: 100%;
	}

	.tag {
		margin-top: 10px;
		margin-right: 10px;
	}
</style>
