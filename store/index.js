import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		currentIndex: 0,
		cards: [
		  {
			id: 1,
			title: '党参',
			coverUrl: require('../static/caoyao_card/dangshen.jpg'),
			short_one: "【中药名】党参 dangshen",
			short_two: "【别名】条党、单枝党、板桥党、防党参。",
			short_three: "【药用部位】桔梗科植物党参Codonopsis pilosula(Franch.)Nannf",
			main:"【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
			mainArr:{
					chandifenbu: " 【地区分布】 党参主要分布于甘肃、陕西、青海及四川西北部",
					zhiwuxiangtai: "【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。"
			},
			active: false
		  },
		  {
			id: 2,
			title: '当归',
			coverUrl: require('../static/caoyao_card/danggui.jpg'),
			short_one: "【中药名】当归 danggui",
			short_two: "【别名】秦归、云归、西当归、干归、马尾归、岷当归。",
			short_three: "【来源】伞形科植物当归Angelica sinensis (Oliv.) Diels.的根",
			main:"多年生草本。茎直立，带紫色，有明显的纵直槽纹，无毛。叶为2～3回奇数羽状复叶，叶鞘膨大；叶片卵形，小叶3对，近顶端的一对无柄，呈1～2回分裂，裂片边缘有缺刻。复伞形花序，顶生，伞梗10～14，长短不等，基部有2个线形总苞片或缺",
			mainArr:{
					zhiwuxiangtai: "【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。"
			},
			active: false
		  },
		  {
			id: 3,
			title: '丁香',
			coverUrl: require('../static/caoyao_card/dingxiang.jpg'),
			short_one: "【中药名】当归 danggui",
			short_two: "【别名】秦归、云归、西当归、干归、马尾归、岷当归。",
			short_three: "【来源】伞形科植物当归Angelica sinensis (Oliv.) Diels.的根",
			main:"多年生草本。茎直立，带紫色，有明显的纵直槽纹，无毛。叶为2～3回奇数羽状复叶，叶鞘膨大；叶片卵形，小叶3对，近顶端的一对无柄，呈1～2回分裂，裂片边缘有缺刻。复伞形花序，顶生，伞梗10～14，长短不等，基部有2个线形总苞片或缺",
			mainArr:{
					zhiwuxiangtai: "【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。"
			},
			active: false
		  },
		  {
			id: 4,
			title: 'D',
			coverUrl: require('../static/caoyao_card/chenpi.jpg'),
			short_one: "【中药名】当归 danggui",
			short_two: "【别名】秦归、云归、西当归、干归、马尾归、岷当归。",
			short_three: "【来源】伞形科植物当归Angelica sinensis (Oliv.) Diels.的根",
			main:"多年生草本。茎直立，带紫色，有明显的纵直槽纹，无毛。叶为2～3回奇数羽状复叶，叶鞘膨大；叶片卵形，小叶3对，近顶端的一对无柄，呈1～2回分裂，裂片边缘有缺刻。复伞形花序，顶生，伞梗10～14，长短不等，基部有2个线形总苞片或缺",
			mainArr:{
					zhiwuxiangtai: "【植物形态】草质藤本。除叶片两面密被柔毛外，全体几近无毛。根常肥大肉质，呈纺锤状或纺锤状圆柱形，少分枝或中部以下略有分枝，表面灰黄色。茎缠绕多分枝。叶在主茎及侧枝上的互生，在小枝上的近于对生。",
					gongxiao: "【功效与作用】补中益气、健脾益肺。属补虚药下属分类的补气药。",
					jinji: "【使用禁忌】实证、热证禁服；正虚邪实证，不宜单独应用，不宜与黎芦同用。"
			},
			active: false
		  }
		],
		selected: null,
		unselect: null
	},
    mutations: {
		//相当于同步的操作
		toggleCard (state, { card }) {
			if (state.selected && state.selected.card === card) {
				return
			}
			card.active = !card.active
		},
		nextCard (state) {
		  if (state.selected) {
			return
		  }
		  state.cards.forEach(card => {
			card.active = false
		  })
		  state.currentIndex++
		},
		prevCard (state) {
		  if (state.selected) {
			return
		  }
		  state.cards.forEach(card => {
			card.active = false
		  })
		  state.currentIndex--
		},
		selectCard (state, selected) {
		  state.unselect = null
		  state.selected = selected
		},
		unselectCard (state) {
		  state.unselect = state.selected
		  state.selected = null
		}
	},
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
export default store
