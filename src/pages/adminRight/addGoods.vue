<template lang="html">
	<div class="addGoods">
		<AdminAdd :items="items" />
	</div>
</template>

<script>
import AdminAdd from "../../components/Admin_add"

export default {
	data(){
		return{
            items:[
	            {
	            	type:"button",
	            	id:"selectClass",
	            	label:"商品类目",
	            	text:"选择类目",
	            	targetId:""
	            },
	            {
	            	type:"input",
	            	id:"goodsTitle",
	            	label:"商品标题"
	            },
	            {
	            	type:"textarea",
	            	id:"goodsSubtitle",
	            	label:"商品卖点"
	            },
	            {
	            	type:"input",
	            	id:"goodsPrice",
	            	label:"商品价格"
	            },
	            {
	            	type:"input",
	            	id:"stockNumber",
	            	label:"库存数量"
	            },
	            {
	            	type:"input",
	            	id:"barCode",
	            	label:"条形码"
	            },
	            {
	            	type:"button",
	            	id:"goodsPic",
	            	label:"商品图片",
	            	text:"上传图片",
	            	targetId:"#goodsPicPage"
	            },
	            {
	            	type:"quillEditor",
	            	id:"goodsDescribe",
	            	label:"商品描述"
	            }
            ]
		}
	},
	components:{
		AdminAdd
	},
	mounted(){

	}
}
</script>

<style scoped lang="css">
.form-group{
	overflow: hidden;
}
.form-horizontal .form-group {
     margin-right: 0px; 
     margin-left: 0px; 
}
.form-horizontal .control-label{
	text-align: left;
}
.sellpoint{
	padding-top: 27px;
}
.goodsDes{
	padding-top: 98px;
}
</style>