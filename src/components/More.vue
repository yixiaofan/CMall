<template lang="html">
	<div class="c-panel-hd">
		<i class="hd"></i>{{title}}
		<a href="#" class="fr more-tips">更多<i class="iconfont">&#xe763;</i></a>
	</div>
</template>

<script>
export default {
	name:"more",
	props:{
		title:{
			type:String,
			default:""
		}
	}
}
</script>

<style scoped lang="css">
.various .c-panel {
    margin-bottom: 10px;
}
.various .c-panel-default > .c-panel-hd {
	color: #444;
    padding: 5px;
    border-color: #ddd;
    position: relative;
}
.various .c-panel-default > .c-panel-hd .hd {
    border-left: 3px solid #ed636d;
    margin-right: 5px;
}
.various .c-panel .more-tips {
    color: #666;
    padding-right: 13px;
}
.various .c-panel .more-tips i{
	position: absolute;
	top: 15%;
	color: #444;
	font-size: 12px;
}
</style>