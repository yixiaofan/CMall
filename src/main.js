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
		userInfo:'',
		img_upload_cache: [],
		img_paths: [],
		img_status: 'ready',
		select_class:'',
		select_class_data:[{group:'主体',params:['CPU','显卡']},{group:'格式',params:['支持语言']}]
	},
	mutations:{
		s_flagChange(state) {
	      	state.s_flag=true;
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
		set_select_class_data(state, arg){
			state.select_class_data=arg;
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
