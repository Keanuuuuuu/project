<template>
	<view class="card_front" :style="{
		backgroundImage: `url(${card.coverUrl})`,
		backgroundSize: coverSize,
		...style1
    }">

	</view>
</template>

<script module="remder" lang="renderjs">
	export default {
		data() {
			return {
				coverSize: `${window.innerWidth}px auto`
			}
		},
		props: {
			card: {
				type: Object
			},
			style1: {
				type: Object,
				default: () => ({})
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.card_front {
  position: absolute;
  // left: 20px;
  // right: 20px;
  // top: 60%;
  // left: 50%;
  margin: 0 auto;
  // transform: translate(-60%,-50%);
  width: 80vw;
  // top: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  border-radius: 5px;
  // border: 1.5px solid #8ebe34;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  overflow: hidden;
  background-color: #333;
  background-position: center;
  transition: all 0.6s ease;
  will-change: transform, left, right;
  background-repeat: no-repeat;
  // opacity: 0.6;
  // background-image: linear-gradient(to top, #99acbe 5%, #a8b3bf 20%, #cfd7dd);
}
</style>
