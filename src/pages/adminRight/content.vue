<template lang="html">
	<div class="content">
		<Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                <Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
            </div>
            <div slot="right" class="demo-split-pane">
                <AdminTable @openModal1="openModal1" 
					method="changeTable"
					@changeTable="changeTable" 
					:total="total" title="" 
					:loading="loading"
					:body="pBody" 
					:columns="pColumns" 
					:tableData="pTableData">
				</AdminTable>
            </div>
        </Split>
        <Modal title="新增内容" :styles="mystyle" v-model="modal1" width="800">
	       	<AdminAdd ref="child" @openModal2="openModal2" @submit="submit" :items="items" />
	       	<div slot="footer"></div>
    	</Modal>
    	<Modal title="第一张为显示图片，第二张为备用图片" v-model="modal2">
	       	<GoodsPic mypath="path2" :fatherMethod="openModal2"/>
	       	<div slot="footer"></div>
    	</Modal>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"
import AdminAdd from "../../components/Admin_add"
import GoodsPic from "../../components/Goods_pic"
import {formatDate} from '../../../static/js/date.js'

export default {
	data () {
        return {
            split1: 0.2,
            pBody:[{css:"glyphicon glyphicon-plus",text:"新增",method:"openModal1"}],
			pColumns: [
                {
                    title: 'ID',
                    key: 'id',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '内容标题',
                    key: 'title',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '内容子标题',
                    key: 'subTitle',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '内容描述',
                    key: 'titleDesc',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '内容链接',
                    key: 'url',
                    tooltip: true,
                    align: 'center',
                    type: 'html'
                },
                {
                    title: '图片',
                    key: 'pic',
                    tooltip: true,
                    align: 'center',
                    type: 'html'
                },
                {
                    title: '图片2',
                    key: 'pic2',
                    tooltip: true,
                    align: 'center',
                    type: 'html'
                },
                {
                    title: '创建日期',
                    key: 'created',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '更新日期',
                    key: 'updated',
                    tooltip: true,
                    align: 'center'
                }
            ],
            pTableData: [],
            data5: [],
            mystyle:{
            	height: "350px",
    			overflow: "auto"
            },
            modal1: false,
			modal2: false,
            items:[
	            {
	            	type:"text",
	            	id:"goodsTitle",
	            	label:"商品标题"
	            },
	            {
	            	type:"text",
	            	id:"goodsSubTitle",
	            	label:"商品子标题"
	            },
	            {
	            	type:"textarea",
	            	id:"contentDescribe",
	            	label:"内容描述"
	            },
	            {
	            	type:"text",
	            	id:"url",
	            	label:"URL"
	            },
	            {
	            	type:"button",
	            	id:"pic",
	            	label:"图片",
	            	text:"上传图片",
	            	method:"openModal2",
	            	select:false,
	            	img:true
	            },
	            {
	            	type:"quillEditor",
	            	id:"content",
	            	label:"内容"
	            },
	            {
	            	type:"submit",
	            	method:"submit"
	            }
            ],
            loading: true,
            params:{
            	page: 1,
            	rows: 10
			},
			total:0,
			temp:-1
        }
   	},
   	components:{
		AdminTable,
		AdminAdd,
		GoodsPic
	},
	methods:{
		myfunc(data){
			this.temp=data.id;
			this.getTableData(data.id,this.params.page,this.params.rows);
		},
		openModal1(){
        	this.modal1=!this.modal1;
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
        	//console.log(item);
            this.$axios({
			    method: 'get',
			    url:"http://47.100.242.105:8089/content/category/list",
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
			    url:"http://47.100.242.105:8089/content/category/list",
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
        getTableData(id,page,rows){
			let that=this;
			that.loading=true;
			const postUrl = "http://47.100.242.105:8089/content/query/list?categoryId="+id+"&page="+page+"&rows="+rows;
		    this.$axios.post(postUrl)
		      .then(res => {
		      	//console.log(res.data);
		      	let newData=res.data;
		      	for(let i in newData.rows){
		      		let time=newData.rows[i].created;
		      		let date=new Date(time);
		      		newData.rows[i].created=formatDate(date, 'yyyy-MM-dd hh:mm:ss');
		      		time=newData.rows[i].updated;
		      		date=new Date(time);
		      		newData.rows[i].updated=formatDate(date, 'yyyy-MM-dd hh:mm:ss');
		      		newData.rows[i].url='<a style="color:blue !important" href="'+newData.rows[i].url+'">查看</a>';
		      		newData.rows[i].pic='<a style="color:blue !important" href="'+newData.rows[i].pic+'">查看</a>';
		      		if(newData.rows[i].pic2!=null&&newData.rows[i].pic2!=""){
		      			newData.rows[i].pic2='<a style="color:blue !important" href="'+newData.rows[i].pic2+'">查看</a>';
		      		}
		      	}
		      	that.pTableData=newData.rows;
		      	that.loading=false;
		      	that.total=newData.total;
		      	//console.log(newData.rows);
		      })
		      .catch(error => {
		        console.log(error);
		      })
		},
		changeTable(obj){
			this.params=obj;
			this.getTableData(this.temp,this.params.page,this.params.rows);
		},
		submit(){
			let categoryId=this.temp;
			let title=$('input.data').eq(0).val().trim();
			let subTitle=$('input.data').eq(1).val().trim();
			let titleDesc=$("textarea").val().trim();
			let url=$('input.data').eq(2).val().trim();
			let paths=this.$store.state.img_paths;
			let content=this.$refs.child.content;
			console.log("categoryId:"+categoryId+"   title:"+title+"   subTitle:"+subTitle+"   titleDesc:"+titleDesc);
			console.log(paths);
			console.log("content:"+content);
			if(categoryId==-1||title==""||url==""||paths.length==0){
				this.$Modal.error({title: "错误",content: "参数未填写完整"});
			}else{
				paths=paths.split(",");
				let pic=paths[0];//console.log(pic);
				let pic2="";
				if(paths.length>1){
					pic2=paths[1];
				}//console.log(pic2);
				this.$axios({
				    method: 'get',
				    url:"http://47.100.242.105:8089/content/save",
				    params: {
				        "categoryId":categoryId,
				        "title":title,
				        "subTitle":subTitle,
				        "titleDesc":titleDesc,
				        "url":url,
				        "pic":pic,
				        "pic2":pic2,
				        "content":content
				    }
				}).then((res)=>{
					console.log(res);
					this.getTableData(this.temp,this.params.page,this.params.rows);
					this.openModal1();
				})
				.catch(error => {
			        console.log(error);
			   })
			}
		}
  	},
  	mounted(){
		this.getData(0);
	}
}
</script>

<style scoped lang="css">
.content{
    height: 500px;
    border: 1px solid #dcdee2;
}
.demo-split-pane{
    padding: 10px;
}
</style>