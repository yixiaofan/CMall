<template lang="html">
	<div class="paramList">
		<AdminTable @openModal1="openModal1" title="规格参数" :body="pBody" :columns="pColumns" :tableData="pTableData"></AdminTable>
		<Modal v-model="modal1" :closable="false" @on-ok="ok">
	       	<div class="add-content">
				<div class="form-group">
				    <label for="selectClass" class="control-label" style="margin-right: 10px;">商品类目</label>
				    <Button id="selectClass" type="info" @click="modal2=true">选择类目</Button>
				</div>
	       	</div>
    	</Modal>
    	<Modal title="选择类目" v-model="modal2" @on-ok="ok">
    		<Tree :data="data1" :render="renderContent"></Tree>
    		<div slot="footer"></div>
    	</Modal>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"

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
	components:{
		AdminTable
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
		ok () {
            this.$Message.info('Clicked ok');
       	},
       	openModal1(){
       		this.modal1=true;
       	}
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