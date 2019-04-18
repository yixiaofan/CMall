<template lang="html">
	<div class="index">
		<!-- 底部导航条 start -->
		<div class="mobile-navigation">
			<ul>
				<li>
					<router-link to="/home">
						<i class="iconfont">&#xe6bb;</i>
						首页
					</router-link>
				</li>
				<li>
					<router-link to="/list">
						<i class="iconfont">&#xe601;</i>
						分类
					</router-link>
				</li>
				<li>
					<router-link to="/shoppingBasket">
						<i class="iconfont">&#xe6b9;</i>
						购物车
					</router-link>
					<span class="c-badge c-badge-danger c-round hot-icon">1</span>
				</li>
				<li>
					<router-link to="/center/user">
						<i class="iconfont">&#xe78c;</i>
						我的
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 底部导航条 end -->
		<router-view />
		<IndexFooter/>
	</div>
</template>

<script>
import IndexFooter from "../components/Index_footer"
export default {
	name:"index",
	components:{
		IndexFooter
	}
}
</script>

<style scoped lang="css">
.mobile-navigation{
	position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 999;
    background: #fff;
}
.mobile-navigation ul{
	border-top: 1px solid #f5f5f5;;
}	
.mobile-navigation ul li{
	width: 25%;
	float: left;
	text-align: center;
	position: relative;
}
.mobile-navigation ul li i{
	display: block;
	z-index: 1;
}
</style>