<template lang="html">
	<div class="ratewrite">
		<div class="user-content-body">
			<div class="order-goods">
				<table class="c-table">
					<thead>
						<tr>
							<th>商品信息</th>
							<th>单价</th>
							<th>评价内容</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in orderItemList" :key="index">
							<td class="base">
								<div class="goods-detail">
									<a :href="'http://47.100.242.105:80/#/goods?itemId='+item.itemId">
										<img :src="item.picPath"/>
									</a>
									<div class="goods-base">
										<a :href="'http://47.100.242.105:80/#/goods?itemId='+item.itemId" class="goods-title">{{item.title}}</a>
									</div>
								</div>
							</td>
							<td class="price">
								<p class="original-price">￥{{(item.price/100+50).toFixed(2)}}</p>
								<p class="line-price">￥{{(item.price/100).toFixed(2)}} x {{item.num}}</p>
							</td>
							<td>
								<textarea name="content" rows="4" minlength="6" maxlength="200" required></textarea>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="c-group">
				<button @click="addReview" type="submit" class="btn btn-primary">提交</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return{
			s_flag:false,
			orderItemList:[]
		}
	},
	methods:{
		addReview(){
			let contents=$("textarea");
			let itemReviews=[];
			for(let i=0;i<this.orderItemList.length;i++){
				let obj={};
				let content=contents.eq(i).val().trim();
				if(content.length<6||content.length>200){
					this.$Modal.error({title: "提示",content: "评价内容在6~200个字符之间"});
					return false;
				}
				content=content.replace(/\n|\r\n/g,"</br>");
				obj.content=content;
				obj.orderId=this.orderItemList[i].orderId;
				obj.itemId=this.orderItemList[i].itemId;
				obj.buyerNick=this.$store.state.userInfo.username;
				itemReviews.push(obj);
			}
			itemReviews=JSON.stringify(itemReviews);
			console.log(itemReviews);
		    this.$axios({
			    method: 'post',
			    url:"http://47.100.242.105:8087/review/save",
			    headers: {'Content-Type': 'application/json'},
			    data:itemReviews
			}).then(res => {
		        console.log(res);
		        this.$Message.info('添加评论成功');
		        let that=this;
		        setTimeout(function(){
	            	that.$router.push({path:'/center/trade'});
          			//this.$router.go(0);
	            }, 1500);
		    })
		    .catch(error => {
		        console.log(error);
		    })

		}
	},
	mounted(){
		let orderid=this.$route.query.orderid;
		const postUrl = "http://47.100.242.105:8086/order/orderitem?orderid="+orderid;
	    this.$axios.post(postUrl)
	      .then(res => {
	        console.log(res);
	        this.orderItemList=res.data;
	      })
	      .catch(error => {
	        console.log(error);
	      })
	}
}
</script>

<style scoped lang="css">
.ratewrite{
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
.order-goods {
    margin-top: 20px;
}
.c-table{
	width: 100%;
    margin-bottom: 10px;
    border-spacing: 0;
    border-collapse: separate;
}
.order-goods .base {
    width: 50%;
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
.goods-title {
    display: block;
    max-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
}
.original-price {
    color: #9c9c9c;
    text-decoration: line-through;
}
.line-price, strong.total-price-content {
    font-weight: 700;
}
.c-group{
	border-bottom: 1px dashed #ccc;
    padding: 10px 20% 10px 5px;
}
textarea{
	display: block;
    width: 100%;
    padding: 0.5em;
    line-height: 1.2;
    color: #555555;
    vertical-align: middle;
    border: 1px solid red;
}
</style>