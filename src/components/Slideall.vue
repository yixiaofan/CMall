<template lang="html">
	<!-- 轮播上内容 start -->
	<div class="mycontainer slideall">
		<!-- 轮播右侧-内容2 start -->
		<div class="marqueen">
			<div class="mod-vip">
				<div class="m-baseinfo">
					<a href="#">
						<img src="../../static/img/default-user-avatar.jpg" class="user-avatar"/>
					</a>
					<em>
						<span class="s-name">您好，欢迎来到浮云商城</span>
					</em>
				</div>
				<div class="member-login">
					<a href="javascript:void(0);" data-toggle="modal" data-target="#loginPage" class="btn btn-info">登录</a>
					<a href="#" class="btn btn-info">注册</a>
				</div>
			</div>
			<span class="marqueen-title">新闻头条</span>
			<div id="carousel-example-vertical" class="carousel vertical slide banner-news">
			    <div class="carousel-inner" role="listbox">
			        <div class="item active">
				        <div class="ticker-headline">
				            <a href="#">
				              <span>[关于我们]</span>
				              <span style="color: red;">关于CMall</span>
				            </a>
				        </div>
			        </div>
			        <div class="item">
				        <div class="ticker-headline">
				            <a href="#">
				              <span>[关于我们]</span>
				              <span>联系我们</span>
				            </a>
				        </div>
			        </div>
					<div class="item">
				        <div class="ticker-headline">
				            <a href="#">
				              <span>[关于我们]</span>
				              <span>招聘英才</span>
				            </a>
				        </div>
			        </div>
			    </div>
			</div>
		</div>
		<!-- 轮播右侧-内容2 end -->
	</div>
	<!-- 轮播上内容 end -->
</template>

<script>
export default {
	name:"slideall",
	mounted(){
		$(window).bind("resize load",function(){
			let width = window.innerWidth;
			console.log(width);
			if(width<768){
				$('#carousel-example-vertical').carousel({
					interval: 2000
				});
			}else{
				$('#carousel-example-vertical').carousel('pause');
			}
		})
	}
}
</script>

<style scoped lang="css">
.marqueen{
	border-top: 1px solid #F5F5F5;
    border-bottom: 1px #f5f5f5 solid;
}
.mod-vip {
    display: none;
}
.marqueen-title {
    position: absolute;
    left: 10px;
    padding-right: 10px;
    border-right: 1px solid #F5F5F5;
}
.banner-news {
    max-width: 1200px;
    margin: 0px auto;
    margin-left: 70px;
    overflow: hidden;
    height: 30px;
    text-align: left;
}
.ticker-headline {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 20px;
  margin: 0;
  height: 30px;
  line-height: 30px;
}
.carousel{
	overflow: hidden;
}
.carousel.vertical .carousel-inner {
  height: 100%;
  width: auto;
}
.carousel.vertical .carousel-inner > .item {
  width: auto;
  padding-right: 50px;
  -webkit-transition: 0.6s ease-in-out top;
  transition: 0.6s ease-in-out top;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .carousel.vertical .carousel-inner > .item {
    -webkit-transition: 0.6s ease-in-out;
    transition: 0.6s ease-in-out;
  }
  .carousel.vertical .carousel-inner > .item.next, 
  .carousel.vertical .carousel-inner > .item.active.right {
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
    top: 0;
  }
  .carousel.vertical .carousel-inner > .item.prev, 
  .carousel.vertical .carousel-inner > .item.active.left {
    -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
    top: 0;
  }
  .carousel.vertical .carousel-inner > .item.next.left, 
  .carousel.vertical .carousel-inner > .item.prev.right, 
  .carousel.vertical .carousel-inner > .item.active {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    top: 0;
  }
}
.carousel.vertical .carousel-inner > .active,
.carousel.vertical .carousel-inner > .next,
.carousel.vertical .carousel-inner > .prev {
  display: block;
}
.carousel.vertical .carousel-inner > .active {
  top: 0;
}
</style>