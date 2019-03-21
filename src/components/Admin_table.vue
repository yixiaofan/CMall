<template lang="html">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">{{title}}</h3>
		</div>
		<div class="panel-body">
			<button class="btn btn-sm btn-info" v-for="(b,index) in body" @click="b.func"><i :class="b.css"></i> {{b.text}}</button>
		</div>
		<table class="table table-bordered table-striped">
			<tbody>
				<tr><th><input v-if="textbox" type="checkbox" id="all" v-model="checked" @click="checkedAll"/></th><th v-for="th in ths">{{th}}</th></tr>
				<slot></slot>
			</tbody>
		</table>
		<div class="panel-footer">
			<Page :total="100" show-elevator show-sizer show-total />
		</div>
		<Modal v-model="modal1" :closable="false" @on-ok="ok">
	       	<div class="add-content">
				<div class="form-group">
				    <label for="selectClass" class="control-label" style="margin-right: 10px;">商品类目</label>
				    <Button id="selectClass" type="info" @click="modal2=true">选择类目</Button>
				</div>
	       	</div>
    	</Modal>
    	<Modal title="选择类目" v-model="modal2" @on-ok="ok">
    		<Tree :data="data1" :render="renderContent" @on-select-change="clickLeaf"></Tree>
    		<div slot="footer"></div>
    	</Modal>
	</div>
</template>

<script>
export default {
	data(){
		return{
			checked: false,
			checkList: [],
			modal1: false,
			modal2: false,
			data1: [
                {
                    title: 'parent 1',
                    children: [
                        {
                            title: 'parent 1-1',
                            children: [
                                {
                                    title: 'leaf 1-1-1'
                                },
                                {
                                    title: 'leaf 1-1-2'
                                }
                            ]
                        },
                        {
                            title: 'parent 1-2',
                            children: [
                                {
                                    title: 'leaf 1-2-1'
                                },
                                {
                                    title: 'leaf 1-2-1'
                                }
                            ]
                        }
                    ]
                }
            ]
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
		ths:{
			type:Array,
			default:[]
		},
		textbox:{
			type:Boolean,
			default:true
		}
	},
	methods:{
		renderContent (h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('span', [
                    h('Icon', {
                        props: {
                            type: data.children!=null?'ios-folder-outline':'ios-paper-outline'
                        },
                        style: {
                            marginRight: '8px'
                        }
                    }),
                    h('span', data.title)
                ])
                
            ]);
        },
		checkedAll(){
			let that=this;
			//console.log($("input[type='checkbox']"));
			if(that.checked){//点击复选框此时that.checked还未改变
				$("input[type='checkbox']").each(function(){
					//console.log(this);
					this.checked=false;
				});
			}else{
				$("input[type='checkbox']").each(function(){
					this.checked=true;
				});
			}
		},
		ok () {
            this.$Message.info('Clicked ok');
       	},
        changeModal(){
        	this.modal1=true;
        },
        clickLeaf(){
        	//let el=$(event.currentTarget);
        	console.log("el");
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
.btn-info{
	margin: 0px 1px;
}
.panel-body{
	padding: 5px 15px;
}
.panel-footer{
	padding: 3px 15px;
}
.ivu-page{
	position: relative;
}
.add-content{
	padding: 10px;
}
</style>