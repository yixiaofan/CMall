// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import $ from 'jquery' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import VueCookie from 'vue-cookie'
import uploader from 'vue-easy-uploader'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import MySpan from './components/myspan'
import rightMenu from 'vue-right-menu'
import 'vue-right-menu/src/index.css'

Axios.defaults.withCredentials=true;

Vue.use(rightMenu)
Vue.use(MySpan)
Vue.use(iView)
Vue.use(VueCookie)
Vue.prototype.$axios=Axios;
//配置vuex步骤
//1.运行cnpm i vuex -S
//2.导入包
import Vuex from 'vuex'
//3.注册vuex到vue中
Vue.use(Vuex)
//4.new Vuex.Store()实例，得到一个 数据仓库对象
let store =new Vuex.Store({
	state:{
		s_flag:false,
		userInfo:null,
		img_upload_cache: [],
		img_paths: [],
		img_status: 'ready',
		select_class:'',
		select_id:-1,
		select_class_data:[],
		params_id:-1,
		params_class:'',
		goods_id:-1,
		goods_class:''
	},
	mutations:{
		s_flagChange(state) {
	      	state.s_flag=true;
	    },
	    set_userInfo (state, arg){
	    	state.userInfo = arg
	    },
	   	set_img_upload_cache (state, arg) {
		    state.img_upload_cache = arg
		},
		set_img_paths (state, arg) {
		    state.img_paths = arg
		},
		set_img_status (state, arg) {
		    state.img_status = arg
		},
		set_select_class(state, arg){
			state.select_class=arg;
		},
		set_select_id(state, arg){
			state.select_id=arg;
		},
		set_select_class_data(state, arg){
			state.select_class_data=arg;
		},
		set_params_class(state, arg){
			state.params_class=arg;
		},
		set_params_id(state, arg){
			state.params_id=arg;
		},
		set_goods_class(state, arg){
			state.goods_class=arg;
		},
		set_goods_id(state, arg){
			state.goods_id=arg;
		},
	}
})
Vue.use(uploader, store);
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  //判断要去的路由有没有requireAuth
  if(to.meta.requireAuth){
  	let _ticket= document.cookie;
    if(_ticket.indexOf("TT_TOKEN") != -1){
    	next();
    }else{
      	$('#loginPage').modal();
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store//5.挂载store
})
