<template lang="html">
	<!-- 商品分类 start -->
	<div id="goods-category" class="mycontainer">
		<div class="goods-category-s">
			<a href="#">
				<div class="goods-category-title">
					<span class="all-goods">全部分类</span>
				</div>
			</a>
			<div v-show="s_flag" class="category-content">
				<div class="category">
					<ul class="category-list">
						<li class="appliance js_toggle relative first" v-for="(item,index) of jsont" :key="index">
							<div class="category-info">
								<h3 class="category-name b-category-name">
									<img :src="item.img"/>
									<a @click="toSearch(item.n)" class="ml-22">{{item.n}}</a>
								</h3>
								<em>&gt;</em>
							</div>
							<div class="menu-item menu-in top">
								<div class="area-in">
									<div class="area-bg">
										<div class="menu-srot">
											<div class="sort-side">
												<dl class="dl-sort" v-for="(item1,index1) of item.i" :key="index1">
													<dt>
														<a @click="toSearch(item1.n)">
                                                            <span>{{item1.n}}</span>
                                                        </a>
													</dt>
													<dd v-for="(item2,index2) of item1.i" :key="index2">
														<a @click="toSearch(item2)">
                                                            <span>{{item2}}</span>
                                                        </a>
													</dd>
												</dl>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- 商品分类 end -->
</template>

<script>
export default {
	data(){
		return{
			s_flag:this.f1,
			jsont:[],
			img:['../../static/img/20180814174251211789.png',"../../static/img/20180814174311166703.png",
			"../../static/img/20180814174638213368.png","../../static/img/20180814174649846358.png",
			"../../static/img/20180814174659916405.png","../../static/img/20180814174708327545.png",
			"../../static/img/20180814174722490490.png","../../static/img/20180814174732569726.png",
			"../../static/img/20180814174748738821.png","../../static/img/20180814174757134754.png"
			]
		}
	},
	props:{
		f1:{
			type:Boolean,
			default:true
		}
	},
	methods:{
		toSearch(str) {
	   		this.$router.push({path:'/search',query:{'searchWord':str}});
          	this.$router.go(0);
		}
	},
	mounted(){
		const that=this;
		const postUrl = "http://47.100.242.105:8081/rest/itemcat/all?callback"
	    this.$axios.post(postUrl)
	      .then(res => {
	        let newData=eval(res.data.substring(4));
	        let iii=[];
	        for(let i=0;i<10;i++){
	        	let jjj=[];
	        	for( let j of newData.data[i].i){
	        		let kkk=new Array();
	        		for(let k of j.i){
	        			kkk.push(k.split("|")[1]);
	        		}
	        		let jobject={};
	        		jobject["n"]=j.n.replace(/(<\/?a.*?>)/g, '');
	        		jobject["i"]=kkk;
	        		jjj.push(jobject);
	        	}
	        	let iobject={};
	        	iobject["img"]=that.img[i]
	        	iobject["n"]=newData.data[i].n.replace(/(<\/?a.*?>)/g, '');
	        	iobject["i"]=jjj;
	        	iii.push(iobject);
	        }
	        that.jsont=iii;
	        console.log(that.jsont);
	        //that.jsont=newData.data.slice(0,10);
	        //console.log(newData);
	        //console.log(newData.data[0]);
	      })
	      .catch(error => {
	        console.log(error);
	      })
	}
}
</script>

<style scoped lang="css">
#goods-category {
    position: relative;
    top: -45px;
}
.goods-category-s {
    display: none;
}
.goods-category-s, .goods-category-title {
    z-index: 100;
}
.goods-category-s:hover .category-content{
	display: block !important;
}
</style>