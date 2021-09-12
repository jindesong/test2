<template>
	<div class="android-main">
		<div class="blog-item" v-for="(item,index) in blogs" :key="index">
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
		<el-backtop></el-backtop>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				blogs: [{
						title: "vue 结合vuex动态改变routerview",
						details: "keep alive 里面有一个inclue属性，可以支持动态配置，需要做缓存的页面的name,用逗号隔开，拼接成字符串。",
						id: "1",
						type: 'web',
					},
					{
						title: "vue 数据双向绑定原理",
						details: "vue采用了订阅发布模式来实现数据双向绑定，主要由订阅器dep，观察者observer, 订阅者watcher，以及编译器compile组成。",
						id: "2",
						type: 'web',
					},
					{
						title: "vue封装组件库并上传到npm",
						details: "最近公司的几个项目中，经常会出现重复的组件，一开始还好，但是项目多起来以后，每一次改动，都要在不同项目中更改一次，很麻烦也容易出错，所以自己就花时间研究了一下封装组件库上传到npm",
						id: "3",
						type: 'web',
					},
					{
						title: "深入响应式原理",
						details: "响应式对于一些特殊情况的处理",
						id: "4",
						type: 'web',
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
						type: 'web'
					}
				})
			}
		},

	}
</script>

<style scoped>
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
</style>
