<template lang="html">
	<div class="">
		<input type="text" style="border:1px solid black" />
		<button @click="sendMsg">发送</button>
	</div>
</template>

<script>
export default {
	methods:{
		sendMsg(){
			
		}
	},
	mounted(){
		var  ws;
		window.onload=connect;
		function connect(){
			if ('WebSocket' in window) {
				ws = new WebSocket("ws://127.0.0.1:80/webSocketServer");
			} else if ('MozWebSocket' in window) {
				ws = new MozWebSocket("ws://127.0.0.1:80/webSocketServer");
			} else {
				//如果是低版本的浏览器，则用SockJS这个对象，对应了后台“sockjs/webSocketServer”这个注册器，
				//它就是用来兼容低版本浏览器的
				ws = new SockJS("http://127.0.0.1:80/sockjs/webSocketServer");
			}
			ws.onopen = function (evnt) {
				
			};
			ws.onmessage = function (evnt) {
				eval("var dataObj="+event.data);
				if(dataObj != undefined){	
					$(dataObj.data).each(function(i,o){
						$("#msgName").text(o.msgName);
						$("#amount").text(o.amount);
						$("#msg a:first").attr("_href",core.getRootPath()+o.toUrl).text(o.taskName);
						$("#msgId").val(o.id);
						setTimeout("tips_pop()",1000); 
					});
				}
				
			};
			ws.onerror = function (evnt) {
			};
			ws.onclose = function (evnt) {
			}
		}
		
		function  send(){
			var value= $("#msg").val();
			ws.send(value);
		}
	}
}
</script>

<style lang="css">
</style>