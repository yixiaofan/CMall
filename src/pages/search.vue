<template lang="html">
	<div class="search">
		<HeaderTop />
		<NavSearch/>
		<ShopNav />
		<GoodsCategory :f1="s_flag" />
		<div class="search-content mycontainer">
			<span>全部搜索 <em>&gt;</em> {{s_word}}</span>
			<ul>
				<li v-for="(item,index) in itemList" :key="index">
					<div class="i-pic limit">
						<a :href="'http://127.0.0.1:8080/#/goods?itemId='+item.id">
							<img :src="item.images[0]" @error="imgError(item)"/>
						</a>
						<a :href="'http://127.0.0.1:8080/#/goods?itemId='+item.id">
							<p class="title">{{item.title}}</p>
						</a>
						<p class="price">
							<b>¥</b>
							<strong>{{item.price}}</strong>
						</p>
						<p class="number">销量<span>0</span></p>
					</div>
				</li>
				<div class="loading col-xs-12" v-if="loading">加载中···</div>
			</ul>
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
			itemList:{},
			loading:false,
			nowPage:2,
			bottomHight: 0,
			totalPages:0,
			isComplete:false,
			s_word:''
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
		imgError(item) {
       		item.images[0] = require('../assets/img/item-default.jpg');
		},
		handleScroll(){
			const that=this;
			if (that.getScrollBottomHeight() <= that.bottomHight && that.nowPage<=that.totalPages && that.loading == false) {
                that.loading = true;
                const postUrl = "/cmall_search_api/search?q="+this.s_word+"&page="+that.nowPage;
			    this.$axios.post(postUrl)
			      .then(res => {
			      	let newData=eval(res.data.substring(4));
                    console.log(newData.itemList);
                    let json1=JSON.stringify(that.itemList).substring(1);
                    console.log(json1);
                    json1=json1.substring(0,json1.length-1);
                    let json2=JSON.stringify(newData.itemList).substring(1);
                    json2=json2.substring(0,json2.length-1);
                    let json3="["+json1+","+json2+"]";
                    that.itemList=$.parseJSON(json3);
                    console.log(that.itemList);
                    that.nowPage++;
                    that.loading = false;
			      })
			      .catch(error => {
			        console.log(error);
			      })
                
            }
		},
		//滚动条到底部的距离
		getScrollBottomHeight() { 
			return this.getPageHeight() - this.getScrollTop() - this.getWindowHeight(); 
		},
		//页面高度
		getPageHeight() {
        	return document.querySelector("html").scrollHeight;
    	},
    	//滚动条顶 高度
		getScrollTop() {
	        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
	        if (document.body) {
	            bodyScrollTop = document.body.scrollTop;
	        }
	        if (document.documentElement) {
	            documentScrollTop = document.documentElement.scrollTop;
	        }
	        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
	        return scrollTop;
	   	},
	   	getWindowHeight() {
		    var windowHeight = 0;
		    if (document.compatMode == "CSS1Compat") {
		        windowHeight = document.documentElement.clientHeight;
		    } else {
		        windowHeight = document.body.clientHeight;
		    }
		    return windowHeight;
		}
	},
	mounted(){
		const that=this;
		window.onload = function () { 
			window.addEventListener('scroll', that.handleScroll) 
		};
		if(this.$route.query.searchWord!=null){
			this.s_word=this.$route.query.searchWord;
		}
		const postUrl = "/cmall_search_api/search?q="+this.s_word;
		that.loading = true;
	    this.$axios.post(postUrl)
	      .then(res => {
	      	let newData=eval(res.data.substring(4));
	      	that.itemList=newData.itemList;
	      	that.totalPages=newData.totalPages;
	      	that.loading = false;
	        console.log(newData);
	      })
	      .catch(error => {
	        console.log(error);
	      })
	}
}
</script>

<style lang="css">
.search-content ul{
	width: calc(100% + 10px);
    margin-left: -5px;
}
.search-content ul li{
	width: 50%;
	float: left;
}
.search-content .i-pic.limit {
    margin: 5px;
    border: 1px #e8e8e8 solid;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}
.search-content .limit p.title{
    padding: 0px 5px;
    margin: 5px 0px;
    overflow: hidden;
    height: 18px;
    line-height: 18px;
}
.search-content .price {
    color: #e4393c;
    font-weight: 600;
    padding: 5px;
}
.search-content .number{
    position: absolute;
    bottom: 5px;
    right: 5px;
}
.loading{
	margin: 0px auto;
	text-align: center;
	font-size: 16px;
	font-weight: bold;
}
</style>