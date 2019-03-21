<template lang="html">
	<div class="searchGoods">
		<AdminTable title="查询商品" :body="pBody" :ths="pThs">
			<tr>
				<td><input type="checkbox" id="td1"/></td><td>2011</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td>
			</tr>
			<tr>
				<td><input type="checkbox" id="td1"/></td><td>2012</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td><td>200</td>
			</tr>
		</AdminTable>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"
	
export default {
	data(){
		return{
			pBody:[{css:"glyphicon glyphicon-plus",text:"新增"},
			{css:"glyphicon glyphicon-pencil",text:"编辑"},
			{css:"glyphicon glyphicon-remove",text:"删除"},
			{css:"glyphicon glyphicon-minus",text:"下架"},
			{css:"glyphicon glyphicon-minus",text:"上架"}],
			pThs:["商品ID","商品标题","叶子类目","卖点","价格","库存数量","状态","创建日期","更新日期"]
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

<style scoped lang="css">

</style>