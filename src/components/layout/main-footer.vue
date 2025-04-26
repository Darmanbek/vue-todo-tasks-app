<script lang="ts" setup></script>

<template>
	<el-footer class="footer">
		<el-text tag="h3" class="title">СПИСОК-ДЕЛ</el-text>
	</el-footer>
</template>

<style scoped>
.footer {
	padding-block: 12px;
	position: sticky;
	bottom: 0;
	left: 0;
	right: 0;
	top: 100%;
	border-radius: var(--el-border-radius-base);
	text-align: center;
	height: auto;
	background: var(--el-bg-color-overlay);
	box-shadow: var(--el-box-shadow-light);
}

.title {
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
}
</style>
