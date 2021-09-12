<template>
	<div class="ios-main">
		<div class="blog-item" v-for="(item,index) in blogs" :key="index">
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
	</div>
	
</template>

<script>
	export default{
		
		data(){
			return {
				
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
				
			}
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
	
</style>
