<template>
	<div class="admin">
		<div class="admin-sidebar c-offcanvas">
			<div class="c-offcanvas-bar admin-offcanvas-bar">
				<ul class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					<li class="panel panel-default">
						<div class="panel-heading" role="tab" id="heading1">
							<div class="panel-title first" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
						        <div id="index" :style="component=='Index'?{color: 'white'}:{color: '#b6b6b6'}" class="panel-text" @click="changePage('Index')">首页</div>
						    </div>
						</div>
					</li>
					<li class="panel panel-default">
						<div class="panel-heading" role="tab" id="heading2">
							<div class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
						        <div class="panel-text" :style="(component=='AddGoods'||component=='SearchGoods'||component=='ParamList')?{color: 'white'}:{color: '#b6b6b6'}">商品管理</div>
						    </div>
						</div>
						<div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
							<ul class="admin-sidebar-sub">
								<li>
									<div class="panel-text" :style="component=='AddGoods'?{color: 'white'}:{color: '#b6b6b6'}" @click="changePage('AddGoods')">新增商品</div>
								</li>
								<li>
									<div class="panel-text" :style="component=='SearchGoods'?{color: 'white'}:{color: '#b6b6b6'}" @click="changePage('SearchGoods')">查询商品</div>
								</li>
								<li>
									<div class="panel-text" :style="component=='ParamList'?{color: 'white'}:{color: '#b6b6b6'}" @click="changePage('ParamList')">规格参数</div>
								</li>
							</ul>
						</div>
					</li>
					<li class="panel panel-default">
						<div class="panel-heading" role="tab" id="heading3">
							<div class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
						        <div class="panel-text" :style="(component=='ContentCategory'||component=='Content')?{color: 'white'}:{color: '#b6b6b6'}">网页内容管理</div>
						    </div>
						</div>
						<div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
							<ul class="admin-sidebar-sub">
								<li>
									<div class="panel-text" :style="component=='ContentCategory'?{color: 'white'}:{color: '#b6b6b6'}" @click="changePage('ContentCategory')">内容分类管理</div>
								</li>
								<li>
									<div class="panel-text" :style="component=='Content'?{color: 'white'}:{color: '#b6b6b6'}" @click="changePage('Content')">内容管理</div>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="content-right">
			<keep-alive>
				<div style="margin: 10px;" :is="component"></div>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import Index from "./adminRight/index"
import AddGoods from "./adminRight/addGoods"
import SearchGoods from "./adminRight/searchGoods"
import ParamList from "./adminRight/paramList"
import ContentCategory from "./adminRight/contentCategory"
import Content from "./adminRight/content"

export default {
	data(){
		return{
			component:'Index'
		}
	},
	components:{
		Index,
		AddGoods,
		SearchGoods,
		ParamList,
		ContentCategory,
		Content
	},
	methods:{
		changePage(str){
			if(str=="AddGoods"){
				this.$store.commit('set_img_upload_cache',[]);
				this.$store.commit('set_img_paths',[]);
				this.$store.commit('set_img_status',"ready");
				this.$store.commit('set_select_id',this.$store.state.goods_id);
				this.$store.commit('set_select_class',this.$store.state.goods_class);
			}else if(str=="ParamList"){
				this.$store.commit('set_select_id',this.$store.state.params_id);
				this.$store.commit('set_select_class',this.$store.state.params_class);
			}else if(str=="Content"){
				this.$store.commit('set_img_upload_cache',[]);
				this.$store.commit('set_img_paths',[]);
				this.$store.commit('set_img_status',"ready");
			}
			this.component=str;
		}
	},
	mounted(){
		//this.pre=$("#index");
		//this.pre.css("color","white");
	}
}
</script>

<style scoped>
.admin{
	height: 100%;
}
.admin-sidebar {
	touch-action: pan-y;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 170px;
    height: 100%;
    min-height: 100%;
    float: left;
    border-right: 1px solid #cecece;
}
.c-offcanvas {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1090;
    background: rgba(0, 0, 0, 0.15);
}
.admin-offcanvas-bar, .admin-offcanvas-bar  li {
    background: #36373c;
}
.c-offcanvas-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1091;
    width: 270px;
    max-width: 100%;
    overflow-y: auto;
}
.admin-offcanvas-bar  li {
    border: 1px solid #2e2e31;
    position: relative;
    margin-bottom: -1px;
}
.admin-sidebar-list li .panel-text {
    padding: 0.6rem;
    color: #b6b6b6;
}
.collapsed:not(.first):after{
	position: absolute;
	right: 10px;
	top: 18px;
	display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    border-color: #fff;
    transform: rotate(45deg);
	transition:all 0.2s linear;
	-webkit-transition:all 0.2s linear; /* Safari */
    content: "";
}
.panel-heading>div:not(.collapsed):not(.first):after{
	position: absolute;
	right: 10px;
	top: 18px;
	display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    border-color: #fff;
    transform: rotate(135deg);
    transition:all 0.2s linear;
	-webkit-transition:all 0.2s linear; /* Safari */
    content: "";
}
.panel-text{
	padding: 0.6rem;
    display: block;
    color: #b6b6b6;
    cursor: pointer;
}
.admin-sidebar-sub {
    box-shadow: 0 16px 8px -15px #e2e2e2 inset;
    background: #404040;
    padding-left: 24px;
}

.panel-group{
	margin-bottom: 0px;
}
.panel-default>.panel-heading{
	color: inherit;
	background-color: inherit;
	border-color: inherit;
}
.panel-heading{
	padding: 0px;
	border: none;
}
.panel-title{
	font-size: 12px;
}
.panel-group .panel+.panel{
	margin-top: 0px;
}

.content-right{
	padding-left: 170px;
	height: 100%;
	width: 100%;
}
</style>