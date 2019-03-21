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
		userInfo:'',
		page_current:'',
		page_totalpage:'',
		img_upload_cache: [],
		img_paths: [],
		img_status: 'ready'
	},
	mutations:{
		s_flagChange(state) {
	      	state.s_flag=true;
	    },
	    setPage_current(page){
	   		state.page_current=page;
	    },
	   	setPage_totalpage(page){
	   		state.page_totalpage=page;
	   	},
	   	set_img_upload_cache (state, arg) {
		    state.img_upload_cache = arg
		},
		set_img_paths (state, arg) {
		    state.img_paths = arg
		},
		set_img_status (state, arg) {
		    state.img_status = arg
		}
	}
})
Vue.use(uploader, store);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store//5.挂载store
})
