<template lang="html">
	<div class="modal fade bs-example-modal-sm" id="goodsPicPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
		    <div class="modal-content">
			    <div class="modal-header">
			    	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			    	<h4 class="modal-title">批量图片上传</h4>
			    </div>
			    <div class="modal-body">
			    	<div>
					    <uploader url="http://cn.ynhdkc.com/admin/uploadapiv2/uploadpics"></uploader>
					    <div class="btn-upload" @click="upload">上传</div>
					</div>
			    </div>
		    </div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data(){
		return{
			imgs: []
		}
	},
	computed: {
	    ...mapState({
	      imgStatus: state => state.imgstore.img_status,
	      imgPaths: state => state.imgstore.img_paths
	    })
	},
	methods:{
		upload () {
	      	this.$store.commit('set_img_status', 'uploading')
	    },
	    submit () {
	      	let values = []
	      	for (let key of this.imgPaths) {
	        	values.push(key)
	      	}
	      	this.imgs = values
	      	console.log(this.imgs)
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
.modal-dialog{
	margin-top: calc(50vh - 190px);
	margin-bottom: 0px;
}
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