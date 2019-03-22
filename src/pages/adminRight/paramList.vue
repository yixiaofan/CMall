<template lang="html">
	<div class="paramList">
		<AdminTable @openModal1="openModal1" title="规格参数" :body="pBody" :columns="pColumns" :tableData="pTableData"></AdminTable>
		<Modal v-model="modal1" :closable="false" width="700" @on-ok="ok">
	       	<AdminAdd @openModal2="openModal2" :items="items" />
    	</Modal>
    	<Modal title="选择类目" v-model="modal2" @on-ok="ok">
    		<Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
	       	<div slot="footer"></div>
    	</Modal>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"
import AdminAdd from "../../components/Admin_add"

export default {
	data(){
		return{
			modal1: false,
			modal2: false,
			pBody:[{css:"glyphicon glyphicon-plus",text:"新增",method:"openModal1"},
			{css:"glyphicon glyphicon-pencil",text:"编辑",method:""},
			{css:"glyphicon glyphicon-remove",text:"删除",method:""}],
			pColumns: [
                {
                    type: 'selection',
                    width: 50,
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name',
                    tooltip: true,
                },
                {
                    title: 'Age',
                    key: 'age',
                    tooltip: true,
                },
                {
                    title: 'Address',
                    key: 'address',
                    tooltip: true,
                }
            ],
            pTableData: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
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
            ],
            items:[
	            {
	            	type:"button",
	            	id:"selectClass",
	            	label:"商品类目",
	            	text:"选择类目",
	            	method:"openModal2",
					select:true,
					img:false
	            },
	            {
	            	type:"param",
	            	id:"paramList",
	            	label:"规格参数"
	            }
            ]
		}
	},
	components:{
		AdminTable,
		AdminAdd
	},
	methods:{
		renderContent (h, { root, node, data }) {
       		let myfunc=this.openModal2;
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
        },
		ok () {
            this.$Message.info('Clicked ok');
       	},
       	openModal1(){
        	this.modal1=!this.modal1;
        },
        openModal2(){
        	this.modal2=!this.modal2;
        },
	},
	mounted(){
//		const postUrl = "/cmall_item_api/item?id="+itemId;
//	    this.$axios.post(postUrl)
//	      .then(res => {
//	      	let newData=eval(res.data.substring(4));
//	      	that.item=newData;
//	      	that.pic=that.item.images[0];
//	        console.log(newData);
//	      })
//	      .catch(error => {
//	        console.log(error);
//	      })
	}
}
</script>

<style lang="css">
</style>