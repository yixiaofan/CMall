<template lang="html">
	<div class="admin-index">
		<textarea id="msg" rows="6" cols="50" style="border: 1px solid red;"></textarea>
		<Button @click="sendMsg" type="primary">发送</Button>
	</div>
</template>

<script>
export default {
	data(){    
		return{
			
		}
	},
	methods:{
		sendMsg(){
			var value= $("#msg").val();
			const url = "/cmall_websocket_api/message/send?msg="+value;
		    this.$axios.post(url)
		      .then(res => {
		        console.log(res);
		      })
		      .catch(error => {
		        console.log(error);
		      })
		}
	},
	mounted(){
		const url = "/cmall_websocket_api/login?username=admin";
	    this.$axios.post(url)
	      .then(res => {
	        console.log(res);
	      })
	      .catch(error => {
	        console.log(error);
	      })
	     
		window.onload=connect;
		let ws;
		function connect(){
			if ('WebSocket' in window) {
				ws = new WebSocket("ws://127.0.0.1:8088/websocket");
			} else if ('MozWebSocket' in window) {
				ws = new MozWebSocket("ws://127.0.0.1:8088/websocket");
			} else {
				//如果是低版本的浏览器，则用SockJS这个对象，对应了后台“sockjs/webSocketServer”这个注册器，
				//它就是用来兼容低版本浏览器的
				ws = new SockJS("http://127.0.0.1:8088/sockjs/websocket");
			}
			ws.onopen = function (event) {
				console.log('open', event);
			};
		}
	}
}
</script>

<style scoped lang="css">
.admin-index textarea{
	overflow: hidden;
}
.admin-index button{
	margin-bottom: 100px;
}
</style>