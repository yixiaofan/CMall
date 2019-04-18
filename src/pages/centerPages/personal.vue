<template lang="html">
	<div class="personal">
		<div class="user-content-body">
			<legend>
				<span class="legend-title">个人资料</span>
				<router-link class="fr" to="/center/personal/saveinfo">编辑</router-link>
			</legend>
			<div class="dl-content">
				<dt>昵称</dt>
				<dd>{{$store.state.userInfo.username}}</dd>
				<dt>手机号码</dt>
				<dd>{{$store.state.userInfo.phone}}</dd>
				<dt>电子邮箱</dt>
				<dd>{{$store.state.userInfo.email}}</dd>
				<dt>注册时间</dt>
				<dd>{{myformatDate($store.state.userInfo.created)}}</dd>
				<dt>最后更新时间</dt>
				<dd>{{myformatDate($store.state.userInfo.updated)}}</dd>
			</div>
		</div>
	</div>
</template>

<script>
import {formatDate} from '../../../static/js/date.js'

export default {
	methods:{
		myformatDate(time){
			let date=new Date(time);
			return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
		}
	}
}
</script>

<style scoped lang="css">
.personal{
	display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.user-content-body{
	-webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}
.user-content-body legend {
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #e5e5e5;
}
.user-content-body .legend-title {
    font-size: 16px;
}
.user-content-body a {
	font-size: 12px;
    color: #e7747f;
}
.dl-content dt, .dl-content dd {
    font-weight: normal !important;
    text-align: left;
    margin-top: 0px;
    line-height: 36px;
    min-height: 46px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.dl-content dt {
    float: left;
    padding-left: 5px;
    overflow: hidden;
    clear: left;
    width: 120px;
}
.dl-content dd {
    border-bottom: 1px solid #efefef;
    padding-left: 120px;
}
</style>