<template lang="html">
	<div class="goods">
		<HeaderTop />
		<NavSearch/>
		<ShopNav />
		<GoodsCategory :f1="s_flag" />
		<div class="goods-detail">
			<div class="scoll">
				
			</div>
			<div class="item-inform mycontainer">
				<div class="clearfix-left">
					<div class="box">
						<div class="tb-booth tb-pic tb-s310">
							<img :src="pic"/>
						</div>
						<ul class="tb-thumb">
							<li :id="'li'+index" class="" @mouseover="hoverInImg($event)" v-for="(img,index) in item.images" :key="index">
								<div class="tb-pic tb-s40">
									<a href="javascript:;">
										<img class="tb-s40" :src="img"/>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="clearfix-right">
					<div class="tb-detail-hd">
						<h1 class="detail-title">{{item.title}}</h1>
					</div>
					<div class="tb-detail-list">
						<div class="tb-detail-price">
							<div class="items price iteminfo_price">
								<dt>原价</dt>
								<dd>
									<b class="sys_item_mktprice">¥ {{item.price+55}}</b>
								</dd>
							</div>
							<div class="items price iteminfo_mktprice">
								<dt>促销价</dt>
								<dd>
									<em>¥</em>
									<b class="sys_item_price">{{item.price}}</b>
								</dd>
							</div>
						</div>
						<ul class="tm-ind-panel">
							<li class="tm-ind-item tm-ind-sellCount canClick">
								<div class="tm-indcon">
									<span class="tm-label">累计销量</span>
									<span class="tm-count">1</span>
								</div>
							</li>
							<li class="tm-ind-item tm-ind-sellCount canClick">
								<div class="tm-indcon">
									<span class="tm-label">浏览次数</span>
									<span class="tm-count">251</span>
								</div>
							</li>
							<li class="tm-ind-item tm-ind-sellCount canClick">
								<div class="tm-indcon">
									<span class="tm-label">累计评价</span>
									<span class="tm-count">1</span>
								</div>
							</li>
						</ul>
						<dl class="iteminfo_parameter sys_item_specpara">
							<dt class="buy-event login-event">
								<div class="cart-title">
									<span class="specpara-title">可选规格</span>
									<em>&gt;</em>
								</div>
							</dt>
							<dd style="overflow: visible;">
								<div class="theme-popover-mask" style="display: none;"></div>
								<div class="theme-popover">
									<div class="theme-span"></div>
									<div class="theme-poptit">
										<a class="close am-icon-close am-icon-sm" href="javascript:;"></a>
									</div>
									<div class="theme-popbod dform">
										<div class="theme-signin-left">
											<div class="theme-options">
												<div class="cart-title number">数量</div>
												<dd>
													<div class="input-group input-group-sm">
														<div class="input-group-prepend">
															<button @click="des" class="btn-label" type="button">
																<strong>-</strong>
															</button>
														</div>
														<input type="text" class="text-box" :value="number" />
														<div class="input-group-append">
															<button @click="number++" class="btn-label" type="button">
																<strong>+</strong>
															</button>
														</div>
													</div>
													<span class="tb-hidden stock-tips">
														库存<span class="stock">434</span>部
													</span>
												</dd>
											</div>
										</div>
									</div>
								</div>
							</dd>
						</dl>
					</div>
					<div class="buy-nav">
						<div class="buy-nav-opt">
							<a href="http://127.0.0.1:8080">
								<span class="c-icon-home c-icon-fw"><i class="iconfont">&#xe6bb;</i>首页</span>
							</a>
							<span class="c-icon-heart c-icon-fw favor-submit login-event">
								<i class="iconfont">&#xe668;</i>
								<em class="goods-favor-text">收藏</em>
								<em class="goods-favor-count">(0)</em>
							</span>
						</div>
						<div class="submit">
							<div class="clearfix tb-btn tb-btn-buy buy-event login-event buy-submit">
								<button @click="buyNow()" type="button">立即购买</button>
							</div>
						</div>
						<div class="submit">
							<div class="clearfix tb-btn tb-btn-basket buy-event login-event cart-submit">
								<button @click="addBasket" type="button">加入购物车</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="introduce mycontainer">
				<div class="browse">
					<div class="mc">
						<ul>
							<div class="mt">
								<h2>看了又看</h2>
							</div>
							<li class="first">
								<div class="p-img">
									<a href="#">
										<img src="http://demo.shopxo.net/static/upload/images/goods/2019/01/14/1547452714324599.jpg"/>
									</a>
								</div>
								<div class="p-name">
									<a href="#">Meizu/魅族 MX4 Pro移动版 八核大屏智能手机 黑色 16G</a>
								</div>
								<div class="p-price">
									<strong>￥2499.00</strong>
								</div>
							</li>
							<li>
								<div class="p-img">
									<a href="#">
										<img src="http://demo.shopxo.net/static/upload/images/goods/2019/01/14/1547452714324599.jpg"/>
									</a>
								</div>
								<div class="p-name">
									<a href="#">Meizu/魅族 MX4 Pro移动版 八核大屏智能手机 黑色 16G</a>
								</div>
								<div class="p-price">
									<strong>￥2499.00</strong>
								</div>
							</li>
							<li>
								<div class="p-img">
									<a href="#">
										<img src="http://demo.shopxo.net/static/upload/images/goods/2019/01/14/1547452714324599.jpg"/>
									</a>
								</div>
								<div class="p-name">
									<a href="#">Meizu/魅族 MX4 Pro移动版 八核大屏智能手机 黑色 16G</a>
								</div>
								<div class="p-price">
									<strong>￥2499.00</strong>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="introduce-main">
					<div class="c-tabs">
						<ul role="tablist">
						    <li role="presentation" class="active"><a href="#attribute" aria-controls="attribute" role="tab" data-toggle="tab">商品详情</a></li>
						    <li role="presentation"><a href="#detail" aria-controls="detail" role="tab" data-toggle="tab">规格参数</a></li>
						    <li role="presentation"><a href="#review" aria-controls="review" role="tab" data-toggle="tab">商品评价</a></li>
						</ul>
						<!-- Tab panes -->
						<div class="tab-content">
						    <div role="tabpanel" class="tab-pane active" id="attribute">
						    	<div class="attribute-content">
						    		<p>
						    			<img src=""/>
						    		</p>
						    	</div>
						    </div>
						    <div role="tabpanel" class="tab-pane" id="detail">22222222</div>
						    <div role="tabpanel" class="tab-pane" id="review">333</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<IndexFooter />
		<Login/>
	</div>
</template>

<script>
import NavSearch from "../components/Nav_search"
import HeaderTop from "../components/Header_top"
import ShopNav from "../components/Shop_nav"
import GoodsCategory from "../components/Goods_category"
import IndexFooter from "../components/Index_footer"
import Login from "../components/Login"

export default {
	data(){
		return{
			pic:"https://demo.shopxo.net/static/upload/images/goods/2019/01/14/1547452714324599.jpg",
			s_flag:false,
			number:1,
			pre:'123',
			item:{}
		}
	},
	components:{
		NavSearch,
		HeaderTop,
		ShopNav,
		GoodsCategory,
		Login,
		IndexFooter
	},
	methods:{
		des:function(){
			if(this.number>1){
				this.number--;
			}
		},
		hoverInImg(event){
			let el = $(event.currentTarget);
			let preEl=$('#'+this.pre);
			if(el.attr('id')!=preEl.attr('id')){
				preEl.removeClass('tb-selected');
				el.addClass('tb-selected');
				this.pic=el.find('img').attr('src');
				this.pre=el.attr('id');
			}
		},
		buyNow(){
			if(this.$store.state.userInfo==''){
				$('#loginPage').modal();
			}
		},
		addBasket(){
			if(this.$store.state.userInfo==''){
				$('#loginPage').modal();
			}
		}
	},
	mounted(){
		const that = this;
		$(window).bind("load",function(){
			let el=$('#li1');
			el.addClass('tb-selected');
			that.pre=el.attr('id');
		});
		let itemId='';
		if(this.$route.query.itemId!=null){
			itemId=this.$route.query.itemId;
		}
		const postUrl = "/cmall_item_api/item?id="+itemId;
	    this.$axios.post(postUrl)
	      .then(res => {
	      	let newData=eval(res.data.substring(4));
	      	that.item=newData;
	      	that.pic=that.item.images[0];
	        console.log(newData);
	      })
	      .catch(error => {
	        console.log(error);
	      })
	}
}
</script>

<style scoped lang="css">
.clearfix-left {
    display: none;
}
.tb-selected{
	background: none repeat scroll 0 0 #C30008;
	height: 62px;
}
.tb-detail-hd h1 {
    padding-bottom: 0.4em;
    line-height: 1;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    line-height: 20px;
}
.tb-detail-price {
    text-align: left;
    position: relative;
}
.tb-detail-price .items:not(:last-child) {
    margin-right: 10px;
}
.tb-detail-price .items {
    display: inline-block;
}
.tm-indcon .tm-label, .tb-detail-price dt {
    display: inline;
    width: 60px;
    white-space: nowrap;
    text-align: right;
    color: #888;
}
.tb-detail-price dd {
    display: inline-block;
    line-height: 17px;
}
.iteminfo_price .sys_item_mktprice {
    text-decoration: line-through;
    padding-top: 7px;
    padding-bottom: 0px;
}
.tb-detail-price .items:not(:last-child) {
    margin-right: 10px;
}
.iteminfo_mktprice em, .sys_item_price {
    color: #c00;
}
.sys_item_price {
    font-size: 20px;
}
.tm-ind-panel {
    padding: 10px 5px;
    position: relative;
    overflow: hidden;
    clear: both;
    display: flex;
}
.tm-ind-panel, .iteminfo_parameter {
    border-bottom: 1px solid #F5F5F5;
}
.tm-ind-item {
    float: left;
    width: 33%;
    text-align: center;
    position: relative;
    left: -1px;
    border-left: 1px solid #E5DFDA;
    flex: 1 1 0%;
    line-height: 16px;
    cursor: pointer;
}
.tm-indcon .tm-label, .tb-detail-price dt {
    display: inline;
    width: 60px;
    white-space: nowrap;
    text-align: right;
    color: #888;
    line-height: 15px;
}
.tm-ind-panel .tm-count {
    display: inline-block;
    line-height: 16px;
    height: 16px;
    color: #C40000;
    font-weight: 700;
    margin-left: 3px;
}
.iteminfo_parameter {
    margin-bottom: 10px;
}
.iteminfo_parameter dt.buy-event {
    text-align: left;
    width: 100%;
}
.buy-event, .item-props-can {
    cursor: pointer;
}
.buy-event .cart-title {
    width: 100%;
    padding: 5px;
}
.theme-popover-mask {
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #333;
    opacity: 0.5;
    filter: alpha(opacity=50);
    display: none;
}
.theme-popover {
    z-index: 1001;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
}
.theme-span {
    width: 100%;
    background: transparent;
    height: 15px;
}
.theme-poptit {
    padding: 12px;
    position: relative;
    overflow: hidden;
    background: #fff;
    height: 80px;
}
.theme-poptit .close {
    float: right;
    color: #999;
    padding: 5px;
    margin: -2px -5px -5px;
    font: bold 14px/14px simsun;
    text-shadow: 0 1px 0 #ddd;
}
.theme-signin-left {
    padding-bottom: 30px;
    max-height: 250px;
    overflow-y: scroll;
}
.theme-options {
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 5px;
}
.theme-signin-left .cart-title {
    font-size: 14px;
    font-weight: 600;
}
.theme-options dd {
    margin: 10px 0px;
}

.input-group{
	display: inline-flex;
}
.btn-label{
	width: 35px;
    height: 25px;
    outline: none;
    line-height: 23px;
    padding: 0;
    cursor: pointer;
    border-right: 0;
    color: #555555;
    text-align: center;
    background-color: #eeeeee;
    border: 1px solid #ccc;
    border-radius: 0;
}
.text-box{
	width: 60px;
    height: 25px;
    text-align: center;
    font-size: 16px !important;
    vertical-align: middle;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.buy-nav {
    position: fixed;
    bottom: 0px;
    right: 0px;
    z-index: 1000;
    width: 100%;
}
.buy-nav .buy-nav-opt, .buy-nav div.submit {
    float: left;
}
.tb-btn button, .buy-nav div.submit, .buy-nav .buy-nav-opt, .buy-nav span {
    height: 35px;
    line-height: 35px;
}
.buy-nav-opt a {
    color: #666;
}
.buy-nav span {
    display: inline-block;
    width: 50%;
    float: left;
    cursor: pointer;
    border-top: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
}
.buy-nav-opt span {
    font-size: 12px;
    color: #555;
}
.c-icon-fw {
    text-align: center;
}
.goods-favor-count {
    color: #999;
}
.buy-nav div.submit {
    width: 30%;
}
.buy-event, .item-props-can {
    cursor: pointer;
}
button {
    padding: 1px 6px;
}
.tb-btn button {
    margin-right: 0px;
    float: left;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: #FFEDED;
    color: #F03726;
    font-size: 14px;
    text-align: center;
    border: 0;
}
.tb-btn-basket button {
    background-color: #F03726;
    color: #FFF;
}
.introduce {
    width: 100%;
    margin: 0px auto;
    text-align: center;
    padding-bottom: 20px;
    overflow: hidden;
}
.browse {
    display: none;
}
.introduce-main .c-tabs ul{
	border: 1px solid #dfdfdf;
	height: 48px;
	position: relative;
	overflow: visible;
}
.introduce-main .c-tabs li{
	float: left;
	height: 48px;
    line-height: 48px;
    margin-left: -1px;
    overflow: visible;
}
.introduce-main .c-tabs li.active{
	position: relative;
	margin: -1px 0 0 -1px;
	height: 47px;
    border-top: 2px solid #FF0036;;
    z-index: 1;
}
.c-tabs li a{
	border-right: 1px dotted #d2d2d2;
    padding: 0 20px;
    height: 100%;
}
.c-tabs ul li.active a{
	font-weight: 700;
    color: #FF0036;
    line-height: 46px;
    border-left: 1px solid #cfbfb1;
    border-right: 1px solid #cfbfb1;
    display: block;
}
.c-tabs ul li.active:after{
	content: ' ';
    display: block;
    border-width: 5px;
    border-style: solid;
    border-color: #FF0036 transparent transparent;
    width: 0;
    height: 0;
    position: absolute;
    top: -1px;
    left: 50%;
    margin-left: -5px;
}
.tab-container .attribute-content{
	width: 100%;
}
</style>