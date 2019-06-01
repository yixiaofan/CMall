<template lang="html">
	<div class="adminAdd">
		<div class="form-horizontal" v-for="item in items">
			<div class="form-group" v-if="item.type=='button'">
			    <label :for="item.id" class="control-label col-xs-1">{{item.label}}</label>
			    <button class="btn btn-sm btn-info" :id="item.id" @click="childMethod(item.method)">{{item.text}}</button>
			    <label v-if="item.select">{{$store.state.select_class}}</label>
				<div v-if="item.img" style="margin-top: 5px;overflow: hidden;">
					<div class="col-xs-1"></div>
				    <div class="col-xs-11" style="overflow: hidden;" v-if="$store.state.img_status=='finished'">
				    	<img v-for="file in $store.state.img_upload_cache" style="width: 80px;height: 80px;margin-right: 5px;" :src="file.src" />
				    </div>
				</div>
			</div>
			<div class="form-group" v-else-if="item.type=='param'">
			    <label :for="item.id" class="control-label col-xs-1">{{item.label}}</label>
			    <div :id="item.id" class="col-xs-7 input-group myparam">
			    	<button class="btn btn-sm btn-info" @click="addBigClass">添加分组</button>
					<div class="add-class">
						<div class="big-class" v-for="(items,index1) in data" :key='index1'>
							<Input  size="small" style="width: 150px;margin: 3px 0px;" />
							<i class="glyphicon glyphicon-plus" @click="addSmallClass(index1)"></i>
							<i class="glyphicon glyphicon-remove" @click="remove($event,-1)"></i>
							<div class="small-class" v-for="(item,index2) in items" :key='index2'>
								<span>|-------</span>
								<Input :value="value" size="small" style="width: 150px;margin: 3px 0px;" />
								<i class="glyphicon glyphicon-remove" @click="remove($event,index2)"></i>
							</div>
						</div>
					</div>
			    </div>
			</div>
			<div class="form-group" v-else-if="item.type=='text'">
			    <label :for="item.id" class="control-label col-xs-1">{{item.label}}</label>
			    <div class="col-xs-7 input-group">
			    	<input type="text" class="form-control data" :id="item.id">
			    </div>
			</div>
			<div class="form-group" v-else-if="item.type=='number'">
			    <label :for="item.id" class="control-label col-xs-1">{{item.label}}</label>
			    <div class="col-xs-7 input-group">
			    	<input type="number" class="form-control data" :id="item.id">
			    </div>
			</div>
			<div class="form-group" v-else-if="item.type=='textarea'">
			    <label :for="item.id" class="control-label col-xs-1 sellpoint">{{item.label}}</label>
			    <div class="col-xs-7">
			    	<textarea class="form-control" rows="3" :id="item.id"></textarea>
			    </div>
			</div>
			<div class="form-group" v-else-if="item.type=='quillEditor'">
			    <label :for="item.id" class="control-label col-xs-1 goodsDes">{{item.label}}</label>
			    <div :id="item.id" class="edit_container col-xs-9">
			        <quill-editor
			        	ref="myquillEditor"
			            v-model="content" 
			            :options="editorOption">
			        </quill-editor>
			    </div>
			    <form id="upload" class="hidden" enctype="multipart/form-data" method="post">     <!--用来上传图片-->
			      	<input type="file" name="image" id="selectImg" accept="image/gif, image/jpeg, image/png" @change="inputChangeImg" multiple/>
			      	<input type="button" value="提交"/>
			    </form>
			</div>
			<div class="form-group" v-else-if="item.type=='jsonData'&& $store.state.select_class_data.length!=0">
			    <label :for="item.id" class="control-label col-xs-1" style="padding: 0px;">{{item.label}}</label>
			    <div :id="item.id" class="col-xs-7 myparams">
			    	<div v-for="data in $store.state.select_class_data" style="font-weight: bold;">
			    		<span style="text-align: center;background: #B3D4FC;width: 220px;display: inline-block;">{{data.group}}</span>
			    		<div v-for="d in data.params">
			    			<label style="width: 65px;text-align: right;margin-right: 2px;">{{d}}</label>
			    			<Input size="small" style="width: 150px;" />
			    		</div>
			    	</div>
			    </div>
			</div>
			<div class="form-group form" v-else-if="item.type=='submit'">
				<Button type="primary" size="large" @click="childMethod(item.method)">提交</Button>
				<Button size="large" @click="reset">重置</Button>
			</div>
		</div>
	</div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
	data(){
		const toolbarOptions = [
		    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		    ['blockquote', 'code-block'],
		 
		    [{'header': 1}, {'header': 2}],               // custom button values
		    [{'list': 'ordered'}, {'list': 'bullet'}],
		    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
		    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
		    [{'direction': 'rtl'}],                         // text direction
		 
		    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
		    [{'header': [1, 2, 3, 4, 5, 6, false]}],
		 
		    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
		    [{'font': []}],
		    [{'align': []}],
		    ['link', 'image', 'video'],
		    ['clean']                                         // remove formatting button
		];
		return{
			content:null,
            editorOption: {
		        modules: {
		            toolbar: {
		                container: toolbarOptions,  // 工具栏
		                handlers: {
		                    'image': function (value) {
								if (value) {
		                            document.getElementById("selectImg").click();
		                        } else {
		                            this.quill.format('image', false);
		                        }
		                    }
		                }
		            }
		        }
		    },
            data:[],
			value:''
		}
	},
	components:{
		quillEditor
	},
	props:{
		items:{
			type:Array,
			default:[]
		}
	},
	computed: {
      editor () {
      	let myitems=this.items;
      	for(let i in myitems){
      		if(myitems[i].type=="quillEditor"){
      			return this.$refs.myquillEditor[0].quill;
      		}
      	}
      }
    },
	methods:{
        childMethod(method){
        	//console.log(method);
        	this.$emit(method);
        },
        addBigClass(){
			this.data.push([[]]);
		},
		addSmallClass(index){
			//console.log(index);
			this.data[index].push([]);
		},
		remove(event,index){
			let el=$(event.currentTarget);
			if(index!=-1&&el.parent().parent().children("div.small-class").length==1){
				el.parent().parent().remove();
			}else{
				el.parent().remove();
			}
		},
		reset(){
			this.$store.commit('set_select_class',"");
			this.$store.commit('set_img_status','ready');
			this.$store.commit('set_img_upload_cache',[]);
    		this.$store.commit('set_img_paths',[]);
    		$('input.data').each(function () {
				this.value="";
			});
			$("textarea").val("");
			$(".myparams").find("input[type='text']").each(function () {
				this.value="";
			});
			this.content=null;
		},
		handleSuccess (url) {
		    let quill = this.$refs.myquillEditor[0].quill;
		    // 获取光标所在位置
		    let length = quill.getSelection().index;
		    // 插入图片 
		    quill.insertEmbed(length, 'image', url);
		    // 调整光标到最后
		    quill.setSelection(length + 1);
	   	},
	    inputChangeImg() { // input 选择图片时的操作
			let that=this;
	        let input = document.getElementById('selectImg');
	        if (input.files && input.files[0]) {
	          	let formData = new FormData();
	          	for(let i=0;i<input.files.length;i++){
	        		let item = input.files[i];
	        		formData.append("uploadFile",item,item.name);
	        	}
	          	this.$axios({
				    method: 'post',
				    url:"http://47.100.242.105:8089/pic/upload",
					data:formData
				}).then((res)=>{
					console.log(res);
					let url=res.data.url;
					let urls=url.split(",");
					for(let i=0;i<urls.length;i++){
						console.log(urls[i]);
						that.handleSuccess(urls[i]);
					}	
				})
				.catch(error => {
			        console.log(error);
			    })
	        }
	    }
  	},
	mounted(){
		let myitems=this.items;
		for(let i in myitems){
      		if(myitems[i].type=="quillEditor"){
      			this.editor.container.style.height = '150px';
      			break;
      		}
      	}
	}
}
</script>

<style scoped lang="css">
.form-group{
	overflow: hidden;
}
.form-horizontal .form-group {
     margin-right: 0px; 
     margin-left: 0px; 
}
.form-horizontal .control-label{
	text-align: left;
}
.sellpoint{
	padding-top: 27px;
}
.goodsDes{
	padding-top: 98px;
}
.myparam i{
	color: red;
	margin-left: 5px;
	cursor: pointer;
}
.myparam span{
	-webkit-user-select: none;
}
.form{
	overflow: hidden;
	padding-right: 100px;
}
.form button{
	float: right;
	margin: 0px 10px;
}
</style>