<template>
  <view class="content">
    <view class="charts-box" style="height: 400px;">
      <qiun-data-charts type="map" :opts="{extra:{map:{mercator:true}}}" @getIndex="fn" :chartData="chartsDataMap1"/>
	  <view class="title">
	  	<view class="decoration"></view>
		<span class="text">中国药材分布</span>
	  </view>	
	</view>
	<view class="alert">
		<p>*地图来源于高德开放平台，<br>该版本数据更新于2021.5</p>
	</view>
  </view>
</template>

<script>
import mapdata from '@/mockdata/mapdata.json'

export default {
  data() {
    return {
      chartsDataMap1:{}
    };
  },
  onReady() {
    //模拟从服务器获取数据
    this.getServerData()
  },
  methods: {
    getServerData() {
      setTimeout(() => {
      	this.chartsDataMap1={series:mapdata.features}
      }, 300);
    },
	fn(e) {
		if (e.currentIndex === 16) {
			setTimeout(()=>{
				uni.navigateTo({
					url:'./hubei'
				})
			},300)
		}

	}
  },
};
</script>

<style scoped>
.alert{
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: 5px;
	color: gray;
}
.charts-box {
  width:90%;
  padding: 5px 10px 30px;
  border: 3px solid rgba(56, 126, 135, 0.7);
  border-radius: 8px;
  /* box-shadow: 8px 7px 10px rgba(0,0,0,.5); */
  position: absolute;
  left: 50%;
  top: 44%;
  transform: translate(-50%,-50%);
}
.title{
	position: absolute;
	left: 50%;
	bottom: 20px;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
}
.decoration{
	display: inline-block;
	height: 30px;
	width: 5px;
	border: 1px solid rgb(52, 104, 104);
	border-radius: 10px;
	background-color: rgb(52, 104, 104);
}
.text{
	margin-left: 8px;
	color: rgb(52, 104, 104);
	letter-spacing: 1px;
	font-weight: 600;
}
</style>
