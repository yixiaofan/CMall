<template lang="html">
	<div class="adminAdd">
		<div class="form-horizontal" v-for="item in items">
			<div class="form-group" v-if="item.type=='button'">
			    <label :for="item.id" class="control-label col-xs-1">{{item.label}}</label>
			    <button class="btn btn-sm" :id="item.id" @click="childMethod(item.method)">{{item.text}}</button>
			    <label v-if="item.select">{{$store.state.select_class}}</label>
			</div>
			<div class="form-group" v-else-if="item.type=='input'">
			    <label :for="item.id" class="control-label col-xs-1">{{item.label}}</label>
			    <div class="col-xs-7 input-group">
			    	<input type="text" class="form-control" :id="item.id">
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
			            :options="editorOption" 
			            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
			            @change="onEditorChange($event)">
			        </quill-editor>
			    </div>
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
		return{
			content:null,
            editorOption:{}
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
        return this.$refs.myquillEditor[0].quill;
      }
    },
	methods:{
        onEditorBlur(){//失去焦点事件
        },
        onEditorFocus(){//获得焦点事件
        },
        onEditorChange(){//内容改变事件
        },
        childMethod(method){
        	this.$emit(method);
        }
  	},
	mounted(){
		this.editor.container.style.height = '150px';
//		const postUrl = "/cmall_item_api/item?id="+itemId;
//	    this.$axios.post(postUrl)
//	      .then(res => {
//	      	let newData=eval(res.data.substring(4));
//	      	that.item=newData;
//	      	that.pic=that.item.images[0];
//	        console.log(newData);
//	      })
//	      .catch(error => {
//	        console.log(error);
//	      })
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
</style>