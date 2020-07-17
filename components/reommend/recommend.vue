<template>
	<view class="recommendConent">
		<!-- 轮播图区域 -->
		<swiper class="swiperContent" :indicator-dots="true" :autoplay="true" indicator-color="#33333" indicator-active-color="#9400D3">
			<swiper-item class="itemSwiper">
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/668b5187e5a7c283ca8bb5695d3e87f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item class="itemSwiper">
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/672233cde817bdbcdedcd105b1f76fde.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item class="itemSwiper">
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/98ad89c3c439bd78672d39577606f0e6.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item class="itemSwiper">
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/1292786322a1b4cf780f90f1664db587.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList区域 -->
		<view class="policyDescList">
			<view class="policyDescListItem" v-for="(item,index) in indexData.policyDescList" :key="index">
				<image :src="item.icon"></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- kingKongList 10个图标区域 -->
		<view class="kingKongList">
			<view class="kongKongItem"  v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
				<image :src="item.picUrl"></image>
				<text class="kongKongText">{{item.text}}</text>
			</view>
		</view>
		
		<!-- 分类列表 -->
		<RecommendCateGory></RecommendCateGory>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	// 引入组件
	import RecommendCateGory from '../recommendCateGory/recommendCateGory.vue'
	
	export default{
		// 注册组件
		components:{
			RecommendCateGory
		},
		
		// 计算属性
		computed:{
			...mapState({
				indexData:state => state.index.indexData
			})
		}
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.recommendConent
		width 100%
		height 100%
		.swiperContent
			width 100%
			height 350rpx
			.itemSwiper
				width 100%
				height 350rpx
				.swiper-item
					image
						width 100%
						height 350rpx
		.policyDescList
			display flex
			.policyDescListItem
				flex 1 /*会自动平均分配整个宽度*/
				text-align center
				image
					width 32rpx
					height 32rpx
					vertical-align middle
				text
					vertical-align middle
					text-align center
					line-height 60rpx
					font-size 24rpx
		.kingKongList
			height 340rpx
			width 100%
			flex-wrap wrap
			display flex
			.kongKongItem
				width 20%
				height 156rpx
				display flex
				flex-direction column
				align-items center
				image
					width 110rpx
					height 110rpx
				text
					font-size 24rpx
					line-height 50rpx
					
	#test
		font-size 0
</style>
