<template lang="html">
	<div class="buy">
		<HeaderTop />
		<NavSearch/>
		<ShopNav />
		<GoodsCategory :f1="s_flag" />
		<div class="mycontainer">
			<div class="link-list">
				<!-- 地址 start -->
				<div class="address">
					<div class="control">
						<h3>确认收货地址</h3>
						<button class="btn-address">使用新地址</button>
					</div>
					<ul class="address-list">
						<li class="address-default">
							<div class="address-left">
								<div class="user-base">
									<span class="c-badge">默认</span>
									<span class="address-detail">
										<span class="user">。。。。</span>
										<span class="phone">13854751234</span>
									</span>
								</div>
								<div class="region">
									<span class="province">四川省</span>
									<span class="city">成都市</span>
									<span class="dist">郫都区</span>
									<span class="street">红光镇</span>
								</div>
							</div>
							<div class="address-right">
								<span class="c-show-sm-only">&gt;</span>
							</div>
							<div class="address-operation-btn">
								<a href="#"><i class="iconfont">&#xe643;</i>设为默认</a>
								<span class="cut">|</span>
								<a href="#"><i class="iconfont">&#xe612;</i>编辑</a>
								<span class="cut">|</span>
								<a href="#"><i class="iconfont">&#xe608;</i>删除</a>
							</div>
						</li>
					</ul>
				</div>
				<!-- 地址 end -->
				<!-- 商品列表 start -->
				<div class="order-detail">
					<div class="goods-table">
						<h3>确认订单信息</h3>
						<table class="table">
							<thead>
								<tr>
									<th>商品信息</th>
									<th class="c-hide-sm-only">单价</th>
									<th class="c-hide-sm-only">数量</th>
									<th class="c-hide-sm-only">金额</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="goods-detail">
											<a href="#">
												<img src="http://demo.shopxo.net/static/upload/images/goods/2019/01/14/1547452714324599.jpg"/>
											</a>
											<div class="goods-base">
												<a href="#" class="buy-goods-title">Meizu/魅族 MX4 Pro移动版 八核大屏智能手机 黑色 16G</a>
											</div>
										</div>
										<div class="wap-base c-show-sm-only">
											<span class="original-price">￥3200.00</span>
											<strong class="total-price-content">￥2499.00</strong>
											<span class="wap-number">x1</span>
										</div>
									</td>
									<td class="price c-hide-sm-only">
										<p class="original-price">￥3200.00</p>
										<p class="line-price">￥2499.00</p>
									</td>
									<td class="number c-hide-sm-only">
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
									</td>
									<td class="total-price c-hide-sm-only">
										<strong class="total-price-content">￥2499</strong>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="buy-message">
							<div class="order-extra">
								<div class="order-user-info">
									<div class="memo">
										<label>给卖家留言：</label>
										<input type="text" class="memo-input" placeholder="选填,建议填写和卖家达成一致的说明" />
									</div>
								</div>
							</div>
						</div>
						<div class="buy-point-discharge">
							<p>合计（含运费）<span>¥</span><em class="pay-sum">2499</em></p>
						</div>
						<div class="order-nav">
							<div class="pay-confirm">
								<div class="buy-box">
									<div class="base-real-pay">
										<em>实付款：</em>
										<span class="price">
											<span>¥</span>
											<em class="nav-total-price">2499</em>
										</span>
									</div>
									<div class="pay-address">
										<div class="buy-footer-address">
											<span class="buy-line-title buy-line-title-type">寄送至：</span>
											<span class="buy-address-detail">四川省 成都市 郫都区 红光镇</span>
										</div>
										<div class="buy-footer-address">
											<span class="buy-line-title">收货人：</span>
											<span class="buy-user">。。。。</span>
											<span class="buy-phone">13854751234</span>
										</div>
									</div>
								</div>
								<div class="go-btn-wrap">
									<button class="btn-go btn-loading-example">提交订单</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 商品列表 end -->
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
			s_flag:false,
			number:1
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
		}
	}
}
</script>

<style scoped lang="css">
h3 {
    font-size: 14px;
    font-weight: 700;
}
.address h3 {
    border-bottom: none;
}
.link-list h3 {
    padding: 0 0 5px 5px;
}
.btn-address{
	color: #d13b49 !important;
    background-color: #ffcbd0;
    border-color: #ffcbd0;
    display: inline-block;
    margin-bottom: 0;
    padding: 0.5em 1em;
    vertical-align: middle;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
    border: 1px solid transparent;
}
ul.address-list, .business-item ul {
    overflow: hidden;
}
ul.address-list li {
    display: block !important;
    width: 100%;
    padding: 10px;
    position: relative;
    min-height: 80px;
}
.address-left {
    width: calc(100% - 25px);
    float: left;
    position: relative;
}
ul.address-list li .user-base {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
}
.c-badge{
	display: inline-block;
    min-width: 10px;
    font-size: 12.2px;
    font-weight: bold;
    color: #fff;
    line-height: 1;
    vertical-align: baseline;
    white-space: nowrap;
    text-align: center;
    background-color: #5eb95e;
    padding: 0.25em 0.5em;
    border-radius: 2px;
}
.address-right {
    float: right;
    margin-right: 5px;
    padding-top: 15px;
}
.address-operation-btn i{
	font-size: 12px;
}
.address-operation-btn {
    display: none;
    font-size: 12px;
    color: #282828;
    text-align: right;
    padding-right: 5px;
}
.address-operation-btn .cut {
    padding: 0 5px;
    color: #ccc;
    vertical-align: top;
}
.order-detail h3, .business-item h3 {
    border-bottom: 3px solid #e3e3e3;
    margin-top: 15px;
}
.table{
	margin-bottom: 10px;
}
.c-hide-sm-only{
	display: none;
}
.goods-detail {
    position: relative;
    min-height: 80px;
}
.goods-detail img {
    width: 80px;
    height: 80px;
    position: absolute;
}
.goods-base {
    float: left;
    top: 0;
    margin-left: 85px;
}
.buy-goods-title {
    display: block;
    max-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.c-show-sm-only{
	display: inherit;
}
.original-price {
    color: #9c9c9c;
    text-decoration: line-through;
}
.line-price, strong.total-price-content {
    font-weight: 700;
    font-family: Verdana,Tahoma,arial;
}
strong.total-price-content {
    color: #d2364c;
    font-size: 16px;
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

strong.total-price-content {
    color: #d2364c;
    font-size: 16px;
}
.buy-message {
    padding: 0px 5px;
}
label {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: bold;
}
.memo-input {
    width: calc(100% - 64px);
    border: 1px solid #ccc;
    padding: 5px;
    outline: none;
    border-radius: 2px;
    vertical-align: middle;
}
.buy-point-discharge {
    font-size: 14px;
    font-weight: 700;
    padding: 10px 5px;
    text-align: right;
}
.pay-sum {
    color: #d2364c;
    margin-left: 5px;
}
.order-nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
.buy-box {
    float: left;
    width: 70%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: right;
    padding-right: 10px;
}
.pay-address {
    display: none;
}
.btn-go {
    float: left;
    width: 30%;
    color: #fff;
    background: #d2364c;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border: 0;
}
</style>