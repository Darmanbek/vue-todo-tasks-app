<script lang="ts" setup></script>

<template>
	<el-footer class="footer">
		<h3>Список дел</h3>
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
	box-shadow: var(--el-box-shadow-light);
	background: var(--el-bg-color-overlay);
	border: 1px solid var(--el-border-color-light);
}

h3 {
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
}
</style>
