<template lang="html">
	<div class="contentCategory">
		<Tree :data="data5" :load-data="loadData" :render="renderContent"></Tree>
	</div>
</template>

<script>
export default {
	data(){
		return{
            data5: [
                {
                    title: 'parent 1',
                    expand: false,
                    loading: false,
                    children: [
                        {
                            title: 'child 1-1',
                            expand: false,
                            loading: false,
                            children: [
                                {
                                    title: 'leaf 1-1-1',
                                    loading: false,
                                    children: [],
                                    expand: false
                                },
                                {
                                    title: 'leaf 1-1-2',
                                    expand: false
                                }
                            ]
                        },
                        {
                            title: 'child 1-2',
                            loading: false,
                            expand: false,
                            children: [
                                {
                                    title: 'leaf 1-2-1',
                                    expand: false
                                },
                                {
                                    title: 'leaf 1-2-1',
                                    loading: false,
                                    children: [],
                                    expand: false
                                }
                            ]
                        }
                    ]
                }
            ]
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
                        mydata: data
                    }
                })
            ]);
        },
        loadData (item, callback) {
        	//console.log(item);
            setTimeout(() => {
                const data = [
                    {
                        title: '11111',
                        loading: false,
                        expand: false,
                        children: []
                    },
                    {
                        title: '22222',
                        expand: false,
                    }
                ];
                callback(data);
            }, 1000);
        }
  	},
}
</script>

<style lang="css">
</style>