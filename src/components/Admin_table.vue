<template lang="html">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">{{title}}</h3>
		</div>
		<div class="panel-body">
			<button class="btn btn-sm btn-info" v-for="(b,index) in body" @click="childMethod(b.method,b.param)"><i :class="b.css"></i> {{b.text}}</button>
		</div>
		<Table @on-selection-change="handleSelectRow" border :columns="columns" :loading="loading" :data="tableData"></Table>
		<div class="panel-footer">
			<Page :total="total" @on-change="changePage" @on-page-size-change="changePageSize" show-elevator show-sizer show-total />
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			params:{
            	page: 1,
            	rows: 10
			},
			ids:[]
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
		},
		loading:{
			type:Boolean,
			default:true
		},
		method:{
			type:String,
			default:""
		},
		total:{
			type:Number,
			default: 0
		},
	},
	methods:{
        childMethod(method,param){
        	if(typeof(param)==='undefined'){
        		this.$emit(method);
        	}else{
        		this.$emit(method,param,this.ids);
        	}
        },
        changePage(page){
        	//console.log(page);
        	this.params.page=page;
        	this.$emit(this.method,this.params);
        },
        changePageSize(pageSize){
        	//console.log(pageSize);
        	this.params.rows=pageSize;
        	this.$emit(this.method,this.params);
        },
        handleSelectRow(selection){
        	//console.log(selection);
        	this.ids=[];
        	for(let i in selection){
        		this.ids.push(selection[i]["id"]);
        	}
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