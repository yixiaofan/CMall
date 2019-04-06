<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
//  //在页面加载时读取sessionStorage里的状态信息
//  if (sessionStorage.getItem("store") ) {
//      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
//  } 
//
//  //在页面刷新时将vuex里的信息保存到sessionStorage里
//  window.addEventListener("beforeunload",()=>{
//  	this.$store.commit('set_select_class',"");
//  	this.$store.commit('set_img_upload_cache',[]);
//  	this.$store.commit('set_img_paths',[]);
//  	this.$store.commit('set_img_status','ready');
//  	//this.$store.commit('set_select_class_data',[]);
//    sessionStorage.setItem("store",JSON.stringify(this.$store.state));
//  })
  },
  mounted(){
  	const that=this;
  	let _ticket=this.$cookie.get("TT_TOKEN");
  	if(!_ticket){
  		return;
  	}
		const postUrl = "/cmall_login_api/user/token?_ticket"+_ticket;
    this.$axios.post(postUrl)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style>
@import "assets/font/iconfont.css";

@media only screen and (min-width: 768px){
	.mobile-navigation {
    display: none;
	}
	.header {
    display: block !important;
    height: 30px;
	}
	.nav-search {
    z-index: 0 !important;
    margin-bottom: 5px !important;
    margin-top: 5px !important;
	}
	.nav-search .logo {
    display: none;
	}
	.nav-search .logo-big {
    display: block !important;
    float: left;
    height: 40px;
    width: 135px;
    margin: 0px auto;
    margin-left: 5px;
    margin-right: 5px;
	}
	.nav-search .logo-big img {
    width: 100%;
	}
	.search-bar {
    height: 40px !important;
    width: calc(100% - 146px) !important;
	}
	.search-bar input {
    width: 78% !important;
    height: 36px !important;
	}
	#topsearch {
    height: 36px !important;
    line-height: 22px !important;
    font-weight: 500 !important;
    width: 20% !important;
	}
	.top-nav-left {
    float: left;
	}
	.top-nav-right {
    position: absolute;
    top: 0;
    right: 0;
	}
	.top-nav-left .top-nav-items, .top-nav-right .top-nav-items {
    padding: 0px 8px;
    height: 30px;
    line-height: 30px;
	}
	.top-nav-right .top-nav-items {
    float: left;
	}
	.marqueen {
    padding-top: 0px;
    margin-bottom: 20px;
    height: auto;
    background: #FFF;
    opacity: 0.8;
    text-align: center;
    padding: 10px 5px;
	}
	.marqueen-title {
    position: static !important;
    border-right: none;
    color: #e60012;
    font-size: 16px;
    font-weight: 600;
	}
	.banner-news {
    margin-left: -5px !important;
    height: auto !important;
    width: 100%;
    padding-top: 5px;
	}
	.banner-news .ticker-headline {
    padding: 0px 0px !important;
    float: right;
    width: 30%;
	}
	.marqueen .carousel,.marqueen .carousel .item,.marqueen .carousel-inner{
		overflow: hidden;
		display: block;
	}
	.marqueen .carousel .item{
		float: right;
		width: 30% !important;
		height: 30px;
		padding: 0px !important;
	}
	.marqueen .carousel .item .ticker-headline{
		float: left;
		width: 100% !important;
	}
	.items-nav-title {
    background: #fff !important;
	}
	.items-nav-title h4 {
    border: none !important;
    font-size: 18px !important;
    line-height: 24px !important;
    margin: 5px 0px !important;
    font-weight: 600;
    color: #222;
	}
	.items-nav-title h3 {
    display: block !important;
    font-size: 14px;
    color: #999;
    line-height: 18px;
    margin-bottom: 5px;
	}
	.home-floor {
    width: 100%;
    overflow: visible;
	}
	.flood {
    border: 1px solid #eee !important;
    border-top: none !important;
	}
	.flood .text-one img {
    width: 90% !important;
    margin: 37% 5% 0% 5% !important;
	}
	.flood .text-two .outer-con {
    top: 7%;
    left: 2%;
    width: 35% !important;
	}
	.flood .text-two img {
    width: 60% !important;
    margin: 1% 3% 1% 37% !important;
	}
	.outer-con .describe, .recommendation .info h3 {
    font-size: 14px;
    font-weight: 600;
	}
	.goods-title, .outer-con .price {
    font-size: 14px;
	}
	.c-footer {
    display: block;
    position: relative;
    padding: 7px 0px 9px !important;
    margin-top: 20px !important;
	}
	.c-footer-default .c-footer-miscs p {
    display: inline-block !important;
    margin: 5px !important;
	}
	.shop-nav {
    position: relative;
	}
	.search-content ul li{
		width: 33.33333333% !important;
	}
	.search-content .limit p.title{
    padding: 0px 10px !important;
    height: 36px !important;
	}
	.search-content .price{
    font-size: 16px;
	}
	.search-content .price strong {
    color: #E4393C;
    font-weight: 600;
	}
	.clearfix-right {
    float: left;
    width: 55%;
    min-height: 270px;
	}
	.tb-detail-hd, .tb-detail-price {
    text-align: left;
	}
	.tb-detail-hd h1 {
    font-size: 16px !important;
	}
	.tb-detail-price .items {
    margin-left: 0px !important;
	}
	.tm-ind-panel {
    border-width: 1px 0px;
    margin: -1px 0px 0px 0px;
    padding: 10px 0px !important;
	}
	.iteminfo_parameter {
    padding-left: 50px;
	}
	.buy-event .cart-title {
    border: none;
    margin-left: -60px;
    position: relative;
    padding: 10px 0px 5px 10px !important;
	}
	.theme-popover {
    box-shadow: 0 0 10px #666;
    top: 20%;
    left: calc(50% - 250px) !important;
    width: 500px !important;
    bottom: auto !important;
    border: solid 6px #d3d3d3;
    border-radius: 3px;
	}
	.theme-span {
    height: 0px !important;
    background: #fff !important;
	}
	.theme-poptit {
    display: none !important;
	}
	.theme-signin-left {
    padding-top: 10px;
    max-height: none !important;
    overflow: visible !important;
    float: none !important;
    padding-bottom: 0 !important;
	}
	.theme-options .cart-title {
    margin-top: 5px;
	}
	.buy-nav {
    position: static !important;
	}
	.buy-nav .buy-nav-opt {
    position: absolute;
    margin-left: 283px;
    display: block;
	}
	.buy-nav .buy-nav-opt a {
    display: none !important;
	}
	.buy-nav .buy-nav-opt .favor-submit {
    width: 100% !important;
    border: 0 !important;
    margin-top: 5px !important;
	}
	.buy-nav div.submit {
    width: auto !important;
	}
	.tb-btn-buy {
    margin-left: 50px;
    margin-right: 20px;
	}
	.tb-btn button {
    width: 98px !important;
    border: 1px solid #F03726 !important;
	}
	.link-list {
    margin: 0px auto;
	}
	.address {
    padding: 0 1px 0 5px;
	}
	.address .control {
    margin-bottom: 10px;
	}
	.link-list h3 {
    padding-bottom: 5px !important;
	}
	.address .control h3 {
    display: -webkit-inline-box !important;
    border: none !important;
    margin-top: 20px !important;
	}
	.address ul {
    margin-top: 10px;
	}
	ul.address-list li {
    width: calc(33% - 5px) !important;
    height: 130px;
    float: left;
    background-image: url(../static/img/peraddbg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 10px 10px 0;
    padding: 10px !important;
	}
	ul.address-list li.address-default {
    background-image: url(../static/img/peraddressbg.png);
	}
	.address-left {
    width: 100% !important;
	}
	.address-operation-btn {
    display: block !important;
    position: absolute;
    bottom: 25px;
    right: 10px;
	}
	.c-hide-sm-only{
		display: inherit !important;
	}
	.c-show-sm-only{
		display: none !important;
	}
	.buy-message {
    border: 1px solid #eee;
    overflow: hidden;
    padding: 10px !important;
    margin: 0 5px
	}
	.order-extra {
    border: none;
    float: left;
    width: 60%;
	}
	.memo-input {
    min-width: 280px;
    width: 80% !important;
	}
	.order-nav {
    clear: both;
    text-align: right;
    position: relative !important;
    margin-top: 10px;
    border: none;
	}
	.buy-box, .btn-go{
		float: right !important;
    width: auto !important;
    height: auto !important;
    padding: 10px 10px !important;
	}
	.buy-box{
    font-size: 12px !important;
    overflow: hidden !important;
    border: 2px solid #de9ba2 !important;
	}
	.base-real-pay {
    line-height: 16px;
    margin: 0px 0px 10px;
    position: relative;
	}
	.price .nav-total-price {
    color: #d2364c;
    font: 700 26px tahoma;
	}
	.pay-address {
    display: block !important;
	}
	.order-nav .buy-footer-address .buy-line-title {
    color: #404040;
    font-weight: 700;
	}
	.go-btn-wrap {
    width: 100%;
    overflow: hidden;
    padding-top: 10px;
    margin-bottom: 10px;
	}
	.btn-go {
    display: block;
    padding: 0 26px !important;
    height: 36px !important;
    font: 400 18px/36px arial;
    font-size: 18px !important;
    cursor: pointer;
    z-index: 999;
	}
	.admin-sidebar {
    display: block !important;
    z-index: 1 !important;
	}
	.admin-offcanvas-bar {
    position: static !important;
    width: auto !important;
    overflow-y: visible !important;
    min-height: 100%;
	}
}
@media only screen and (min-width: 992px){
	.mycontainer{
		max-width: 1000px;
		margin: 0px auto;
	}
	.nav-search {
    padding-left: 0px !important;
    max-width: 1000px;
    margin: 0px auto !important;
    padding-top: 20px !important;
    height: 86px;
	}
	.nav-search .logo-big {
    display: -webkit-inline-box !important;
    height: 60px !important;
    width: 230px !important;
    margin: 0px !important;
	}
	.search-bar {
    width: calc(60%) !important;
    padding-left: 8%;
	}
	.search-hot-keywords {
    display: block !important;
	}
	.shop-nav {
    margin: 0px;
    border-bottom: 2px solid #d2364c;
    height: 59px;
	}
	.nav-cont {
    position: absolute;
    padding-left: 150px;
    display: block !important;
    width: 100%;
    top: 20px;
	}
	.nav-cont li {
    float: left;
    height: 40px;
    line-height: 40px;
    white-space: nowrap;
    overflow: visible;
	}
	.nav-cont li a {
    font-size: 16px;
    line-height: 36px;
    margin-left: -1px;
    padding: 0 15px;
    font-weight: 700;
    display: inline-block;
    vertical-align: middle;
	}
	.nav-cont li::before {
    content: '';
    display: inline-block;
    height: 16px;
    border-right: 1px solid #d9d9d9;
    width: 0;
    vertical-align: middle;
    margin-left: -1px;
	}
	.nav-cont .nav-extra {
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 14px;
    line-height: 33px;
    height: 33px;
    width: 110px;
    text-align: center;
    background: #e1363f;
    cursor: pointer;
	}
	.nav-cont .nav-extra * {
    color: #fcff00;
    text-decoration: none;
	}
	.nav-cont .nav-extra img {
    background: #e0313b;
    width: 33px;
    height: 33px;
    border-radius: 33px;
    position: absolute;
    left: -28px;
    z-index: 2;
    padding: 1px;
    overflow: hidden;
	}
	.nav-cont .nav-extra b {
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 45px;
    z-index: 1;
    left: -31px;
    top: -4px;
    background: #fff;
	}
	.nav-cont .nav-extra span{
		margin-left: -15px;
	}
	.nav-cont .nav-extra span:after{
		position: absolute;
		right: 20px;
		top: 15px;
		display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    border-color: #fcff00;
    transform: rotate(45deg);
    content: "";
	}
	#myCarousel{
		position: absolute;
		z-index: 9;
		width: 100%;
	}
	#myCarousel .carousel-inner .item{
		height: 360px !important;
	}
	#myCarousel .carousel-inner .item img{
		width: 1000px !important;
    margin: 0px auto;
	}
	.goods-category-s {
    display: block !important;
    position: absolute;
	}
	.goods-category-title {
    background: #d2364c;
    color: #fff;
    height: 40px;
    line-height: 44px;
    display: block !important;
    position: absolute;
    width: 150px;
    text-align: center;
    font-size: 16px;
    top: 3px;
    z-index: 6 !important;
    cursor: pointer;
	}
	#goods-category .category-content {
    position: relative;
    width: 150px;
    float: left;
    z-index: 113;
    top: 45px;
	}
	.category-content .category {
    width: 150px;
    border: 1px solid #2b2b2b;
    border-top: none;
    background: #2b2b2b;
    box-shadow: 8px 0 7px -3px rgba(0,0,0,.3);
	}
	.category-content .category-list li {
    height: 36px;
    z-index: 888;
    border-top: 1px solid #333;
    border-bottom: 1px solid #252525;
	}
	.category-content .category-list li:hover{
		z-index: 999;
		margin-left: -1px;
		padding-left: 1px;
		background-color: white;
	}
	.category-content .category-list li:hover .b-category-name a{
		color: #4c4c4c;
	}
	.category-content .category-list li:hover .menu-in{
		display: block;
		border: 1px solid #333;
		border-left: none;
	}
	.category-content .category-info {
    position: relative;
    height: 100%;
    padding-left: 12px;
    width: 152px;
    overflow: hidden;
	}
	.category-content .b-category-name {
    line-height: 32px;
    padding-top: 3px;
    padding-left: 5px;
    padding-right: 35px;
	}
	.category-content .category-name {
    overflow: hidden;
    position: relative;
	}
	.category-content .category-name img {
    position: absolute;
    top: 6px;
    width: 25px;
    height: 25px;
    left: 6px;
    display: block;
	}
	.category-content .category-info em {
    position: absolute;
    top: 8px;
    right: 20px;
    width: 13px;
    height: 13px;
    color: rgb(155, 155, 155);
    font: 12px/18px 宋体 !important;
	}
	.category-content .category-name .ml-22 {
    font-size: 14px !important;
    padding-left: 35px !important;
	}
	.category-content .b-category-name a {
    color: #fff;
	}
	.category-content .menu-item.top {
    top: 0px;
	}
	.category-content .menu-in {
    display: none;
	}
	.category-content .menu-item {
    position: absolute;
    left: 149px;
    height: 100%;
    z-index: 11;
    padding: 0 0 0 2px;
    width: 770px;
    background: #fff;
    border: none;
    border-top: 1px solid #bbb9;
    overflow-y: scroll;
    overflow-x: hidden;
	}
	.category-content .menu-item .area-in {
    position: relative;
    z-index: 1;
	}
	.category-content .menu-item .area-bg {
    padding: 10px 0 10px 40px;
	}
	.category-content .menu-srot {
    width: 100%;
    overflow: hidden;
	}
	.menu-srot .sort-side {
    overflow: hidden;
	}
	.sort-side .dl-sort {
    float: left;
    width: 50%;
	}
	.sort-side dt {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #db3e54;
    text-align: left;
	}
	.sort-side dd {
    float: left;
    margin: 2px 6px 4px 0;
	}
	.sort-side dd a {
    float: left;
    width: auto;
    letter-spacing: 0.5px;
    line-height: 14px;
    color: #888;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 3px 10px;
    border: 1px solid #e6e6e6;
	}
	.slideall {
    height: 360px;
    position: relative;
	}
	.marqueen {
    position: absolute !important;
    top: 10px;
    right: 0px;
    width: 170px;
    height: 315px;
    background: #FFF;
    opacity: 1;
    z-index: 11;
    border: none !important;
	}
	#carousel-example-vertical {
    margin-left: 0px !important;
	}
	.marqueen #carousel-example-vertical .item {
    float: none;
    width: 100% !important;
    padding: 0px 5px !important;
    border: none;
    height: 30px;
    line-height: 30px;
	}
	.items-nav-title {
    text-align: left !important;
    position: relative;
    border-bottom: 2px solid #000;
    margin-top: 10px;
	}
	.items-nav-title h4 {
    float: left !important;
    border: none !important;
    margin: 7px 0px !important;
    font-size: 20px !important;
    font-weight: 700;
	}
	.items-nav-title h3 {
    float: left;
    margin-left: 10px;
    margin-top: 12px;
	}
	.items-nav-title .today-brands {
    display: block !important;
    position: absolute;
    right: 60px;
    overflow: hidden;
    height: 20px;
    top: 11px;
    text-align: right;
	}
	.today-brands a {
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    margin: 0px 5px;
	}
	.items-nav-title .more {
    display: block !important;
    position: absolute;
    right: 0px;
    top: 10px;
    font-size: 14px;
    overflow: hidden;
	}
	.items-nav-title .more em{
		margin-left: 3px;
    font: 12px/18px 宋体;
	}
	.flood {
    position: relative;
    border: none !important;
	}
	.flood .text-one, .flood .text-two, .flood .text-three {
    width: 20%;
    text-align: center;
    margin: 0px;
    height: 200px;
	}
	.flood .big, .flood .list {
    height: 400px !important;
    position: relative;
	}
	.list .word {
    display: block !important;
    padding: 20px 0 30px 10px;
	}
	.word .outer {
    margin: 0 10px 10px 0;
    float: left;
    width: 50px;
    height: 50px;
    text-align: center;
    color: #2f2f2f;
    background-color: #fff;
    border-radius: 50px;
	}
	.word .outer .inner {
    display: table-cell;
    vertical-align: middle;
    width: 50px;
    height: 50px;
	}
	.word .outer .text {
    font-weight: 400;
    display: inline-block;
    max-width: 35px;
    margin: 0 auto;
	}
	.list .outer-con {
    top: 38% !important;
    width: 98% !important;
    left: 2% !important;
	}
	.flood .text-one img, .flood .text-two img, .flood .text-three img {
    position: absolute;
    margin: 0px !important;
    width: 120px !important;
    right: 50%;
    margin-right: -60px !important;
    transition:all 0.5s ease 0s;;
		-webkit-transition:all 0.5s ease 0s;; /* Safari */
	}
	.flood .text-two img:hover, .flood .text-three img:hover {
    transform: translateX(-10px);
    -webkit-transform: translateX(-10px);
	}
	.flood .list img {
    position: absolute;
    top: auto;
    margin: 0px !important;
    bottom: 0;
    right: 50%;
    width: 200px !important;
    height: 200px;
    margin-right: -100px !important;
    transition:all 0.3s linear;
		-webkit-transition:all 0.3s linear; /* Safari */
	}
	.flood .list img:hover {
		transform: scale(1.1);
		-webkit-transform: scale(1.1);
	}
	#floor1 .list .triangle-topright {
    width: 0;
    height: 0;
    border-top: 30px solid #68937f;
    position: absolute;
    bottom: 0px;
    border-left: 30px solid #fff;
	}
	#floor2 .list .triangle-topright {
    width: 0;
    height: 0;
    border-top: 30px solid #d17b28;
    position: absolute;
    bottom: 0px;
    border-left: 30px solid #fff;
	}
	.flood .text-two.sug {
    position: absolute;
    top: 200px;
    left: 20%;
	}
	.flood .text-two .outer-con, .flood .text-three .outer-con {
    top: auto;
    left: 5%;
    width: 90% !important;
    bottom: 10px !important;
	}
	.big .outer-con {
    top: 23% !important;
	}
	.flood .big img {
    width: 174px !important;
    margin-right: -87px !important;
    bottom: 15% !important;
    top: auto !important;
	}
	.flood .text-three.sug {
    position: absolute;
    top: 200px;
    right: 20%;
	}
	.search-content ul li{
		width: 20% !important;
	}
	.item-inform {
    max-width: 1000px;
    margin: 0px auto;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
	}
	.clearfix-left {
    display: block !important;
    float: left;
    width: 360px;
	}
	.box {
    margin: 0px auto;
    position: relative;
	}
	.tb-booth {
    border: 1px solid #CDCDCD;
    position: relative;
    z-index: 1;
    overflow: hidden;
	}
	.tb-s310, .tb-s310 a {
    height: 350px;
    width: 350px;
	}
	.tb-thumb {
    margin: 10px 0 0;
    overflow: hidden;
	}
	.tb-thumb li {
    background: none repeat scroll 0 0 transparent;
    float: left;
    margin: 0 6px 0 0;
    overflow: hidden;
    padding: 1px;
	}
	.tb-thumb li div {
		border: 1px solid #CDCDCD;
    overflow: hidden;
	}
	.tb-thumb .tb-selected div{
		border: medium none;
	}
	.tb-s40 {
    height: 60px;
    width: 60px;
	}
	.tb-pic a {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
	}
	.tb-pic a img {
    vertical-align: middle;
	}
	.clearfix-right {
    width: calc(100% - 370px);
    margin-left: 10px;
	}
	.tb-detail-hd h1 {
    font-size: 18px !important;
	}
	.tb-detail-price {
    background: #fcf1e3 url(https://demo.shopxo.net/static/index/default/images/goods_meta_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
	}
	.tb-detail-price {
    height: 75px;
    padding-top: 10px;
	}
	.tb-detail-price .items {
    display: block !important;
    margin: 0px 10px !important;
	}
	.tb-detail-price .items dt {
    width: 70px !important;
    float: left !important;
    text-align: left !important;
	}
	.sys_item_mktprice {
    font-size: 14px;
	}
	.iteminfo_mktprice {
    padding-top: 10px;
	}
	.sys_item_price {
    font-size: 24px !important;
    font-weight: bold;
	}
	.theme-poptit, .theme-signin-right, .iteminfo_parameter dt.buy-event, .btn-op {
    display: none !important;
	}
	.theme-popover {
    display: block !important;
    position: static !important;
    border: none;
    box-shadow: none;
    width: 100% !important;
	}
	.theme-signin-left {
    padding-top: 15px;
    padding-bottom: 0px !important;
    max-width: 100%;
	}
	.theme-options {
    overflow: visible !important;
    padding: 0px 0px !important;
	}
	.theme-signin-left .cart-title {
    margin-left: -46px;
    font-size: 12px !important;
    font-weight: 100 !important;
    color: #888;
    float: left;
	}
	.browse {
    display: block !important;
    float: left;
    width: 20%;
	}
	.browse ul {
    border: 1px solid #D4D4D4;
    width: 90%;
	}
	.browse ul .mt {
    background-color: #f7f7f7;
    height: 35px;
    line-height: 35px;
	}
	.browse ul .mt h2{
		line-height: inherit;
	}
	.browse ul li {
    margin: 0px 10px;
    padding: 12px 0px;
    border-top: 1px dotted #DEDEDE;
	}
	.browse ul li.first {
    border-top: none;
	}
	.browse li .p-price strong {
    color: #E4393C;
    font-weight: 600;
	}
	.introduce-main {
    width: 80%;
    float: left;
	}
	.introduce-main .c-tabs ul{
    max-width: 960px;
	}
	.link-list {
    margin: 0;
	}
	.address {
    padding: 0;
	}
	.link-list h3 {
    padding: 0 0 5px 0 !important;
	}
	ul.address-list li {
    width: calc(25% - 8px) !important;
	}
	.c-hide-sm-only{
		display: table-cell !important;
	}
	.buy-message {
    margin: 0 !important;
	}
	.buy-point-discharge {
    padding: 10px 0px !important;
	}
}
@media only screen and (min-width: 1200px){
	.mycontainer, .nav-search, .footer, .nav-table {
    max-width: 1200px !important;
	}
	.nav-cont {
    padding-left: 180px;
	}
	.nav-cont ul {
    overflow: hidden;
	}
	#myCarousel .carousel-inner .item {
    height: 430px !important;
	}
	#myCarousel .carousel-inner .item img{
		width: 1200px !important;
	}
	.goods-category-title {
    width: 180px;
	}
	#goods-category .category-content {
    width: 180px;
	}
	.category-content .category {
    width: 180px;
    max-height: 432px;
    overflow-y: auto;
    overflow-x: hidden;
	}
	.category-content .category-list li {
    height: 43px;
	}
	.category-content .category-info {
    width: 182px;
	}
	.category-content .b-category-name {
    padding-left: 10px;
    padding-right: 35px;
	}
	.category-content .category-info em {
    top: 9px;
	}
	.category-content .menu-item {
    left: 179px;
	}
	.slideall {
    max-width: 1200px;
    height: 430px;
	}
	.marqueen {
    width: 220px;
    height: 412px;
    text-align: left;
    padding: 10px;
	}
	.mod-vip {
    display: block !important;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
	}
	.m-baseinfo {
    position: relative;
    margin-bottom: 10px;
	}
	.m-baseinfo img.user-avatar {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
	}
	.m-baseinfo em span {
    position: absolute;
    top: 15px;
    left: 60px;
    font-size: 12px;
    color: #3C3C3C;
	}
	.member-login {
    overflow: hidden;
    height: 25px;
    text-align: center;
	}
	.member-login .btn{
		width: 95px;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		padding: 0px;
	}
	.marqueen-title {
    display: block;
    margin-left: 5px;
    margin-top: 5px;
	}
	.banner-news {
    padding-top: 0px;
	}
	.c-g-fixed{
    max-width: 1200px !important;
	}
	.flood .text-one, .flood .text-two, .flood .text-three {
    height: 240px;
	}
	.flood .big, .flood .list {
    height: 480px !important;
	}
	.list .word {
    padding: 20px 0 30px 20px;
	}
	.word .outer {
    width: 57px;
    height: 57px;
    border-radius: 57px;
	}
	.word .outer .inner {
    width: 57px;
    height: 57px;
	}
	.flood .text-one img, .flood .text-two img, .flood .text-three img {
    width: 180px !important;
    margin-right: -90px !important;
	}
	.flood .list img {
    width: 210px !important;
    margin-right: -105px !important;
	}
	.flood .text-two.sug, .flood .text-three.sug {
    top: 240px;
	}
	.flood .big img {
    width: 194px !important;
    margin-right: -97px !important;
	}
}
@media only screen and (max-width: 768px){
	.marqueen-title {
	  line-height: 30px;
	  height: 30px;
	}
	.items-nav-title {
   	padding: 0 10%;
	}
	.c-footer {
    padding-bottom: 50px !important;
	}
	.user-base {
    text-align: center;
    height: 210px;
	}
	.user-avatar {
    margin-bottom: 10px;
	}
	.user-base-left .items a:not(:last-child) {
    margin-right: 20px;
	}
	.user-base-right {
    position: absolute;
    right: 10px;
    top: 10px;
	}
	ul.user-base-icon {
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px 0;
	}
	ul.user-base-icon li {
    float: left;
    width: 25%;
	}
	.various .c-panel-default > .c-panel-hd {
    border-bottom: 1px solid #f1f1f1;
	}
}
@media only screen and (max-width: 1200px){
	.c-accordion-gapped{
		margin: 0 5px;
	}
}

.mycontainer{
	padding: 0px !important;
}
.ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    color: #666;
}
.c-badge.c-round {
    border-radius: 50%;
}
.c-badge {
    padding: 0.25em 0.5em;
    display: inline-block;
    min-width: 10px;
    font-weight: bold;
    font-size: 10px;
    color: #fff;
    line-height: 1;
    vertical-align: baseline;
    white-space: nowrap;
    text-align: center;
}
.hot-icon {
    position: absolute;
    top: 1%;
    left: 55%;
    z-index: 2;
    border: 1px solid #fff;
}
.c-badge-danger {
    background-color: #dd514c;
}

.carousel-indicators .active{
	background-color: red;
	margin: 0 5px;
}
.carousel-indicators li{
	background-color: #777;
	margin: 0 5px;
	width: 12px;
	height: 12px;
}

.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
	padding-right: 0px;
	padding-left: 0px;
}

*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family:Arial, "微软雅黑";}
img{border:none;max-width:100%;vertical-align:middle;}
body,p,form,input,button,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6{margin:0;padding:0;list-style:none;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
input,textarea{-webkit-user-select:text;-ms-user-select:text;user-select:text;font-size:1em;line-height:1.5em;}
table{border-collapse:collapse;}
input,select,textarea{outline:none;border:none;background:none;}
a{outline:0;cursor:pointer;*star:expression(this.onbanner=this.blur());}
a:link,a:active{text-decoration:none;}
a:visited{text-decoration:none;}
a:hover{color:#f00;text-decoration:none;}
a{text-decoration:none;-webkit-touch-callout:none;}
em,i{font-style:normal;}
li,ol{list-style:none;}
html{font-size:16px;}
.clear{clear:both;height:0;font-size:0;line-height:0;visibility:hidden; overflow:hidden;}
.fl{float:left;}
.fr{float:right;}
body{ margin:0 auto;line-height: 1.6; min-width:320px;color:#555;background:#fff;height:100%;font-size: 12px;}
a{color: #222;text-decoration: none}
.router-link-active{color: red !important;}
</style>
