<template>
	<view class="content" v-if="selected">
		<view class="image">
			<view class="img1"></view>
			<view class="img2"></view>
			<view class="img3"></view>
			<view class="img">
				<!-- <span>......</span> -->
			</view>
		</view>
		<view class="suozaidi">
			<span class="fa fa-arrow-circle-right"></span>
			<view class="location">
				{{location}}
			</view>
		</view>
		<view class="one">
			<span class="fa fa-align-center">
			</span>
			<view class="first_cont ">
				{{content_one}}
			</view>
		</view>
		<view class="two">
			<span class="fa fa-unlink"></span>
			<view class="second_cont">
				{{content_two}}
			</view>
		</view>
		<view class="three">
			<span class="fa fa-exclamation"></span>
			<view class="third_cont">
				{{content_three}}
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				content_one:'',
				content_two:'',
				content_three:'',
				location:''
			}
		},
		computed: {
			...mapState(['selected'])
		},
		props: ['card'],
		mounted(){
			setTimeout(()=>{
				this.content_one = this.card.zhiwuxiangtai
				this.content_two = this.card.gongxiao
				this.content_three = this.card.jinji
				this.location = this.card.chandifenbu
			},500)
		}
	}
</script>

<style lang="scss">
.content {
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	.image{
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		.img1{
			width: 60px;
			height: 60px;
			background-size: 150%;
			background-position: 23%;
			background-image: url('../../../static/caoyao_card/dangshenxijie.jpg');
			border-radius: 50px;
			margin: 20px 8px;
		}
		.img2{
			width: 60px;
			height: 60px;
			background-size: 150%;
			background-position: 23%;
			background-image: url('../../../static/caoyao_card/dangshenxijie2.jpg');
			border-radius: 50px;
			margin: 20px 8px;
		}
		.img3{
			width: 60px;
			height: 60px;
			background-size: 150%;
			background-position: 23%;
			background-image: url('../../../static/caoyao_card/dangshenxijie3.jpg');
			border-radius: 50px;
			margin: 20px 8px;
		}
		.img{
			width: 60px;
			height: 60px;
			background-color: #d4d4d4;
			background-image: url('../../../static/24gf-ellipsis.png');
			background-size: 50%;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: 50px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin: 20px 8px;
		}
	}
	.suozaidi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		
		width: 90vw;
		margin: 0 auto;
		.image{
			width: 20px;
			height: 20px;
		}
		.fa{
			margin-top: 5px;
		}
	}
	.one{
		display: flex;
		flex-direction: row;
		justify-content: center;
		.fa{
			margin-top: 15px;
		}
	}
	.first_cont{
		width: 85vw;
		// margin: 10px auto;
		margin-top: 10px;
	}
	.two{
		display: flex;
		flex-direction: row;
		justify-content: center;
		.fa{
			margin-top: 15px;
		}
	}
	.second_cont{
		width: 85vw;
		// margin: 10px auto;
		margin-top: 10px;
	}
	.three{
		display: flex;
		flex-direction: row;
		justify-content: center;
		.fa{
			margin-top: 15px;
			margin-right: 4px;
			margin-left: 4px;
		}
	}
	.third_cont{
		width: 85vw;
		// margin: 10px auto;
		margin-top: 10px;
	}
}
</style>
