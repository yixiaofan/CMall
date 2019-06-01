<template lang="html">
	<div>
	    <uploader ref="uploader" @uploadMethod="uploadMethod" method="uploadMethod" url="http://127.0.0.1:80/pic/upload"></uploader>
	    <div class="btn-upload" @click="upload">上传</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import qs from 'qs'

export default {
	data(){
		return{
			imgs: []
		}
	},
	props:{
		fatherMethod:{
	        type: Function,
	        default: null
	   	},
	   	mypath:{
	   		type: String,
	   		default: ""
	   	}
	},
	computed: {
	    ...mapState({
	      imgStatus: state => state.imgstore.img_status,
	      imgPaths: state => state.imgstore.img_paths,
	      imgStore: state => state.imgstore.img_upload_cache
	    })
	},
	methods:{
		upload () {
	      	this.$store.commit('set_img_status', 'uploading');
	    },
	    submit () {
	      	if (this.fatherMethod) {
	          	this.fatherMethod();
	        }
	    },
	    uploadMethod(){
	    	let formData = new FormData();
	    	//console.log(this.imgStore);
	    	this.imgStore.forEach((item, index) => {
	    		if(this.mypath==""||index<2){
	    			//console.log(item.file);
	    			formData.append("uploadFile",item.file,item.name);
	    		}
	    		//console.log(formData);
		    })
	    	//let mydata=qs.stringify(formData);
	    	let mydata=formData;
	    	//console.log(mydata.get("uploadFile"));
//	    	const instance=this.$axios.create({
//		      	
//		    })
//		    instance.post('/cmall_manage_api/pic/upload', mydata)
//		    .then((res)=>{
//		      	console.log(res);
//		    })

	    	this.$axios({
			    method: 'post',
			    url:"http://47.100.242.105:8089/pic/upload",
			    //headers: {'Content-Type': 'multipart/form-data'},
//			    params: {
//			        "uploadFile":mydata
//			    }
				data:mydata
			}).then((res)=>{
				console.log(res);
				if(res.data.error==0){
					this.$store.commit('set_img_paths', res.data.url);
				}
				this.$refs.uploader.files=[];
				this.$refs.uploader.index=0;
				this.$store.commit('set_img_status', 'finished');
			})
			.catch(error => {
		        console.log(error);
		    })
	    }
	},
	watch: {
	    imgStatus () {
	      	if (this.imgStatus === 'finished') {
	        	this.submit()
	      	}
	    }
	},
	destoryed () {
	    this.imgs = []
	}
}
</script>

<style scoped lang="css">
.btn-upload{
	width: 100%;
  	height: 3em;
  	background-color: green;
  	color: #fff;
  	display: flex;
  	justify-content: center;
  	align-items: center;
}
</style>