<template lang="html">
	<!-- 登录页面 start -->
	<div class="modal fade bs-example-modal-sm" id="loginPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog modal-sm" role="document">
		    <div class="modal-content">
			    <div class="modal-header">
			    	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			    	<h4 class="modal-title">密码登录</h4>
			    </div>
			    <div class="modal-body">
			    	<div>
			    		<div class="form-group">
			    			<label for="inputEmail">手机/邮箱</label>
			    			<input type="email" class="form-control" id="inputEmail" placeholder="手机/邮箱">
			    		</div>
			    		<div class="form-group">
			    			<label for="inputPassword">密码</label>
			    			<input type="password" class="form-control" id="inputPassword" placeholder="密码">
			    		</div>
			    		<input @click="userLogin" type="submit" class="btn btn-primary login" value="登录" />
			    	</div>
			    	<div class="login-links">
			    		<a href="#">忘记密码</a>
			    		<a href="#">免费注册</a>
			    	</div>
			    </div>
		    </div>
		</div>
	</div>
	<!-- 登录页面 end -->
</template>

<script>
export default {
	methods:{
		userLogin(){
			const postUrl = "/cmall_login_api/user/login?username="+$("#inputEmail").val()+"&password="+$("#inputPassword").val();
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        if(res.data.status==200){
		        	$("#loginPage").modal('hide');
		        	this.$store.commit('set_userInfo',res.data.data);
		        }else{
		        	$("#inputEmail").val(res.data.msg);
		        }
		      })
		      .catch(error => {
		        console.log(error);
		      })
		}
	}
}
</script>

<style scoped lang="css">
.modal-title{
	font-weight: bold;
	margin: 0px 30px;
	text-align: center;
	font-size: 18px;
}
.close{
	line-height: 25px;
}
.modal-header{
	padding: 5px 15px;
}
.login{
	width: 100%;
}
.login-links {
    margin-top: 10px;
    overflow: hidden;
    text-align: right;
}
.login-links a {
    margin-right: 10px;
    color: #6c6c6c;
}
.login-links a:hover {
    color: red;
}
.modal-sm{
	width: 400px;
	margin-top: calc(50vh - 190px);
	margin-bottom: 0px;
}
</style>