<template lang="html">
	<!-- 登录页面 start -->
	<div class="login">
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
				    			<label for="inputUserName">用户名</label>
				    			<input type="text" class="form-control" id="inputUserName" placeholder="用户名">
				    		</div>
				    		<div class="form-group">
				    			<label for="inputPassword">密码</label>
				    			<input type="password" class="form-control" id="inputPassword" placeholder="密码">
				    		</div>
				    		<input @click="userLogin" type="submit" class="btn btn-primary login" value="登录" />
				    	</div>
				    	<div class="login-links">
				    		<a href="#">忘记密码</a>
				    		<a href="javascript:void(0);" data-toggle="modal" data-target="#registerPage">免费注册</a>
				    	</div>
				    </div>
			    </div>
			</div>
		</div>
		<div class="modal fade bs-example-modal-sm" id="registerPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog modal-sm" role="document">
			    <div class="modal-content">
				    <div class="modal-header">
				    	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				    	<h4 class="modal-title">会员注册</h4>
				    </div>
				    <div class="modal-body">
				    	<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
					        <FormItem label="用户名" prop="username">
					            <Input v-model.trim="formValidate.username" placeholder="用户名"></Input>
					        </FormItem>
					        <FormItem label="邮箱" prop="email">
					            <Input v-model.trim="formValidate.email" placeholder="邮箱"></Input>
					        </FormItem>
					        <FormItem label="手机号码" prop="phone">
					            <Input v-model.trim="formValidate.phone" placeholder="手机号码"></Input>
					        </FormItem>
					        <FormItem label="密码" prop="passwd">
					            <Input type="password" v-model.trim="formValidate.passwd" placeholder="密码"></Input>
					        </FormItem>
					        <FormItem label="确认密码" prop="passwdCheck">
					            <Input type="password" v-model.trim="formValidate.passwdCheck" placeholder="确认密码"></Input>
					        </FormItem>
					        <FormItem>
					            <Button type="primary" @click="handleSubmit('formValidate')">确认</Button>
					            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
					        </FormItem>
					    </Form>
				    </div>
			    </div>
			</div>
		</div>
	</div>
	<!-- 登录页面 end -->
</template>

<script>
export default {
	data () {
		const validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('手机号码不能为空'));
            } else {
                let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
	            if (!myreg.test(value)) {
	                callback(new Error('错误的手机号码格式'));
	            } else {
	                callback();
	            }
            }
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请填写您的密码!'));
            } else {
                if (this.formValidate.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formValidate.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次填写您的密码!'));
            } else if (value !== this.formValidate.passwd) {
                callback(new Error('两次填写的密码不匹配!'));
            } else {
                callback();
            }
        };
        
        return {
            formValidate: {
                username: '',
                phone: '',
                email: '',
                passwd: '',
                passwdCheck: '' 
           	},
           	ruleValidate: {
	            username: [
	                { required: true, message: '用户名不能为空', trigger: 'blur' }
	            ],
	            phone: [
                    { required: true, validator: validatePhone, trigger: 'blur' }
                ],
	            email: [
	                { required: true, message: '电子邮箱不能为空', trigger: 'blur' },
	                { type: 'email', message: '错误的邮箱格式', trigger: 'blur' }
	            ],
	            passwd: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { required: true, validator: validatePassCheck, trigger: 'blur' }
                ]
	       	}
        }
    },
	methods:{
		userLogin(){
			const postUrl = "http://47.100.242.105:8084/user/login?username="+$("#inputUserName").val()+"&password="+$("#inputPassword").val();
		    this.$axios.post(postUrl)
		      .then(res => {
		        console.log(res);
		        if(res.data.status==200){
		        	$("#loginPage").modal('hide');
		        	this.$cookie.set("TT_TOKEN", res.data.data.password,60*60*24*7);
		        	this.$store.commit('set_userInfo',res.data.data);
		        	const url = "http://47.100.242.105:8088/login?username="+res.data.data.id;
				    this.$axios.post(url)
				      .then(res => {
				        console.log(res);
				      })
				      .catch(error => {
				        console.log(error);
				      })
		        }else{
		        	this.$Message.warning(res.data.msg);
		        }
		      })
		      .catch(error => {
		        console.log(error);
		      })
		},
		handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let user={};
					user.username=this.formValidate.username;
					user.password=this.formValidate.passwd;
					user.phone=this.formValidate.phone;
					user.email=this.formValidate.email;
					user=JSON.stringify(user);
					//console.log(info);
				    this.$axios({
					    method: 'post',
					    url:"http://47.100.242.105:8084/user/register",
					    headers: {'Content-Type': 'application/json'},
					    data:user
					}).then(res => {
				        //console.log(res);
				        if(res.data.status==200){
				        	$('#registerPage').modal('hide');
				        	this.$Message.success('注册成功');
				        }else{
				        	this.$Message.error('用户名、邮箱或手机号码重复！');
				        }
				    })
				    .catch(error => {
				        console.log(error);
				        this.$Message.error('服务器异常！');
				    });
                } else {
                    this.$Message.error('注册信息错误！');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
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