<script lang="ts" setup>
import { BellFilled, Search } from "@element-plus/icons-vue"
import { ref } from "vue"
import { default as BellPopoverTaskList } from "./bell-popover-task-list.vue"

const langValue = ref("")

const langOptions = [
	{
		value: "ru",
		disabled: false,
		label: "RU"
	},
	{
		value: "en",
		disabled: true,
		label: "EN"
	},
	{
		value: "qq",
		disabled: true,
		label: "QQ"
	}
]
</script>

<template>
	<el-header class="header">
		<el-input class="input" size="large" placeholder="Искать задачу" :suffix-icon="Search" />
		<el-text size="large" class="text">2025, Апр. 26</el-text>
		<div class="flex">
			<el-popover
				title="Незавершенные задачи"
				popper-class="popover"
				:show-arrow="false"
				width="180px"
				trigger="click"
				placement="bottom-end"
			>
				<template #reference>
					<el-badge :value="5" style="cursor: pointer">
						<el-icon :size="24" style="color: var(--el-color-primary)">
							<BellFilled />
						</el-icon>
					</el-badge>
				</template>
				<BellPopoverTaskList />
			</el-popover>
			<el-select placeholder="RU" size="large" v-model="langValue" class="lang">
				<el-option
					v-for="item in langOptions"
					:key="item.value"
					:label="item.label"
					:disabled="item.disabled"
					:value="item.value"
				/>
			</el-select>
		</div>
	</el-header>
</template>

<style scoped>
.header {
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: space-between;
	padding-inline: 0;
	height: auto;
}

.input {
	max-width: 300px;
}

.text {
	font-size: 18px;
	text-transform: capitalize;
}

.lang {
	min-width: 80px;
}

.flex {
	display: flex;
	align-items: center;
	gap: 20px;
}

:global(.popover .el-popover__title) {
	font-size: 14px !important;
}
</style>
