<template lang="html">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">{{title}}</h3>
		</div>
		<div class="panel-body">
			<button class="btn btn-sm btn-info" v-for="(b,index) in body" @click="childMethod(b.method)"><i :class="b.css"></i> {{b.text}}</button>
		</div>
		<Table border :columns="columns" :data="tableData"></Table>
		<div class="panel-footer">
			<Page :total="100" show-elevator show-sizer show-total />
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	props:{
		title:{
			type:String,
			default:""
		},
		body:{
			type:Array,
			default:[]
		},
		columns:{
			type:Array,
			default:[]
		},
		tableData:{
			type:Array,
			default:[]
		}
	},
	methods:{
        childMethod(method){
        	this.$emit(method);
        }
	},
	mounted(){
		$(".ivu-page-total").css({"position":"absolute","right":"0px"});
		$(".ivu-page-prev").css({"margin-left":"90px"});
		$(".ivu-page-options-sizer").css({"position":"absolute","left":"0px"});
	}
}
</script>

<style scoped lang="css">
.panel{
	border-left: none;
	border-right: none;
}.panel-heading{
	border-left: 1px solid #dcdee2;
	border-right: 1px solid #dcdee2;
}
.btn-info{
	margin: 0px 1px;
}
.panel-body{
	padding: 5px 15px;
	border-left: 1px solid #dcdee2;
	border-right: 1px solid #dcdee2;
}
.panel-footer{
	padding: 3px 15px;
	border-top: none;
	border-left: 1px solid #dcdee2;
	border-right: 1px solid #dcdee2;
}
.ivu-page{
	position: relative;
}
.add-content{
	padding: 10px;
}
</style>