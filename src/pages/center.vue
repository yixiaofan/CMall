<template lang="html">
	<div>
		<HeaderTop />
		<NavSearch/>
		<ShopNav />
		<GoodsCategory :f1="s_flag" />
		<div class="center mycontainer">
			<div class="center-sidebar c-offcanvas">
				<div class="my-offcanvas-bar center-offcanvas-bar">
					<ul class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
						<li class="panel panel-default">
							<div class="panel-heading" role="tab" id="heading1">
								<div class="panel-title first" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
							        <router-link tag="div" class="panel-text" id="index" to="/center/user"><i class="iconfont">&#xe6bb;</i>个人中心</router-link>
							    </div>
							</div>
						</li>
						<li class="panel panel-default">
							<div class="panel-heading" role="tab" id="heading2">
								<div class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
							        <div class="panel-text"><i class="iconfont">&#xe604;</i>交易管理</div>
							    </div>
							</div>
							<div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
								<ul class="center-sidebar-sub">
									<li>
										<div class="c-cf">
											<router-link tag="div" class="panel-text" to="/center/trade"><i class="iconfont">&#xe614;</i>订单管理</router-link>
										</div>
									</li>
									<li>
										<div class="c-cf">
											<div class="panel-text"><i class="iconfont">&#xe669;</i>我的收藏</div>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li class="panel panel-default">
							<div class="panel-heading" role="tab" id="heading3">
								<div class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
							        <div class="panel-text"><i class="iconfont">&#xe78c;</i>资料管理</div>
							    </div>
							</div>
							<div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
								<ul class="center-sidebar-sub">
									<li>
										<div class="c-cf">
											<router-link tag="div" class="panel-text" to="/center/personal/index"><i class="iconfont">&#xe65f;</i>个人资料</router-link>
										</div>
									</li>
									<li>
										<div class="c-cf">
											<div class="panel-text" @click="logout"><i class="iconfont">&#xe658;</i>安全退出</div>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<router-view />
		</div>
		<Login/>
	</div>
</template>

<script>
import NavSearch from "../components/Nav_search"
import HeaderTop from "../components/Header_top"
import ShopNav from "../components/Shop_nav"
import GoodsCategory from "../components/Goods_category"
import Login from "../components/Login"

export default {
	data(){
		return{
			s_flag:false,
		}
	},
	components:{
		NavSearch,
		HeaderTop,
		ShopNav,
		GoodsCategory,
		Login
	},
	methods:{
		logout(){
		  	let _ticket=this.$cookie.get("TT_TOKEN");
		  	if(!_ticket){
		  		return;
		  	}
			const postUrl = "http://47.100.242.105:8084/user/logout/"+_ticket;
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        if(res.data.status==200){
		        	this.$store.commit('set_userInfo',null);
		        }else{
		        	this.$Message.error('退出账号失败!');
		        }
		      })
		      .catch(error => {
		        console.log(error);
		      })
		}
	},
	mounted(){
	}
}
</script>

<style scoped lang="css">
i{
	font-size: 12px;
}
.center-sidebar {
    width: 145px;
    min-height: 100%;
    float: left;
    margin-right: 20px;
}
.c-offcanvas {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.my-offcanvas-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 900;
    width: 270px;
    max-width: 100%;
    overflow-y: auto;
    background: #333;
}
.center-offcanvas-bar  li {
	border: 1px solid #ffe8ef;
    position: relative;
    margin-bottom: -1px;
}
.collapsed:not(.first):after{
	position: absolute;
	right: 10px;
	top: 18px;
	display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    border-color: #fff;
    transform: rotate(45deg);
	transition:all 0.2s linear;
	-webkit-transition:all 0.2s linear; /* Safari */
    content: "";
}
.panel-heading>div:not(.collapsed):not(.first):after{
	position: absolute;
	right: 10px;
	top: 18px;
	display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    border-color: #fff;
    transform: rotate(135deg);
    transition:all 0.2s linear;
	-webkit-transition:all 0.2s linear; /* Safari */
    content: "";
}
.panel-text{
	padding: 0.6rem;
    display: block;
    color: #5c5c5c;
    cursor: pointer;
}

.center-sidebar-sub .c-cf{
    padding-left: 24px;
}
.center-sidebar-sub li{
	border-left: 0!important;
    border-right: 0!important;
}
.panel-default>.panel-heading{
	color: inherit;
	background-color: inherit;
	border-color: inherit;
}
.panel-heading{
	padding: 0px;
	border: none;
}
.panel-title{
	font-size: 12px;
}
.panel-group .panel+.panel{
	margin-top: 0px;
}
.panel{
	box-shadow: none;
}
</style>