<template lang="html">
	<!-- 底部导航 start -->
	<footer class="c-footer c-footer-default c-no-layout">
		<div class="footer-nav-list">
			<a href="#">关于我们</a>
			<span class="c-footer-divider">| </span>
			<a href="#">联系我们</a>
			<span class="c-footer-divider">| </span>
			<a href="#">联系客服</a>
			<span class="c-footer-divider">| </span>
			<a href="#">合作招商</a>
			<span class="c-footer-divider">| </span>
			<a href="#">商家帮助</a>
		</div>
		<div class="c-footer-miscs">
			<p>Powered by <a href="http://127.0.0.1:8080" title="CMall电商系统">CMall</a>  v1.1.0  </p>
			<p><a href="#">川ICP备233333号</a></p>
		</div>
	</footer>
	<!-- 底部导航 end -->
</template>

<script>
export default {
	
}
</script>

<style scoped lang="css">
.c-footer {
    border-top: 2px solid #d2364c;
    text-align: center;
    padding: 1em 0;
    clear: both;
    overflow: hidden;
}
.c-footer, .c-footer-miscs {
    font-size: 12px !important;
}
.c-footer-default a {
    color: #333;
}
.c-footer-default .c-footer-divider {
    padding: 0 5px;
    color: #ccc;
}
.c-footer-default .c-footer-miscs {
    color: #999999;
}
.c-footer-default .c-footer-miscs p {
    margin: 5px 0;
}
.c-footer-default .c-footer-miscs a {
    color: #8e8e8e;
}
</style>