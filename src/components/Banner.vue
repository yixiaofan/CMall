<template lang="html">
	<!-- 首页轮播 start -->
	<div id="myCarousel" class="carousel slide" data-ride="carousel">
	    <!-- 轮播（Carousel）指标 -->
	    <ol class="carousel-indicators">
	        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
	        <li data-target="#myCarousel" data-slide-to="1"></li>
	        <li data-target="#myCarousel" data-slide-to="2"></li>
	    </ol>   
	    <!-- 轮播（Carousel）项目 -->
	    <div ref="carousel" class="carousel-inner" role="listbox">
	        <div class="item active" style="background: rgb(244, 188, 203);">
	        	<a href="#">
	        		<img src="../assets/img/20180810101106984022.jpeg" draggable="false" alt="First slide">
	        	</a>
	        </div>
	        <div class="item" style="background: rgb(239, 198, 196);">
	        	<a href="#">
	        		<img src="../assets/img/20180810101224227323.jpeg" draggable="false" alt="Second slide">
	        	</a>
	        </div>
	        <div class="item" style="background: rgb(244, 188, 203);">
	        	<a href="#">
	        		<img src="../assets/img/20180810101106984022.jpeg" draggable="false" alt="Third slide">
	        	</a>
	        </div>
	    </div>
	</div>
	<!-- 首页轮播 end -->
</template>

<script>
let startX=0;
let endX=0;
let offset = 30;
export default {
	name:"home",
	mounted(){
		this.addEventListeners();
	},
	beforeDestroyed(){
    	this.removeEventListeners();
  	},
	methods:{
		addEventListeners(){
      		this.$refs.carousel.addEventListener('touchstart', this.touchStart),
      		this.$refs.carousel.addEventListener('touchmove', this.touchMove),
      		this.$refs.carousel.addEventListener('touchend', this.touchend)
     	},
     	removeEventListeners(){
      		this.$refs.carousel.removeEventListener('touchstart', this.touchStart),
      		this.$refs.carousel.removeEventListener('touchmove', this.touchMove),
      		this.$refs.carousel.removeEventListener('touchend', this.touchend)
     	},
		touchStart(e){
			startX= e.targetTouches[0].clientX;
		},
		touchMove(e){
			endX = e.targetTouches[0].clientX;
		},
		touchend(e){
			var distance = Math.abs(startX - endX);
			if (endX != 0 && distance > offset){
				if(startX > endX){
					$('#myCarousel').carousel('next');
				}else{
					$('#myCarousel').carousel('prev');
				}
				endX=0;
			}
		}
	}
}
</script>

<style scoped lang="css">

</style>