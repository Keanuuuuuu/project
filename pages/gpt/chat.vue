<template>
	<view id="parent" class="charts-box">
		<view class="gpt" v-show="init">
			<image src="../../static/logo.png">
			<view class="answer">
				<p>你好，请问有什么我可以帮到您的?</p>
			</view>
		</view>
		
		<view class="gpt foo" v-for="(item,index) in context" :key="index" :class="{ odd: index % 2 === 0, even: index % 2 === 1 }">
			<image :src="getImg(index)">
			<view class="question">     
				<p>{{item}}</p>
			</view>
		</view>
		
		
		<view class="input" @keydown.enter="send">
			<input id="inputcontent" v-model="question" type="text" placeholder="请输入你的问题">
			<image  @click="send" src="../../static/send.png">
		</view>
		
	</view>
</template>

<script>
	import $ from 'jquery'		
	export default {
		data() {
			return {
				init:false,
				isAnswering:false,
				question:'',
				answer:'',
				context:[]
			};
		},
		onReady() {
			setTimeout(()=>{
				this.init = true
			},600)
		},
		methods: {
			getImg(index){
				if (index % 2 === 0) {
				  return require('../../static/acount.png');
				} else {
				  return require('../../static/logo.png');
				}
			},
			handleAnswer(){
				setTimeout(()=>{
					this.context.push('你说的对')
					this.move()
				},1000)
				
			},
			response(){
				this.handleAnswer()
				this.isAnswering = false
			},
			handleSend(){
				if(this.isAnswering){
					return
				}
				if(this.question.trim() !== ''){
					this.context.push(this.question)
					this.question = ''
				}
				this.isAnswering = true
				this.response()
			},
			send(){
				this.handleSend()
				console.log(index)
			}
		},
	};
</script>
<style lang="scss" scoped>
	.even {
	  	// 机器 偶数
	  flex-direction: row!important;
	}
	.odd {
	  // 用户 奇数
	}
	.question,.answer{
		border-radius: 5px;
		margin-right: 10px;
		padding-right: 10px;
		p{
			margin-left: 15px;
			margin-bottom: 10px;
			width: 215px;
			white-space: pre-wrap;
			word-wrap: break-word;
		}
		background-color: antiquewhite;
	}
	.gpt{
		// border: 2px solid rgba(56, 126, 135, 0.7);
		display: flex;
		margin: 40px 10px;
		image{
			width: 40px;
			height: 40px;
			margin-right: 10px;
		}
		p{
			margin-top: 10px;
		}
	}
	.foo{
		flex-direction: row-reverse;
	}
	.input{
		background-color: #fff;
		position: fixed;
		margin-bottom: 10px;
		bottom: 18px;
		left: 50%;
		transform: translateX(-50%);
		border: 2px solid rgba(56, 126, 135, 0.7);
		border-radius: 5px;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
		width: 80%;
		height: 35px;
		image{
			position: absolute;
			right: 10px;
			top: 6px;
			height: 75%;
			width: 9%;
		}
		input{
			// border: 2px solid rgba(56, 126, 135, 0.7);
			margin-top: 6px;
			margin-left: 8px;
			width: 82%;
		}
	}
	.charts-box{
		padding-bottom: 50px;
	}
</style>
