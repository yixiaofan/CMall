<template lang="html">
	<div class="buy">
		<HeaderTop />
		<NavSearch/>
		<ShopNav />
		<GoodsCategory :f1="s_flag" />
		<div class="mycontainer">
			<div class="link-list">
				<!-- 商品列表 start -->
				<div class="order-detail">
					<div class="goods-table">
						<table class="table">
							<thead>
								<tr>
									<th><input @click.stop="checkAllItem" type="checkbox" v-model="allState"/></th>
									<th>商品信息</th>
									<th class="c-hide-sm-only">单价</th>
									<th class="c-hide-sm-only">数量</th>
									<th class="c-hide-sm-only">金额</th>
									<th class="c-hide-sm-only">操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(cart,index) in cartList" :key="index">
									<td><input @click.stop="checkItem(cart)" type="checkbox" v-model="cart.state"/></td>
									<td>
										<div class="goods-detail">
											<a :href="'http://47.100.242.105:80/#/goods?itemId='+cart.id">
												<img :src="cart.images[0]"/>
											</a>
											<div class="goods-base">
												<a :href="'http://47.100.242.105:80/#/goods?itemId='+cart.id" class="buy-goods-title">{{cart.title}}</a>
											</div>
										</div>
										<div class="wap-base c-show-sm-only">
											<span class="original-price">￥{{(cart.price/100+50).toFixed(2)}}</span>
											<strong class="total-price-content">￥{{(cart.price/100*cart.num).toFixed(2)}}</strong>
											<span class="wap-number">x1</span>
										</div>
									</td>
									<td class="price c-hide-sm-only">
										<p class="original-price">￥{{(cart.price/100+50).toFixed(2)}}</p>
										<p class="line-price">￥{{(cart.price/100).toFixed(2)}}</p>
									</td>
									<td class="number c-hide-sm-only">
										<div class="input-group input-group-sm">
											<div class="input-group-prepend">
												<button :disabled="cart.num<2" @click="updateNum(cart,'desc')" class="btn-label" type="button">
													<strong>-</strong>
												</button>
											</div>
											<input type="text" @blur="updateGoods(cart,$event)" class="text-box" :value="cart.num" />
											<div class="input-group-append">
												<button @click="updateNum(cart,'asc')" class="btn-label" type="button">
													<strong>+</strong>
												</button>
											</div>
										</div>
									</td>
									<td class="total-price c-hide-sm-only">
										<strong class="total-price-content">￥{{(cart.price/100*cart.num).toFixed(2)}}</strong>
									</td>
									<td><a href="javascript:;" @click.stop="deleteItem(cart)">删除</a></td>
								</tr>
							</tbody>
						</table>
						
						<div class="cart-nav" style="position: relative; bottom: 0px; z-index: 0; width: 100%;">
							<div class="nav-right fr">
								<span class="selected-tips fl">
									已选商品
									<strong>{{number}}</strong>
									件
								</span>
								<span class="total-price-tips fl">合计：</span>
								<strong class="nav-total-price fl">￥{{total}}</strong>
								<button @click="showCartOrder" class="btn btn-primary separate-submit">结算</button>
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
			cartList:[],
			total:0,
			allState:true,
			number:0
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
		updateNum(cart,flag){
			if(flag=="desc"){
				cart.num--;
			}else if(flag=="asc"){
				cart.num++;
			}
			const postUrl = "/cmall_cart_api/cart/update/num/"+cart.id+"/"+cart.num;
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        this.computeTotal(this.cartList);
		        this.computeItemNum(this.cartList);
		      })
		      .catch(error => {
		        console.log(error);
		      });
		},
		updateGoods(cart,event){
			let el=$(event.currentTarget);
			let num=Number(el.val().trim());
			let reg=/^[1-9]\d*$/;
			console.log(num);
			if(!reg.test(num)){
				el.val(cart.num);
				this.$Modal.warning({title: "提示",content: "修改商品数量失败"});
				return false;
			}
			cart.num=num;
			const postUrl = "/cmall_cart_api/cart/update/num/"+cart.id+"/"+cart.num;
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        this.computeTotal(this.cartList);
		        this.computeItemNum(this.cartList);
		      })
		      .catch(error => {
		        console.log(error);
		      });
		},
		computeTotal(data){
			let sum=0;
	        for(let i in data){
	        	if(data[i].state){
	        		sum+=data[i].price/100*data[i].num;
	        	}
	        }
	        this.total=sum.toFixed(2);
		},
		computeItemNum(data){
			let sum=0;
	        for(let i in data){
	        	if(data[i].state){
	        		sum+=data[i].num;
	        	}
	        }
	        this.number=sum;
		},
		checkItem(cart){
			cart.state=!cart.state;
			let temp=true;
			for(let i in this.cartList){
				if(!this.cartList[i].state){
					temp=false;
					break;
				}
			}
			this.allState=temp;
			this.computeTotal(this.cartList);
			this.computeItemNum(this.cartList);
		},
		checkAllItem(){
			this.allState=!this.allState;
			for(let i in this.cartList){
				this.cartList[i].state=this.allState;
			}
			this.computeTotal(this.cartList);
			this.computeItemNum(this.cartList);
		},
		deleteItem(cart){
			const postUrl = "/cmall_cart_api/cart/delete/"+cart.id;
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        for(let i in this.cartList){
					if(this.cartList[i].id==cart.id){
						this.cartList.splice(i,1);
						break;
					}
				}
		        this.computeTotal(this.cartList);
		        this.computeItemNum(this.cartList);
		      })
		      .catch(error => {
		        console.log(error);
		      });
		},
		showCartOrder(){
			let ids="";
			for(let i in this.cartList){
				if(this.cartList[i].state){
					ids+="id="+this.cartList[i].id;
					if(i<this.cartList.length-1){
						ids+="&"
					}
				}
			}
			console.log(ids);
			const postUrl = "/cmall_order_api/order/order-cart?"+ids;
	    	this.$axios.get(postUrl)
			.then((res)=>{
				console.log(res);
				this.$router.push({name:'Order',params:{cartList:res.data}});
			})
			.catch(error => {
		        console.log(error);
		    })
		}
	},
	mounted(){
		const postUrl = "/cmall_cart_api/cart/cart";
	    this.$axios.post(postUrl)
	      .then(res => {
	        console.log(res);
	        for(let i in res.data){
	        	res.data[i].state=true;
	        }
	        this.cartList=res.data;
	        this.computeTotal(this.cartList);
	        this.computeItemNum(this.cartList);
	      })
	      .catch(error => {
	        console.log(error);
	      });
	}
}
</script>

<style scoped lang="css">
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
.line-price, strong.total-price-content, .nav-total-price {
    font-weight: 700;
}
strong.total-price-content, .selected-tips strong, .nav-total-price {
    color: #d2364c;
}
.selected-tips strong, .nav-total-price {
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
.cart-nav {
    background: #eee;
    height: 50px;
    line-height: 46px;
}
.selected-tips {
    margin-right: 15px;
}
.cart-nav .separate-submit {
    height: 50px;
    width: 100px;
    font-size: 20px;
    font-weight: 500;
}
.btn-primary{
	color: #d13b49 !important;
    background-color: #ffcbd0;
    border-color: #ffcbd0;
}
.btn-primary:hover{
	color: #fff !important;
    border-color: #f77682;
    background-color: #f77682;
}
</style>