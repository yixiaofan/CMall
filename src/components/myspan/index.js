import MyLoading from './MySpan.vue'
// 这里是重点
const MySpan = {
    install: function(Vue){
        Vue.component('MySpan',MyLoading)
    }
}

// 导出组件
export default MySpan