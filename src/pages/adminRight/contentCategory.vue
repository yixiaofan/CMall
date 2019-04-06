<template lang="html">
	<div class="contentCategory">
		<Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
	</div>
</template>

<script>
export default {
	data(){
		return{
            data5: []
		}
	},
	methods:{
       	renderContent (h, { root, node, data }) {
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
                        rightMenu:true
                    }
                })
            ]);
        },
        loadData (item, callback) {
        	//console.log(item);
            this.$axios({
			    method: 'get',
			    url:"/cmall_manage_api/content/category/list",
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
			    url:"/cmall_manage_api/content/category/list",
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
        }
  	},
  	mounted(){
		this.getData(0);
	}
}
</script>

<style lang="css">
</style>