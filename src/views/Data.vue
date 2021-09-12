<template>
	
	<div class="data-main">
		<div class="blog-item" v-for="(item,index) in blogs" :key="index">
			<el-card class="card">
				<div class="card-div">
					<div class="title-div">
						<font id="title">{{item.title}}</font>
					</div>
					<div class="details-div">
						<font id="details">{{item.details}}</font>
					</div>
				</div>
			</el-card>
		</div>
	</div>
	
</template>

<script>
	export default{
		
		data(){
			return {
				
				blogs: [
					
					{
						title: "背包问题",
						details: "MVVM架构实现",
					},
					{
						title: "前缀和",
						details: "跨进程通信与binder机制"
					},
					{
						title: "单调栈",
						details: "跨进程通信与binder机制",
					},
					{
						title: "双指针",
						details: "跨进程通信与binder机制",
					},
					{
						title: "二分法",
						details: "跨进程通信与binder机制",
					},
					{
						title: "数组和链表",
						details: "跨进程通信与binder机制",
					},
					
					
				]
				
				
			}
		}
		
	}
</script>

<style scoped>
	.blog-item{
		
	}
	.data-main{
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
	
</style>

