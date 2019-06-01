<template lang="html">
	<!-- 首页轮播 start -->
	<div id="myCarousel" class="carousel slide" data-ride="carousel">
	    <!-- 轮播（Carousel）指标 -->
	    <ol class="carousel-indicators">
	        <li data-target="#myCarousel" v-for="(img,index) in adImgs" :key="index" :data-slide-to="index" :class="index==0?'active':''"></li>
	    </ol>   
	    <!-- 轮播（Carousel）项目 -->
	    <div ref="carousel" class="carousel-inner" role="listbox">
	        <div class="item" :class="index==0?'active':''" v-for="(img,index) in adImgs" :key="index" style="background: rgb(244, 188, 203);">
	        	<a :href="img.href">
	        		<img :src="img.src" @error="img.src=img.srcB" draggable="false">
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
	data(){
		return{
			adImgs:[]
		}
	},
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
		},
		getAdImg(){
			let postUrl="http://47.100.242.105:8082/showBigPic"
			this.$axios.post(postUrl)
			  .then((res)=>{
				console.log(res);
				this.adImgs=res.data;
			})
			.catch(error => {
		        console.log(error);
		    })
		}
	},
	mounted(){
		this.getAdImg();
	}
}
</script>

<style scoped lang="css">

</style>