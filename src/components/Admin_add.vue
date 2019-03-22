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
			<div class="form-group" v-else-if="item.type=='jsonData'&&$store.state.select_class_data!=[]">
			    <label :for="item.id" class="control-label col-xs-1" style="padding: 0px;">{{item.label}}</label>
			    <div :id="item.id" class="col-xs-7">
			    	<div v-for="data in $store.state.select_class_data" style="font-weight: bold;">
			    		<span style="text-align: center;background: #B3D4FC;width: 220px;display: inline-block;">{{data.group}}</span>
			    		<div v-for="d in data.params">
			    			<label style="width: 65px;text-align: right;margin-right: 2px;">{{d}}</label>
			    			<Input  size="small" style="width: 150px;" />
			    		</div>
			    	</div>
			    </div>
			</div>
			<div class="form-group form" v-else-if="item.type=='submit'">
				<Button type="primary" size="large" @click="submit">提交</Button>
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
		return{
			content:null,
            editorOption:{},
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
        onEditorBlur(){//失去焦点事件
        },
        onEditorFocus(){//获得焦点事件
        },
        onEditorChange(){//内容改变事件
        },
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
			alert("reset");
		},
		submit(){
			alert("submit");
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