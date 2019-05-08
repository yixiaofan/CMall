<template lang="html">
	<div class="saveinfo">
		<div class="user-content-body">
			<legend>
				<span class="legend-title">个人资料</span>
				<router-link class="fr" to="/center/personal/index">返回</router-link>
			</legend>
			<Form ref="formValidate" :model="formTop" :rules="ruleValidate" label-position="top">
		        <FormItem label="昵称" prop="username">
		            <Input v-model="formTop.username"></Input>
		        </FormItem>
		        <FormItem label="手机号码" prop="phone">
		            <Input v-model="formTop.phone"></Input>
		        </FormItem>
		        <FormItem label="电子邮箱" prop="email">
		            <Input v-model="formTop.email"></Input>
		        </FormItem>
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
		            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
		        </FormItem>
		    </Form>
		</div>
	</div>
</template>

<script>
export default {
	data(){
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
        
		return{
			formTop: {
                username: this.$store.state.userInfo.username,
                phone: this.$store.state.userInfo.phone,
                email: this.$store.state.userInfo.email
           	},
           	ruleValidate: {
	            username: [
	                { required: true, message: '昵称不能为空', trigger: 'blur' }
	            ],
	            phone: [
                    { required: true, validator: validatePhone, trigger: 'blur' }
                ],
	            email: [
	                { required: true, message: '电子邮箱不能为空', trigger: 'blur' },
	                { type: 'email', message: '错误的邮箱格式', trigger: 'blur' }
	            ]
	       	}
		}
	},
	 methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
				    let _ticket=this.$cookie.get("TT_TOKEN");
				  	if(!_ticket){
				  		return;
				  	}
				    this.$axios({
					    method: 'get',
					    url:"/cmall_login_api/user/update/"+_ticket,
					    params: {
					        "username":this.formTop.username,
					        "phone":this.formTop.phone,
					        "email":this.formTop.email
					    }
					}).then(res => {
			        	console.log(res);
			        	if(res.data.status==200){
			        		this.$Message.success('保存成功!');
			        		let _ticket=this.$cookie.get("TT_TOKEN");
							const postUrl = "/cmall_login_api/user/token/"+_ticket;
						    this.$axios.post(postUrl)
						      .then(res => {
						        console.log(res);
						        this.$store.commit('set_userInfo',res.data.data);
						      })
						      .catch(error => {
						        console.log(error);
						      })
			        		let that=this;
			        		setTimeout(function(){
				            	that.$router.push({path:'/center/personal'});
				            }, 1000);
			        	}
			      	})
			      	.catch(error => {
			        	console.log(error);
			      	})
                } else {
                    this.$Message.error('保存失败!');
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
.saveinfo{
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
    margin-bottom: 20px;
}
.user-content-body .legend-title {
    font-size: 16px;
}
.user-content-body a {
	font-size: 12px;
    color: #e7747f;
}
</style>