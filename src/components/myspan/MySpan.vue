<template lang="html">
	<span>
		<i :class="[mydata.children ? 'ivu-icon-ios-folder-outline' : 'ivu-icon-ios-paper-outline','ivu-icon']" style="margin-right: 8px;"></i>
		<span ref="myspan" class="ivu-tree-title" @click="clickme(mydata)"  v-menu="items" v-if="rightMenu">{{mydata.title}}</span>
		<span ref="myspan" class="ivu-tree-title" @click="clickme(mydata)" v-else>{{mydata.title}}</span>
	</span>
</template>

<script>
export default {
	data () {
	    return {
	        items: [
		        {
		          type: 'li', // type为li是普通按钮
		          title: '添加', // 按钮的名称
		          func: () => this.append(this.mydata) // 回调函数
		        }, {
		          type: 'hr' // 分割线, 无需其他参数
		        }, {
		          type: 'li',
		          title: '删除',
		          func: () => this.remove(this.myroot,this.mynode,this.mydata,false)
		        },  {
		          type: 'hr'
		        }, {
		          type: 'li',
		          title: '重命名',
		          func: () => this.rename(this.mydata)
		        }
	      	]
	    }
	},
	props:{
		mydata:{
			type: Object,
            default () {
                return {};
            }
		},
		myroot:{
			type: Array,
            default () {
                return {};
            }
		},
		mynode:{
			type: Object,
			default () {
                return {};
            }
		},
		rightMenu:{
			type:Boolean,
			default:true
		},
		fatherMethod:{
	        type: Function,
	        default: null
	    }
	},
	methods: {
        append (data) {
        	let that=this;
        	data.expand=true;
            const children = data.children || [];
            children.push({
                title: '新建分类',
                expand: false
            });
            that.$set(data, 'children', children);
            $(that.$refs.myspan).prev().attr("class","ivu-icon ivu-icon-ios-folder-outline");
            setTimeout(function(){
            	let span=$(that.$refs.myspan).closest("li").find("span").last();
            	that.myrename(span,data.children[data.children.length-1],true);
            }, 200);
        },
        remove (root, node, data, flag) {
        	let that=this;
            const parentKey = root.find(el => el === node).parent;
            const parent = root.find(el => el.nodeKey === parentKey).node;
            const index = parent.children.indexOf(data);
            let len=parent.children.length;
            //console.log(len);
            if(len==1){
            	delete parent.loading;
            	let i;
            	if(flag){
            		i=$(that.$refs.myspan).prev();
            	}else{
            		i=$(that.$refs.myspan).parents("li").eq(1).find("i").eq(1);
            	}
            	i.attr("class","ivu-icon ivu-icon-ios-paper-outline");
            }else{
            	let myi=$(that.$refs.myspan).prev();
            	if(parent.children[index+1]){
            		if(parent.children[index+1].children){
            			myi.attr("class","ivu-icon ivu-icon-ios-folder-outline");
            		}else{
            			myi.attr("class","ivu-icon ivu-icon-ios-paper-outline");
            		}
            	}
            }
            parent.children.splice(index, 1);
        },
        rename(data){
        	let span=$(this.$refs.myspan);
        	this.myrename(span,data,false);
        },
        clickme (data){
        	if(data.children&&data.children.length!=0){
        		data.expand=!data.expand;
        	}else if(this.rightMenu==false){
        		if (this.fatherMethod) {
		          this.fatherMethod(data);
		        }
        	}
        },
        myrename(el,data,parent){
        	el.attr("contenteditable", "true").focus();
        	let range = window.getSelection();//创建range
   			range.selectAllChildren(el[0]);//range 选择obj下所有子内容
    		range.collapseToEnd();//光标移至最后
    		el.bind("keypress",(e) =>{
				if(e.keyCode==13){
					el.blur();
					e.preventDefault();
				}
			});
        	el.one("blur",() =>{
        		el.unbind("keypress");
        		data.title=el.text().trim();
				el.attr("contenteditable", "false");
				if(data.title==""){
					this.$Modal.error({
                        title: "提示",
                        content: "内容不能为空"
                   	});
                   	let pnode=this.mynode;
                   	if(parent){
                   		let nodeKey=pnode.node.children[pnode.node.children.length-1].nodeKey;
                   		pnode = this.myroot.find(el => el.nodeKey === nodeKey);
                   	}//console.log(pnode);
		            this.remove(this.myroot,pnode,data,parent);
				}
			});
        }
   }
}
</script>

<style scoped lang="css">
.ivu-tree-title{
	display: inline-block;
    margin: 0;
    padding: 0 4px;
    border-radius: 3px;
    cursor: pointer;
    vertical-align: top;
    color: #515a6e;
    transition: all .2s ease-in-out;
}
.ivu-tree-title:hover{
	background-color: #eaf4fe;
}
</style>