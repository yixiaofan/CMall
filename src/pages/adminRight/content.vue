<template lang="html">
	<div class="content">
		<Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                Left Pane
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
            ]
        }
   	},
   	components:{
		AdminTable
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