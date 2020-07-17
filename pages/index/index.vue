<template>
	<view id="indexContent">
		<!-- 头部区域-->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png"></image>
			<view class="search">
				<i class="iconfont icon-sousuo'"></i>
				<input type="text" placeholder="搜索商品" />
			</view>
			<button type="default">登录</button>
		</view>	
		
		<!-- 导航区域 -->	
		<scroll-view class="navContent" scroll-X="true" enable-flex v-if="indexData.kingKongModule">
			<view class="itemNav" @click="changeNavId(0)" :class="{active:navId === 0}">
				推荐
			</view>
			<view class="itemNav" @click="changeNavId((index+1))" 
			:class="{active:navId === (index+1)}" 
			v-for="(navItem,index) in indexData.kingKongModule.kingKongList" 
			:key="index"
			>
				{{navItem.text}}
			</view>
		</scroll-view>
		
		<!-- Recommend组件 -->
		<Recommend></Recommend>
	</view>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	import request from '../../utils/request.js'
	import Recommend from '../../components/reommend/recommend.vue'
	export default {
		// 动态数据
		data(){
			return{
				navId:0,//导航选中标识
			}
		},
		
		// 注册组件
		components:{
			Recommend
		},
		
		// 异步操作
		async mounted() {
			// 获取首页数据
			// let setIndexDatas = await request('/api/getIndexData')//H配置跨越标识
			// this.setIndexDatas = await request('/getIndexData')
			// let kingKongList =this.setIndexDatas.data.kingKongModule.kingKongList
			// console.log(kingKongList);
			// 分发action
			this.getIndexData();
		},
		
		// 函数方法
		methods:{
			// 分发数据getIndexData数据
			...mapActions({
				getIndexData:'getIndexData'
			}),
			// 改变选中的navId
			changeNavId(navId){
				this.navId = navId
			}
		},
		// 计算属性
		computed: {
			// 展开属性
			...mapState({
				indexData: state => state.index.indexData
			})
		},
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#indexContent
	// 头部区域
		.header
			width 750rpx
			height 80rpx
			display flex
			flex-direction row
			align-items center
			justify-content space-around
			.logo
				width 120rpx
				height 40rpx
				margin 0 30rpx
			.search
				height 60rpx
				width 420rpx
				background #ededed
				border-radius 10rpx
				position relative
				.iconfont
					font-size 30rpx
					position absolute
					left 10rpx
					top 25%
				input
					width 320rpx
					height 60rpx
					line-height 60rpx
					padding-left 50rpx
					background #efefef
					border-radius 8rpx
					font-size 24rpx
			button
				height 60rpx
				width 144rpx
				line-height 56rpx
				border 1rpx solid #9400D3
				color #9400D3
				font-size 24rpx
				padding 0 4rpx
				text-align center
				margin 0 20rpx
				white-space nowrap
				overflow hidden
				text-overflow ellipsis

		// 导航区域
		.navContent
			height 80rpx
			width 100%
			display flex
			.itemNav
				position relative
				width 140rpx
				height 78rpx
				line-height 80rpx
				display inline-block
				margin 0 10rpx
				text-align center
				font-size 28rpx
				white-space nowrap
				&.active:after
					content ''
					height 1rpx
					width 100%
					position absolute
					bottom 0
					left 0
					border-bottom 4rpx solid #9400D3
					
				
				
			
		
			
			
			
			
			
			
			
	
	
	
	
	#wrap
		width 0
</style>
