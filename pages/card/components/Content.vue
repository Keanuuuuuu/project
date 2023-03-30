<template>
	<view class="content" v-if="selected">
		<view class="first_cont">
			{{content}}
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				content:''
			}
		},
		computed: {
			...mapState(['selected'])
		},
		props: ['card'],
		mounted(){
			setTimeout(()=>{
				this.content = this.card
			},500)
		}
	}
</script>

<style lang="scss">
.content {
	margin-top: 5px;
	display: flex;
	justify-content: center;
	.first_cont{
		width: 90vw;
	}
}
</style>
