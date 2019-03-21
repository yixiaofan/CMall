<template lang="html">
	<div class="paramList">
		<AdminTable ref="table" title="规格参数" :body="pBody" :ths="pThs">
			<tr>
				<td><input type="checkbox" id="td1"/></td><td>dd</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td>
			</tr>
			<tr>
				<td><input type="checkbox" id="td1"/></td><td>sdfsd</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td>
			</tr>
		</AdminTable>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"

export default {
	data(){
		return{
			pBody:[{css:"glyphicon glyphicon-plus",text:"新增",func:()=>{this.$refs.table.changeModal()}},
			{css:"glyphicon glyphicon-pencil",text:"编辑",func:function(){alert("222");}},
			{css:"glyphicon glyphicon-remove",text:"删除",func:function(){alert("333");}}],
			pThs:["ID","商品类目ID","商品类目","规格(只显示分组名称)","创建日期","更新日期"]
		}
	},
	components:{
		AdminTable
	},
	methods:{
		
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