<template lang="html">
	<nav>
	    <ul class="pagination">
	      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)">
	      	<i class="glyphicon glyphicon-step-backward"></i>
	      </a></li>
	      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)">
	      	<i class="glyphicon glyphicon-chevron-left"></i>
	      </a></li>
	      <li><input class="jump" type="text" :value="current" @keyup.enter="setCurrent(current)" size="1" /></li>
	      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)">
	      	<i class="glyphicon glyphicon-chevron-right"></i>
	      </a></li>
	      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)">
	      	<i class="glyphicon glyphicon-step-forward"></i>
	      </a></li>
	    </ul>
	    <label class="fr">共{{page}}页</label>
	</nav>
</template>

<script>
export default {
	data(){
		return{
			current:1,
			page:1
		}
	},
	methods:{
		setCurrent(page){
			this.$store.commit('setPage_current',page);
			this.current=this.$store.state.page_current;
		}
	},
	mounted(){
		//this.current=this.$store.state.page_current;
		//this.page=this.$store.state.page_totalpage;
	}
}
</script>

<style scoped lang="css">
.pagination{
	margin: 0px;
	vertical-align: middle;
}
.jump{
	position: relative;
    float: left;
    padding: 6px 6px;
    margin-left: -1px;
    line-height: 1.42857143;
    border: 1px solid #ddd;
    background: #fff;
    text-align:center;
}
label{
	vertical-align: middle;
	padding: 6px 12px;
}
</style>