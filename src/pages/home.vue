<template lang="html">
	<div class="home">
		<HeaderTop />
		<NavSearch/>
		<ShopNav />
		<Banner />
		<GoodsCategory />
		<Slideall />
		<HomeFloor />
		<Login/>
	</div>
</template>

<script>
import NavSearch from "../components/Nav_search"
import Banner from "../components/Banner"
import Slideall from "../components/Slideall"
import HomeFloor from "../components/Home_floor"
import HeaderTop from "../components/Header_top"
import ShopNav from "../components/Shop_nav"
import GoodsCategory from "../components/Goods_category"
import Login from "../components/Login"

export default {
	name:"home",
	components:{
		NavSearch,
		Banner,
		Slideall,
		HomeFloor,
		HeaderTop,
		ShopNav,
		GoodsCategory,
		Login
	}
}
</script>

<style scoped lang="css">

</style>