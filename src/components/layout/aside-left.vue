<script lang="ts" setup>
import { Bell, Calendar, Checked, Failed, Menu } from "@element-plus/icons-vue"

const menuItems = [
	{
		key: "/",
		icon: Menu,
		label: "Все задачи"
	},
	{
		key: "/today",
		icon: Calendar,
		label: "Сегодняшние задачи"
	},
	{
		key: "/important",
		icon: Bell,
		label: "Важные задачи"
	},
	{
		key: "/completed",
		icon: Checked,
		label: "Выполненные задачи"
	},
	{
		key: "/uncompleted",
		icon: Failed,
		label: "Незавершенные задачи"
	}
]
</script>

<template>
	<el-aside width="256px" class="aside">
		<div class="top">
			<el-text tag="h3" class="title">СПИСОК-ДЕЛ</el-text>
			<el-button type="primary">Добавить новую задачу</el-button>
		</div>
		<el-menu style="border-right: 0">
			<el-menu-item v-for="item in menuItems" :key="item.key" :index="item.key">
				<el-icon>
					<component :is="item.icon" />
				</el-icon>
				<span>{{ item.label }}</span>
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>

<style scoped>
.aside {
	background: var(--el-bg-color-overlay);
	box-shadow: var(--el-box-shadow-light);
}

.top {
	display: flex;
	flex-direction: column;
	padding: 24px 12px;
	text-align: center;
	gap: 30px;

	.title {
		font-size: 24px;
		font-weight: 600;
	}
}
</style>
