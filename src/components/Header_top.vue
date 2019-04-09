<template lang="html">
	<!-- 顶部导航条 start -->
	<div class="header-top">
		<div class="mycontainer header">
			<ul class="top-nav-left">
				<div class="top-nav-items">
					<div v-if="$store.state.userInfo==null" class="menu-hd">
						<span>您好，欢迎来到 CMall</span>
						[<a href="javascript:void(0);" data-toggle="modal" data-target="#loginPage">登录</a>]
						[<a href="#">注册</a>]
					</div>
					<div v-else class="menu-hd">
						<span>您好 {{$store.state.userInfo.username}}, 欢迎来到 CMall</span>
						[<a href="javascript:void(0);" @click="logout">退出</a>]
					</div>
				</div>
			</ul>
			<ul class="top-nav-right">
				<div class="top-nav-items">
					<div class="menu-hd login-event">
						<a href="javascript:void(0);" data-toggle="modal" data-target="#loginPage">
							<i class="iconfont">&#xe78c;</i>
							<span>个人中心</span>
						</a>
					</div>
				</div>
				<div class="top-nav-items">
					<div class="c-dropdown menu-hd login-event">
						<a href="javascript:void(0);" data-toggle="modal" data-target="#loginPage" class="c-dropdown-toggle">
							<i class="iconfont">&#xe604;</i>
							<span>我的交易</span>
							<i class="iconfont">&#xe606;</i>
						</a>
					</div>
				</div>
				<div class="top-nav-items">
					<div class="c-dropdown menu-hd login-event">
						<a href="javascript:void(0);" data-toggle="modal" data-target="#loginPage" class="c-dropdown-toggle">
							<i class="iconfont">&#xe668;</i>
							<span>我的收藏</span>
							<i class="iconfont">&#xe606;</i>
						</a>
					</div>
				</div>
				<div class="top-nav-items top-nav-mini-cart">
					<div class="menu-hd login-event">
						<a href="javascript:void(0);" data-toggle="modal" data-target="#loginPage" class="mc-menu-hd">
							<i class="iconfont">&#xe6b9;</i>
							<span>购物车</span>
							<strong class="common-cart-total c-round">0</strong>
						</a>
					</div>
				</div>
				<div class="top-nav-items top-nav-mini-cart">
					<div class="menu-hd login-event">
						<a href="javascript:void(0);" data-toggle="modal" data-target="#loginPage" class="mc-menu-hd">
							<i class="iconfont">&#xe6eb;</i>
							<span>消息</span>
						</a>
					</div>
				</div>
			</ul>
		</div>
	</div>
	<!-- 顶部导航条 end -->
</template>

<script>
export default {
	methods:{
		logout(){
		  	let _ticket=this.$cookie.get("TT_TOKEN");
		  	if(!_ticket){
		  		return;
		  	}
			const postUrl = "/cmall_login_api/user/logout/"+_ticket;
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        if(res.data.status==200){
		        	this.$store.commit('set_userInfo',null);
		        }else{
		        	
		        }
		      })
		      .catch(error => {
		        console.log(error);
		      })
		}
	}
}
</script>

<style scoped lang="css">
.header-top {
    background-color: #fafafa;
    border-bottom: solid 1px #f0f0f0;
}
.header {
	display: none;
    max-width: 1000px;
    margin: 0px auto;
    font-size: 12px;
    position: relative;
}
.header i{
	font-size: 12px;
}
.c-dropdown {
    position: relative;
    display: inline-block;
}
</style>