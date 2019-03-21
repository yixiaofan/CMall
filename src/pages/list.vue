<template lang="html">
	<div class="list mycontainer">
		<NavSearch/>
		<!-- 商品分类 start -->
		<section class="c-accordion c-accordion-gapped">
			<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="heading1">
						<div class="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
					        <div class="panel-text">数码办公</div>
					    </div>
					</div>
					<div id="collapse1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading1">
						<div class="c-accordion-content">
							<div class="title">
								<a href="#">手机通讯</a>
							</div>
							<ul>
								<li class="fl">
									<a href="#" class="first">手机</a>
								</li>
								<li class="fl">
									<a href="#">合约机</a>
								</li>
								<li class="fl">
									<a href="#">对讲机</a>
								</li>
							</ul>
							<div class="title">
								<a href="#">手机配件</a>
							</div>
							<ul>
								<li class="fl">
									<a href="#" class="first">手机电池</a>
								</li>
								<li class="fl">
									<a href="#">蓝牙耳机</a>
								</li>
								<li class="fl">
									<a href="#">充电器/数据线</a>
								</li>
								<li class="fl">
									<a href="#">手机耳机</a>
								</li>
								<li class="fl">
									<a href="#">手机贴膜</a>
								</li>
								<li class="fl">
									<a href="#">手机存储卡</a>
								</li>
								<li class="fl">
									<a href="#">手机保护套</a>
								</li>
								<li class="fl">
									<a href="#">车载配件</a>
								</li>
								<li class="fl">
									<a href="#">iPhone</a>
								</li>
								<li class="fl">
									<a href="#">配件</a>
								</li>
								<li class="fl">
									<a href="#">创意配件</a>
								</li>
								<li class="fl">
									<a href="#">便携/无线音箱</a>
								</li>
								<li class="fl">
									<a href="#">手机配饰</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="heading2">
						<div class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
					        <div class="panel-text">服饰鞋包</div>
					    </div>
					</div>
					<div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
						<div class="panel-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="heading3">
						<div class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
					        <div class="panel-text">食品饮料</div>
					    </div>
					</div>
					<div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
						<div class="panel-body">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- 商品分类 end -->
	</div>
</template>

<script>
import NavSearch from "../components/Nav_search"
export default {
	name:"list",
	components:{
		NavSearch
	}
}
</script>

<style scoped lang="css">
.panel-heading{
	position: relative;
}
.collapsed{
	background-color: white;
}
.collapsed:after{
	position: absolute;
	right: 10px;
	top: 18px;
	display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    border-color: red;
    transform: rotate(45deg);
	transition:all 0.2s linear;
	-webkit-transition:all 0.2s linear; /* Safari */
    content: "";
}
.panel-heading>div:not(.collapsed):after{
	position: absolute;
	right: 10px;
	top: 18px;
	display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 6px;
    height: 6px;
    border-color: red;
    transform: rotate(135deg);
    transition:all 0.2s linear;
	-webkit-transition:all 0.2s linear; /* Safari */
    content: "";
}
.panel-heading{
	padding: 0px;
}
.panel-title{
	text-indent:10px;
	overflow: hidden;
}
.panel-text{
	margin: 8px auto;
}
.c-accordion{
	margin: 10px auto;
}
.c-accordion-gapped .c-accordion-content {
    color: #666;
    margin-top: 0;
    padding: 0.8rem 1rem 1.2rem;
    font-size: 1.4rem;
}
.c-accordion-content .title a {
    font-weight: 500;
    font-size: 14px;
    color: #666;
}
.c-accordion-content ul {
    overflow: hidden;
    border-bottom: 1px dotted #dedede;
    margin-bottom: 20px;
}
.c-accordion-content ul li {
    margin-right: 10px;
    line-height: 38px;
}
.c-accordion-content ul li a.first {
    border-left: 0;
    padding-left: 0;
}
.c-accordion-content ul li a {
    color: #787878;
    border-left: 1px solid #dedede;
    padding-left: 10px;
    font-size: 12px;
}
.c-accordion-content ul:last-child {
    border-bottom: 0;
    margin-bottom: 0;
}
</style>