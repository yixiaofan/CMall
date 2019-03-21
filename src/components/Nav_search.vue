<template lang="html">
	<!-- 搜索框 start -->
	<div class="nav-search">
		<div class="logo">
			<a href="http://127.0.0.1:8080">
				<img src="../assets/img/logo.png" />
			</a>
		</div>
		<div class="logo-big">
			<a href="http://127.0.0.1:8080">
				<img src="../assets/img/logo-big.png" />
			</a>
		</div>
		<div class="search-bar">
			<div>
				<input type="text" v-model.trim="s_word" :class="{s_warn:action}" id="search-input" :placeholder="placeholder" autocomplete="off" />
				<input type="submit" @click="checkSearch" id="topsearch" class="btn" value="搜索"/>
			</div>
			<ul class="search-hot-keywords">
				<li>
					<a href="#">手机</a>
				</li>
				<li>
					<a href="#">运动鞋</a>
				</li>
				<li>
					<a href="#">牛奶</a>
				</li>
			</ul>
		</div>
	</div>
	<!-- 搜索框 end -->
</template>

<script>
export default {
	data(){
		return{
			action:false,
			s_word:"",
			placeholder:"搜索 浮云 商品/品牌/店铺"
		}
	},
	methods: {
        checkSearch(e) {
          if(this.s_word==""){
          	$("#search-input").addClass('s_warn');
          	this.placeholder="请输入关键词";
          	e.preventDefault();
          }else{
          	//$this.store.commit('s_flagChange');
          	//this.$store.state.searchWord=this.s_word;
          	this.$router.push({path:'/search',query:{searchWord:this.s_word}});
          	this.$router.go(0);
          }
        }
    },
	mounted(){
		if(this.$route.query.searchWord!=null){
			this.s_word=this.$route.query.searchWord;
		}
		$("#search-input").each(function() {
		    $(this)[0].addEventListener("animationend",function(){
		    	$(this).removeClass('s_warn');
		    });
		});
	}
}
</script>

<style scoped lang="css">
.logo-big {
    display: none;
}
.nav-search {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1060;
    margin: 0px auto;
    padding-top: 5px;
    overflow: hidden;
    margin-bottom: 3px;
}
.nav-search .logo {
    height: 36px;
    width: 45px;
    margin: 0 9px;
    float: left;
}
.search-bar {
    height: 36px;
    width: calc(100% - 66px);
    float: left;
    color: black;
}
.search-bar div {
    border: 2px solid #d2364c;
    width: 100%;
    position: relative;
}
#search-input {
	padding-left: 8px;
}
.search-bar input {
    height: 32px;
    width: 72%;
    outline: none;
    border: none;
}
#topsearch {
    width: 27%;
    height: 32px;
    border: none;
    background: #d2364c none repeat scroll 0% 0%;
    color: #F5F5F2;
    font-size: 14px;
    cursor: pointer;
    border-radius: 0px 0px;
    position: absolute;
    top: 0;
    right: 0;
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    padding: 0.5em 1em;
    vertical-align: middle;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: background-color 300ms ease-out, border-color 300ms ease-out;
    transition: background-color 300ms ease-out, border-color 300ms ease-out;
}
.search-hot-keywords {
    margin-top: 5px;
    height: 16px;
    overflow: hidden;
    display: none;
}
.search-hot-keywords li:not(:last-child) {
    margin-right: 10px;
}
.search-hot-keywords li {
    float: left;
}
@keyframes s_warn {
    from {background: white;}
	to {background: #fdc78d;}
}
@-webkit-keyframes s_warn {
    from {background: white;}
	to {background: #fdc78d;}
}
.s_warn {
    animation: s_warn 0.2s linear 4 alternate;
    -webkit-animation: s_warn 0.2s linear 4 alternate;
}

</style>