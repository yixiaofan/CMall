<template lang="html">
	<div class="addParam">
		<Button type="info" @click="addBigClass">添加分组</Button>
		<div class="add-class">
			<div class="big-class" v-for="(items,index1) in data" :key='index1'>
				<Input  size="small" style="width: 150px;margin: 3px 0px;" />
				<i class="glyphicon glyphicon-plus" @click="addSmallClass(index1)"></i>
				<i class="glyphicon glyphicon-remove" @click="remove($event)"></i>
				<div class="small-class" v-for="(item,index2) in items" :key='index2'>
					<span>|-------</span>
					<Input size="small" style="width: 150px;margin: 3px 0px;" />
					<i class="glyphicon glyphicon-remove" @click="remove($event)"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			data:[]
		}
	},
	methods:{
		addBigClass(){
			this.data.push([])
		},
		addSmallClass(index){
			this.data[index].push([]);
		},
		remove(event){
			let el=$(event.currentTarget);
			el.parent().remove();

		}
	}
}
</script>

<style lang="css">
</style>