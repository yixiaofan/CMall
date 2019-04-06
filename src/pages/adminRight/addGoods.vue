<template lang="html">
	<div class="addGoods">
		<AdminAdd ref="child" @openModal1="openModal1" @openModal2="openModal2" @submit="submit" :items="items" />
		<Modal title="选择类目" :styles="mystyle" v-model="modal1">
	       	<Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
	       	<div slot="footer"></div>
    	</Modal>
		<Modal title="批量图片上传" v-model="modal2">
	       	<GoodsPic :fatherMethod="openModal2"/>
	       	<div slot="footer"></div>
    	</Modal>
	</div>
</template>

<script>
import AdminAdd from "../../components/Admin_add"
import GoodsPic from "../../components/Goods_pic"

export default {
	data(){
		return{
			modal1: false,
			modal2: false,
            items:[
	            {
	            	type:"button",
	            	id:"selectClass",
	            	label:"商品类目",
	            	text:"选择类目",
	            	method:"openModal1",
					select:true,
					img:false
	            },
	            {
	            	type:"text",
	            	id:"goodsTitle",
	            	label:"商品标题"
	            },
	            {
	            	type:"textarea",
	            	id:"goodsSubtitle",
	            	label:"商品卖点"
	            },
	            {
	            	type:"number",
	            	id:"goodsPrice",
	            	label:"商品价格"
	            },
	            {
	            	type:"number",
	            	id:"stockNumber",
	            	label:"库存数量"
	            },
	            {
	            	type:"text",
	            	id:"barCode",
	            	label:"条形码"
	            },
	            {
	            	type:"button",
	            	id:"goodsPic",
	            	label:"商品图片",
	            	text:"上传图片",
	            	method:"openModal2",
	            	select:false,
	            	img:true
	            },
	            {
	            	type:"quillEditor",
	            	id:"goodsDescribe",
	            	label:"商品描述"
	            },
	            {
	            	type:"jsonData",
	            	id:"goodsParam",
	            	label:"商品规格"
	            },
	            {
	            	type:"submit",
	            	method:"submit"
	            }
            ],
            data5: [],
            mystyle:{
            	height: "350px",
    			overflow: "auto"
            }
		}
	},
	components:{
		AdminAdd,
		GoodsPic
	},
	methods:{
		myfunc(data){
			//console.log(data);
			this.$store.commit('set_select_id',data.id);
			this.$store.commit('set_select_class',data.title);
			this.$store.commit('set_goods_id',data.id);
			this.$store.commit('set_goods_class',data.title);
			this.openModal1();
			this.$axios({
			    method: 'get',
			    url:"/cmall_manage_api/item/param/query/itemcatid/"+data.id
			}).then((res)=>{
				console.log(res);
				if(res.data.status==200){
					let obj=eval('(' + res.data.data.paramData + ')');
					this.$store.commit('set_select_class_data',obj);
					console.log(this.$store.state.select_class_data);
				}else{
					this.$store.commit('set_select_class_data',[]);
				}
			})
			.catch(error => {
		        console.log(error);
		    })
		},
        openModal1(){
        	this.modal1=!this.modal1;
        	if(this.modal1&&this.data5.length==0){
        		this.getData(0);
        	}
        },
        openModal2(){
        	this.modal2=!this.modal2;
        },
       	renderContent (h, { root, node, data }) {
       		let myfunc=this.myfunc;
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('MySpan', {
                	props: {
                        myroot: root,
                		mynode: node,
                        mydata: data,
                        fatherMethod:myfunc,
                        rightMenu:false
                    }
                })
            ]);
        },
        loadData (item, callback) {
        	this.$axios({
			    method: 'get',
			    url:"/cmall_manage_api/item/cat/list",
			    params: {
			        "id":item.id
			    }
			}).then((res)=>{
				//console.log(res);
				let mydata="[";
				for(let i in res.data){
					mydata+="{";
					mydata+="id:'"+res.data[i].id+"'";
					mydata+=",title:'"+res.data[i].text+"'";
					if(res.data[i].state=="closed"){
						mydata+=",loading:false";
						mydata+=",children:[]";
					}
					mydata+=",expand:false";
					mydata+="},"
				}
				mydata.substr(mydata.length-1,1);
				mydata+="]";
				//console.log(mydata);
				let obj=eval('(' + mydata + ')');
				callback(obj);
				//console.log(obj);
			})
			.catch(error => {
		        console.log(error);
		    })
        },
        getData(id){
        	this.$axios({
			    method: 'get',
			    url:"/cmall_manage_api/item/cat/list",
			    params: {
			        "id":id
			    }
			}).then((res)=>{
				//console.log(res);
				let mydata="[";
				for(let i in res.data){
					mydata+="{";
					mydata+="id:'"+res.data[i].id+"'";
					mydata+=",title:'"+res.data[i].text+"'";
					if(res.data[i].state=="closed"){
						mydata+=",loading:false";
						mydata+=",children:[]";
					}
					mydata+=",expand:false";
					mydata+="},"
				}
				mydata.substr(mydata.length-1,1);
				mydata+="]";
				//console.log(mydata);
				let obj=eval('(' + mydata + ')');
				this.data5=obj;
				//console.log(obj);
			})
			.catch(error => {
		        console.log(error);
		   })
        },
        submit(){
			//console.log($('input.data').eq(0).val());
			let cid=this.$store.state.select_id;
			let title=$('input.data').eq(0).val().trim();
			let sellPoint=$("textarea").val().trim();
			let price=parseInt($('input.data').eq(1).val()*100);
			let num=parseInt($('input.data').eq(2).val());
			let barcode=$('input.data').eq(3).val().trim();
			let image=this.$store.state.img_paths;
			let desc=this.$refs.child.content;
			let itemParams="[]";
			if($('.myparams').length!=0){
				let spans=$('.myparams').find("span");
				let jsonArr=[];
				for(let i=0;i<spans.length;i++){
					let obj={};
					//console.log(spans.eq(i).text())
					obj.group=spans.eq(i).text().trim();
					let paramsArr=[];
					let divs=spans.eq(i).nextAll();
					for(let j=0;j<divs.length;j++){
						let paramObj={};
						let input=divs.eq(j).find("input");
						let label=divs.eq(j).find("label");
						paramObj.k=label.text().trim();
						if(input.val().trim()==""){
							this.$Modal.error({title: "提示",content: "商品规格没有填写"});
							return false;
						}
						paramObj.v=input.val().trim();
						paramsArr.push(paramObj);
						//console.log(input.val());
						//console.log(label.text())
					}
					obj.params=paramsArr;
					jsonArr.push(obj);
				}
				itemParams=JSON.stringify(jsonArr);
				console.log(itemParams);
			}
			console.log("cid:"+cid+"   title:"+title+"   sellPoint:"+sellPoint+"   price:"+price+"   num:"+num);
			console.log("image:"+image);
			console.log("desc:"+desc);
			if(title==""||price<=0||num<=0||image.length==0||cid==-1){
				this.$Modal.error({title: "提示",content: "还有参数未填写或参数填写不合格"});
			}else{
				this.$axios({
				    method: 'get',
				    url:"/cmall_manage_api/item/save",
				    params: {
				        "cid":cid,
				        "title":title,
				        "sellPoint":sellPoint,
				        "price":price,
				        "num":num,
				        "barcode":barcode,
				        "image":image,
				        "desc":desc,
				        "itemParams":itemParams
				    }
				}).then((res)=>{
					console.log(res);
				})
				.catch(error => {
			        console.log(error);
			   })
			}
		}
  	},
	mounted(){
		
	}
}
</script>

<style scoped lang="css">

</style>