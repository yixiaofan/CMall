<template lang="html">
	<!-- 商品导航条 start -->
	<div class="shop-nav">
		<div class="mycontainer">
			<div class="nav-cont">
				<ul>
					<li>
						<a href="http://47.100.242.105:80">首页</a>
					</li>
					<li>
						<a href="#">电器城</a>
					</li>
					<li>
						<a href="#">浮云超市</a>
					</li>
					<li>
						<a href="#">浮云时尚</a>
					</li>
				</ul>
				<div class="nav-extra login-event">
					<a href="#">
						<img src="../../static/img/default-user-avatar.jpg"/>
						<b></b>
						<span>我的商场</span>
						<i class="iconfont"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 商品导航条 end -->
</template>

<script>
export default {
	
}
</script>

<style scoped lang="css">
.shop-nav .mycontainer {
    position: relative;
}
.goods-category-title, .nav-cont {
    display: none;
}
</style>