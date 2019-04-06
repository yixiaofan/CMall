<template lang="html">
	<div class="paramList">
		<AdminTable @openModal1="openModal1" 
			method="changeTable"
			@changeTable="changeTable" 
			@deleteParams="deleteParams" 
			:total="total" title="规格参数" 
			:loading="loading"
			:body="pBody" 
			:columns="pColumns" 
			:tableData="pTableData">
		</AdminTable>
		<Modal v-model="modal1" :closable="false" width="700" @on-ok="ok">
	       	<AdminAdd @openModal2="openModal2" :items="items" />
	       	<div slot="footer">
			   	<Button type="text" size="large" @click="modal1=false">取消</Button>
			   	<Button type="primary" size="large" @click="ok">确定</Button>
			</div>
    	</Modal>
    	<Modal title="选择类目" :styles="mystyle" v-model="modal2">
    		<Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
	       	<div slot="footer"></div>
    	</Modal>
	</div>
</template>

<script>
import AdminTable from "../../components/admin_table"
import AdminAdd from "../../components/Admin_add"
import {formatDate} from '../../../static/js/date.js';

export default {
	data(){
		return{
			modal1: false,
			modal2: false,
			pBody:[{css:"glyphicon glyphicon-plus",text:"新增",method:"openModal1"},
			{css:"glyphicon glyphicon-pencil",text:"编辑",method:""},
			{css:"glyphicon glyphicon-remove",text:"删除",method:"deleteParams",param:"-1"}],
			pColumns: [
                {
                    type: 'selection',
                    width: 50,
                    align: 'center'
                },
                {
                    title: 'ID',
                    key: 'id',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '商品类目ID',
                    key: 'itemCatId',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '商品类目',
                    key: 'itemCatName',
                    tooltip: true,
                    align: 'center'
                },
                {
                    title: '规格(只显示分组名称)',
                    key: 'paramData',
                    tooltip: true,
                    align: 'center'
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
            items:[
	            {
	            	type:"button",
	            	id:"selectClass",
	            	label:"商品类目",
	            	text:"选择类目",
	            	method:"openModal2",
					select:true,
					img:false
	            },
	            {
	            	type:"param",
	            	id:"paramList",
	            	label:"规格参数"
	            }
            ],
            loading: true,
            params:{
            	page: 1,
            	rows: 10
			},
			total:0
		}
	},
	components:{
		AdminTable,
		AdminAdd
	},
	methods:{
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
		ok () {
            let catid=this.$store.state.params_id;
            //console.log("catid:"+catid);
            let groups=$(".big-class:visible");
            //console.log(groups);
            if(groups.length<1){
            	this.$Modal.warning({title: "提示",content: "没有添加商品规格"});
            	return false;
            }
            let jsonstr=[];
            for(let i=0;i<groups.length;i++){
            	let obj={};
            	let group=groups.eq(i).find("input").eq(0).val().trim();
            	//console.log(group);
            	if(group==""){
            		this.$Modal.warning({title: "提示",content: "商品规格未填写完整"});
            		return false;
            	}
				obj.group=group;
            	let params=groups.eq(i).find(".small-class");
            	let paramsArr=[];
            	for(let j=0;j<params.length;j++){
            		let param=params.find("input").eq(j).val().trim();
            		//console.log(param);
            		if(param==""){
            			this.$Modal.warning({title: "提示",content: "商品规格未填写完整"});
            			return false;
            		}
            		paramsArr.push(param);
            	}
            	obj.params=paramsArr;
            	//console.log(JSON.stringify(obj));
            	jsonstr.push(obj);
            }
            let data=JSON.stringify(jsonstr);
            //console.log(data);
            this.$axios({
			    method: 'get',
			    url:"/cmall_manage_api/item/param/save/"+catid,
			    params: {
			        "paramData":data
			    }
			}).then((res)=>{
				console.log(res);
				if(res.data.status==200){
					this.getData(this.params.page,this.params.rows);
				}
			})
			.catch(error => {
		        console.log(error);
		    })
            this.modal1=false;
       	},
       	openModal1(){
        	this.modal1=!this.modal1;
        },
        myfunc(data){
			//console.log(data);
			this.$store.commit('set_select_id',data.id);
			this.$store.commit('set_select_class',data.title);
			this.$store.commit('set_params_id',data.id);
			this.$store.commit('set_params_class',data.title);
			this.openModal2();
		},
        openModal2(){
        	this.modal2=!this.modal2;
        	if(this.modal2&&this.data5.length==0){
        		this.getListData(0);
        	}
        },
        getListData(id){
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
        getData(page,rows){
			let that=this;
			that.loading=true;
			const postUrl = "/cmall_manage_api/item/param/list?page="+page+"&rows="+rows;
		    this.$axios.post(postUrl)
		      .then(res => {
		      	console.log(res.data);
		      	let newData=res.data;
		      	for(let i in newData.rows){
		      		let time=newData.rows[i].created;
		      		let date=new Date(time);
		      		newData.rows[i].created=formatDate(date, 'yyyy-MM-dd hh:mm:ss');
		      		time=newData.rows[i].updated;
		      		date=new Date(time);
		      		newData.rows[i].updated=formatDate(date, 'yyyy-MM-dd hh:mm:ss');
		      		let data=eval("("+newData.rows[i].paramData+")");
		      		let str="";
		      		for(let j in data){
		      			str+=data[j].group+","
		      		}
		      		str=str.substr(0,str.length-1);
		      		newData.rows[i].paramData=str;
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
			this.getData(this.params.page,this.params.rows);
		},
		deleteParams(param,ids){
			let pTableData=this.pTableData;
			console.log(ids);
			let myids=ids;
			myids=myids.join(",");
			console.log(myids);
			if(myids.length==0){
				this.$Modal.error({
                    title: "提示",
                    content: "未选中商品规格"
               	});
			}else{
				this.$axios({
				    method: 'get',
				    url:"/cmall_manage_api/item/param/delete",
				    params: {
				        "ids":myids
				    }
				}).then((res)=>{
					//console.log(res);
					if(res.data.status==200){
						for(var i = 0; i < pTableData.length; i++){
							for(let j in ids){
								if(pTableData[i].id==ids[j]){
									pTableData.splice(i,1);
									i--;
									break;
								}
							}
						}
						this.pTableData=pTableData;
					}
				})
				.catch(error => {
			        console.log(error);
			    })
			}
		}
	},
	mounted(){
		this.getData(this.params.page,this.params.rows);
	}
}
</script>

<style lang="css">
</style>