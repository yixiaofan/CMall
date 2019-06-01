<template lang="html">
	<div class="searchGoods">
		<AdminTable method="changeTable" 
			ref="mychild"
			@changeTable="changeTable" 
			@changeStatus="changeStatus" 
			@addGoods="addGoods"
			:total="total" title="查询商品" 
			:loading="loading" 
			:body="pBody" 
			:columns="pColumns" 
			:tableData="pTableData">
		</AdminTable>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"
import {formatDate} from '../../../static/js/date.js';
	
export default {
	data(){
		return{
			pBody:[{css:"glyphicon glyphicon-plus",text:"新增",method:"addGoods"},
			{css:"glyphicon glyphicon-remove",text:"删除",method:"changeStatus",param:"3"},
			{css:"glyphicon glyphicon-minus",text:"下架",method:"changeStatus",param:"2"},
			{css:"glyphicon glyphicon-minus",text:"上架",method:"changeStatus",param:"1"}],
			pColumns: [
                {
                    type: 'selection',
                    width: 50,
                    align: 'center'
                },
                {
                    title: '商品ID',
                    key: 'id',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '商品标题',
                    key: 'title',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '叶子类目',
                    key: 'cid',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '卖点',
                    key: 'sellPoint',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '价格',
                    key: 'price',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '库存数量',
                    key: 'num',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '条形码',
                    key: 'barcode',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '状态',
                    key: 'status',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '创建日期',
                    key: 'created',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '更新日期',
                    key: 'updated',
                    tooltip: true,
                    align: 'center'
                }
            ],
            pTableData: [],
            loading: true,
            params:{
            	page: 1,
            	rows: 10
			},
			total:0
		}
	},
	components:{
		AdminTable
	},
	methods:{
		getData(page,rows){
			let that=this;
			that.loading=true;
			const postUrl = "http://47.100.242.105:8089/item/list?page="+page+"&rows="+rows;
		    this.$axios.post(postUrl)
		      .then(res => {
		      	//console.log(res.data);
		      	let newData=eval(res.data.substring(4));
		      	//console.log(newData);
		      	for(let i in newData.rows){
		      		let time=newData.rows[i].created;
		      		let date=new Date(time);
		      		newData.rows[i].created=formatDate(date, 'yyyy-MM-dd hh:mm:ss');
		      		time=newData.rows[i].updated;
		      		date=new Date(time);
		      		newData.rows[i].updated=formatDate(date, 'yyyy-MM-dd hh:mm:ss');
		      		if(newData.rows[i].status==1){
		      			newData.rows[i].status="正常";
		      		}else if(newData.rows[i].status==2){
		      			newData.rows[i].status="下架";
		      		}else if(newData.rows[i].status==3){
		      			newData.rows[i].status="已删除";
		      		}
		      	}
		      	that.pTableData=newData.rows;
		      	that.loading=false;
		      	that.total=newData.total;
		      	//console.log(newData.rows);
		      })
		      .catch(error => {
		        console.log(error);
		      })
		},
		changeTable(obj){
			//console.log("parent");
			//清空复选框状态
			this.$refs.mychild.ids = [];
			this.params=obj;
			this.getData(this.params.page,this.params.rows);
		},
		changeStatus(param,ids){
			let pTableData=this.pTableData;
			let myids=ids;
			myids=myids.join(",");
			//清空复选框状态
			this.$refs.mychild.ids = [];
			console.log(myids);
			if(myids.length==0){
				this.$Modal.error({
                    title: "提示",
                    content: "未选中商品"
               	});
			}else{
				let str="";
				if(param=="1"){
					str="rest/item/reshelf"
				}else if(param=="2"){
					str="rest/item/instock"
				}else if(param=="3"){
					str="rest/item/delete"
				}
				this.$axios({
				    method: 'get',
				    url:"http://47.100.242.105:8089/"+str,
				    params: {
				        "ids":myids
				    }
				}).then((res)=>{
					//console.log(res);
					if(res.data.status==200){
						for(let i in pTableData){
							if(myids.indexOf(pTableData[i].id)!=-1){
								if(param=="1"){
									pTableData[i].status="正常";
								}else if(param=="2"){
									pTableData[i].status="下架";
								}else if(param=="3"){
									pTableData[i].status="被删除";
								}
							}
						}
						this.pTableData=pTableData;
					}
				})
				.catch(error => {
			        console.log(error);
			    })
			}
		},
		addGoods(){
			this.$parent.component="AddGoods";
		}
	},
	mounted(){
		this.getData(this.params.page,this.params.rows);
	}
}
</script>

<style scoped lang="css">

</style>