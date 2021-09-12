<template>
	<div :id="id" :class="className"/>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				className: {
					type: String,
					default: 'myChart'
				},
				id: {
					type: String,
					default: 'myChart'
				},
				option: {
					radar: [{
						indicator: [{
								text: 'android',
								max: 100
							},
							{
								name: 'iOS',
								max: 100
							},
							{
								name: 'web',
								max: 100
							},
							
						],
						center: ['46%', '50%'], // 位置
						radius: 70, //大小
						startAngle: 90, // 雷达图的旋转偏移量
						splitNumber: 1, // 分层5层，当前最大1000，可理解为每层200
						shape: 'line',
						name: {
							formatter: '{value}',
							textStyle: {
								color: '#595959', // 文字颜色
								fontSize: 13
							}
						},
						splitArea: {
							areaStyle: {
								color: ['#FFFFFF', '#EEEEEE', '#FFFFFF', '#EEEEEE', '#FFFFFF']
								//圆环颜色
							}
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(128, 128, 128, 0.1)' // 五角内部的连接线颜色
							}
						},
						splitLine: {
							lineStyle: {
								color: '#595959' // 每个区域的边框颜色
							}
						}
					}],
					series: [{
						name: '雷达图',
						type: 'radar',
						itemStyle: {
							emphasis: {
								// color: 各异,
								lineStyle: {
									width: 4
								}
							}
						},
						data: [{
							value: [85, 70, 65], // 排序从顶部→左→左下角→右下角→右侧
							lineStyle: { // 五点连接线的样式。
								normal: {
									opacity: 1, // 图形透明度,
									color: '#1F6AFB'
								}
							},
							itemStyle: { // 单个拐点标志的样式设置。
								normal: {
									borderColor: '#1F6AFB',
									// 拐点的描边颜色。[ default: '#000' ]
									borderWidth: 3,
									// 拐点的描边宽度，默认不描边。[ default: 0 ]
								}
							},
							areaStyle: {
								normal: {
									color: 'rgba(128, 128, 128, 0.1)' // 五点连接后形成的区域颜色: 透明色
								}
							}
						}]
					}]
				},


			}
		},
		methods: {

		},

		mounted() {

			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(document.getElementById(this.id))
			// 绘制图表
			myChart.setOption(this.option);

		}



	}
</script>

<style scoped>
	.mychart{
		width: 300px;
		height: 300px;
	}
</style>
