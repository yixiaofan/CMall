<template lang="html">
	<div class="addGoods">
		<AdminAdd @openModal1="openModal1" @openModal2="openModal2" :items="items" />
		<Modal title="选择类目" v-model="modal1" @on-ok="ok">
	       	<Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
	       	<div slot="footer"></div>
    	</Modal>
		<Modal title="批量图片上传" v-model="modal2" @on-ok="ok">
	       	<GoodsPic :fatherMethod="openModal2"/>
	       	<div slot="footer"></div>
    	</Modal>
	</div>
</template>

<script>
import AdminAdd from "../../components/Admin_add"
import GoodsPic from "../../components/Goods_pic"

export default {
	data(){
		return{
			modal1: false,
			modal2: false,
            items:[
	            {
	            	type:"button",
	            	id:"selectClass",
	            	label:"商品类目",
	            	text:"选择类目",
	            	method:"openModal1",
					select:true,
					img:false
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
	            	method:"openModal2",
	            	select:false,
	            	img:true
	            },
	            {
	            	type:"quillEditor",
	            	id:"goodsDescribe",
	            	label:"商品描述"
	            },
	            {
	            	type:"jsonData",
	            	id:"goodsParam",
	            	label:"商品规格"
	            },
	            {
	            	type:"submit"
	            }
            ],
            data5: [
                {
                    title: 'parent 1',
                    expand: false,
                    loading: false,
                    children: [
                        {
                            title: 'child 1-1',
                            expand: false,
                            loading: false,
                            children: [
                                {
                                    title: 'leaf 1-1-1',
                                    loading: false,
                                    children: [],
                                    expand: false
                                },
                                {
                                    title: 'leaf 1-1-2',
                                    expand: false
                                }
                            ]
                        },
                        {
                            title: 'child 1-2',
                            loading: false,
                            expand: false,
                            children: [
                                {
                                    title: 'leaf 1-2-1',
                                    expand: false
                                },
                                {
                                    title: 'leaf 1-2-1',
                                    loading: false,
                                    children: [],
                                    expand: false
                                }
                            ]
                        }
                    ]
                }
            ]
		}
	},
	components:{
		AdminAdd,
		GoodsPic
	},
	methods:{
        openModal1(){
        	this.modal1=!this.modal1;
        },
        openModal2(){
        	this.modal2=!this.modal2;
        },
        ok () {
            this.$Message.info('Clicked ok');
       	},
       	renderContent (h, { root, node, data }) {
       		let myfunc=this.openModal1;
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('MySpan', {
                	props: {
                        myroot: root,
                		mynode: node,
                        mydata: data,
                        fatherMethod:myfunc,
                        rightMenu:false
                    }
                })
            ]);
        },
        loadData (item, callback) {
        	//console.log(item);
            setTimeout(() => {
                const data = [
                    {
                        title: '11111',
                        loading: false,
                        expand: false,
                        children: []
                    },
                    {
                        title: '22222',
                        expand: false,
                    }
                ];
                callback(data);
            }, 1000);
        }
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