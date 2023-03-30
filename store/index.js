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
			title: '艾草',
			coverUrl: require('../static/caoyao_card/aicao.jpg'),
			short_one: "【中药名】艾叶 aiye",
			short_two: "【别名】蕲艾、祁艾、大艾叶、艾蒿、五月艾",
			short_three: "【药用部位】菊科植物艾Artemisia argyi Levl. et Vant.的叶",
			main:"多年生草本，高0.5～1.2米。茎直立，密被茸毛，上部分枝。茎中部叶卵状三角形或椭圆形，有柄，羽状分裂，裂片椭圆形至椭圆状披针形，边缘具不规则的锯齿，上面深绿色，有腺点和蛛丝状毛，下面被灰白色茸毛",
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
			active: false
		  },
		  {
			id: 3,
			title: 'C',
			coverUrl: require('../static/caoyao_card/dangshen.jpg'),
			active: false
		  },
		  {
			id: 4,
			title: 'D',
			// coverUrl: require(''),
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
