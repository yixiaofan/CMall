<template lang="html">
	<div class="content">
		<Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                <Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
            </div>
            <div slot="right" class="demo-split-pane">
                <AdminTable ref="table" title="" :body="pBody" :columns="pColumns" :tableData="pTableData"></AdminTable>
            </div>
        </Split>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"

export default {
	data () {
        return {
            split1: 0.2,
            pBody:[{css:"glyphicon glyphicon-plus",text:"新增",func:()=>{this.$refs.table.changeModal()}},
			{css:"glyphicon glyphicon-pencil",text:"编辑",func:function(){alert("222");}},
			{css:"glyphicon glyphicon-remove",text:"删除",func:function(){alert("333");}}],
			pColumns: [
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
            ]
        }
   	},
   	components:{
		AdminTable
	},
	methods:{
		myfunc(){
			alert("我的方法");
		},
       	renderContent (h, { root, node, data }) {
       		let myfunc=this.myfunc;
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
  	}
}
</script>

<style scoped lang="css">
.content{
    height: 500px;
    border: 1px solid #dcdee2;
}
.demo-split-pane{
    padding: 10px;
}
</style>