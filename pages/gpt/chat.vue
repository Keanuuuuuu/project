<template>
	<view id="parent" class="charts-box">
		<view class="gpt">
			<img src="../../static/logo.png">
			<view class="answer">
				<p>你好，请问有什么我可以帮到您的?</p>
			</view>
		</view>
		<view class="gpt foo">
			<img src="../../static/acount.png">
			<view class="question">
				<p>大黄的功效有哪些？</p>
			</view>
		</view>
		<view class="input">
			<input type="text" placeholder="请输入你的问题">
			<img @click="send" src="../../static/send.png">
		</view>
	</view>
</template>

<script>
	import $ from 'jquery'
	const parent = document.getElementById("parent")
	
	export default {
		data() {
			return {
				q:""
			};
		},
		onReady() {
		},
		methods: {
			handleSend(){
				let gpt = document.createElement('view');
				gpt.classList.add('gpt');
				gpt.classList.add('foo');
				gpt.innerHTML = "111"
			// 	`<img src="../../static/acount.png">
			// <view class="question">
			// 	<p>大黄的功效有哪些？</p>
			// </view>`
				parent.appendChild(gpt);
			},
			send(){
				console.log(11111)
				this.handleSend()
				console.log(555)
			}
		},
	};
</script>
<style lang="scss" scoped>
	.question,.answer{
		width: 290px;
		border-radius: 5px;
		margin-right: 10px;
		p{
			margin-left: 15px;
			width: 100%;
			white-space: pre-wrap;
			word-wrap: break-word;
		}
		background-color: antiquewhite;
	}
	.gpt{
		// border: 2px solid rgba(56, 126, 135, 0.7);
		display: flex;
		margin: 40px 10px;
		img{
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
		position: fixed;
		bottom: 18px;
		left: 50%;
		transform: translateX(-50%);
		border: 2px solid rgba(56, 126, 135, 0.7);
		border-radius: 5px;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
		width: 80%;
		height: 35px;
		img{
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
</style>
