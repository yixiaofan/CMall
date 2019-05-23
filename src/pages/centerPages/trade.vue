<template lang="html">
	<div class="trade">
		<HeaderTop />
		<NavSearch/>
		<ShopNav />
		<GoodsCategory :f1="s_flag" />
		<div class="user-content-body">
			<div class="meila-radius">
				<table class="content-title">
					<tbody>
						<tr>
							<th class="row-content">商品</th>
							<th class="row-price">单价</th>
							<th class="row-num">数量</th>
							<th class="row-total-price">合计</th>
							<th class="row-status">状态</th>
							<th class="row-operate">操作</th>
						</tr>
					</tbody>
				</table>
			</div>
			<table class="data-list" v-for="(item,index) in orderItemList" :key="index">
				<tbody>
					<tr class="content-hd">
						<td colspan="6">
							<span><i class="iconfont">&#xe65d;</i> {{myformatDate(item.updateTime)}}</span>
							<span><i class="iconfont">&#xe607;</i> {{item.orderId}}</span>
						</td>
					</tr>
					<tr v-for="(list,index) in item.orderItems" :key="index">
						<td class="base row-content">
							<div class="goods-detail">
								<a :href="'http://47.100.242.105:80/#/goods?itemId='+list.itemId">
									<img :src="list.picPath"/>
								</a>
								<div class="goods-base">
									<a :href="'http://47.100.242.105:80/#/goods?itemId='+list.itemId" class="goods-title">{{list.title}}</a>
									<ul class="goods-attr">
										<li>颜色：白色</li>
										<li>尺码：M</li>
									</ul>
								</div>
							</div>
						</td>
						<td class="row-price">
							<p class="original-price">￥{{(list.price/100+50).toFixed(2)}}</p>
							<p class="line-price">￥{{(list.price/100).toFixed(2)}}</p>
						</td>
						<td class="row-number">x{{list.num}}</td>
						<td v-if="index==0" class="row-total-price" :rowspan="item.orderItems.length">
							<strong class="total-price-content">￥{{(item.totalFee/100).toFixed(2)}}</strong>
						</td>
						<td v-if="index==0" class="row-status" :rowspan="item.orderItems.length">
							待发货
							<div class="base-operate">
								<a href="#">订单详情</a>
							</div>
						</td>
						<td v-if="index==0" class="row-operate" :rowspan="item.orderItems.length">
							<a v-if="item.buyerRate==0" class="btn btn-sm" style="color:white;background-color:red;" :href="'http://47.100.242.105:80/#/center/ratewrite?orderid='+item.orderId">
								<i class="iconfont">&#xe669;</i>
								评价
							</a>
							<button class="btn btn-sm" style="color:#DC9A9A;background-color:#F8F2F2;border-color:#F8F2F2;padding: 5px 6px;">
								<i class="iconfont" style="width: 12px;">&#xe608;</i>
								删除
							</button>
							<button class="btn btn-sm" style="color:#FF9800;background-color:#ffe5be;border-color:#ffe5be;">
								<i class="iconfont">&#xe671;</i>
								物流
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<Page :styles="mystyle" @on-change="changePage" :total="total" />
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
import {formatDate} from '../../../static/js/date.js'

export default {
	data(){
		return{
			s_flag:false,
			orderItemList:[],
			mystyle:{
            	"border":"none",
            	"margin-top":"20px",
            	"text-align": "center"
           	},
           	total:0
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
		myformatDate(time){
			let date=new Date(time);
			return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
		},
		changePage(page){
        	const postUrl = "/cmall_order_api/order/show?page="+page+"&rows=10";
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        this.total=res.data.total;
		        this.orderItemList=res.data.rows;
		      })
		      .catch(error => {
		        console.log(error);
		      })
        }
	},
	mounted(){
		this.changePage(1);
	}
}
</script>

<style scoped lang="css">
i{
	font-size: 12px;
}
.trade{
	display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background: #fff;
}
.user-content-body{
	-webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}
.meila-radius{
	background-color: #eeeeee;
    border: 1px solid #dfdfdf;
    color: #555555;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0.625em;
    border-radius: 0;
}
table{
	width: 100%;
}
.content-title th, table.data-list tr td+td {
    text-align: center;
    font-weight: normal;
}
.row-content {
	width: 35%;
    min-width: 102px;
}
.row-price {
    width: 15%;
}
.row-number {
    width: 10%;
}
.row-total-price {
    width: 20%;
}
.row-status {
    width: 10%;
}
.row-operate {
    width: 10%;
}
table.data-list {
    border: 1px solid #eee;
    margin-top: 10px;
    border-radius: 2px;
}
table.data-list td {
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #eee;
}
table.data-list .content-hd td {
    background: #eee;
    border-bottom-color: #eee;
}
.content-hd td span:not(:last-child) {
    margin-right: 20px;
}
.content-hd td span {
    color: #666;
}
.goods-detail {
    position: relative;
    min-height: 80px;
}
.goods-detail img {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 0;
}
.goods-base {
    float: left;
    top: 0;
    margin-left: 85px;
}
.goods-title {
    display: block;
    max-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
}
.goods-attr {
    margin-top: 5px;
}
.goods-attr li {
    color: #888;
    line-height: 16px;
}
.original-price {
    color: #9c9c9c;
    text-decoration: line-through;
}
.line-price, strong.total-price-content {
    font-weight: 700;
}
table.data-list td.row-number, table.data-list td.row-total-price, table.data-list td.row-status, table.data-list td.row-operate {
    border-right: 1px solid #eee;
}
strong.total-price-content {
    color: #d2364c;
    font-size: 16px;
}
table.data-list .base-operate {
    border-top: 1px dashed #eee;
}
.base-operate {
    margin-top: 3px;
}
.wap-base, .base-operate {
    padding-top: 3px;
}
.row-operate>button{
	margin-top: 5px;
}
</style>