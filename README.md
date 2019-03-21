创建新项目：
	一.在E:\HBuilder\Vue下 执行命令行 vue init webpack CMall (1.命名 2-4.回车 5.y 6-8.n 9.自己安装)
	二.cd CMall然后 cnpm install

在Vue中引入bootstrap
	一.安装jquery 
	1.cnpm install jquery --save-dev
	2.在webpack.base.conf.js中添加如下内容：
		var webpack = require('webpack')
		plugins: [
  			new webpack.ProvidePlugin({
    			$: "jquery",
    			jQuery: "jquery"
  			})
		],(在resolve和module的中间添加)
	3.在main.js中添加内容 import $ from 'jquery'
	二.安装bootstrap
	1.cnpm install bootstrap@3.x --save-dev
	2.在main.js中 import 'bootstrap/dist/css/bootstrap.min.css' 
		import 'bootstrap/dist/js/bootstrap.min.js'

安装iView
	1.cnpm install iview --save
	2.在main.js中import iView from 'iview' 
		import 'iview/dist/styles/iview.css'    Vue.use(iView)


上传图片使用组件
	使用前先安装：cnpm install less-loader less --save-dev
	cnpm i vue-easy-uploader --save
富文本编辑器使用组件
	cnpm install vue-quill-editor --save
	安装依赖：cnpm install quill --save