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
	          func: () => this.remove(this.myroot,this.mynode,this.mydata)
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
            	that.myrename(span,data.children[data.children.length-1]);
            }, 200);
        },
        remove (root, node, data) {
        	let that=this;
            const parentKey = root.find(el => el === node).parent;
            const parent = root.find(el => el.nodeKey === parentKey).node;
            const index = parent.children.indexOf(data);
            let len=parent.children.length;
            if(len==1){
            	delete parent.loading;
            	console.log(parent);
            	let i=$(that.$refs.myspan).parents("li").eq(1).find("i").eq(1);
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
        	this.myrename(span,data);
        },
        clickme (data){
        	if(data.children&&data.children.length!=0){
        		data.expand=!data.expand;
        	}else{
        		this.$store.commit('set_select_class',data.title);
        		this.$parent.$parent.$parent.$parent.$parent.$parent.openModal1();
        	}
        },
        myrename(el,data){
        	el.attr("contenteditable", "true").focus();
        	let range = window.getSelection();//创建range
   			range.selectAllChildren(el[0]);//range 选择obj下所有子内容
    		range.collapseToEnd();//光标移至最后
    		el.keydown(function(e){
				if(e.keyCode==13){
					data.title=el.text().trim();
					e.preventDefault();
				   	$(this).attr("contenteditable", "false");
				}
			});
        	el.bind("blur",function(){
        		data.title=el.text().trim();
				$(this).attr("contenteditable", "false");
			})
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