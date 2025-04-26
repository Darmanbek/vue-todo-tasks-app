<script lang="ts" setup>
import { useResponsive } from "@/hooks"
import { BellFilled } from "@element-plus/icons-vue"
import { ref } from "vue"
import { default as BellPopoverTaskList } from "./bell-popover-task-list.vue"
import { default as MenuButton } from "./menu-button.vue"
import { default as ProfileAvatar } from "./profile-avatar.vue"
import { default as SearchInput } from "./search-input.vue"

const { isMobile } = useResponsive()
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
		<div class="header-inner">
			<div class="flex">
				<MenuButton />
				<SearchInput v-if="!isMobile" />
			</div>
			<div style="text-align: center">
				<el-text v-if="isMobile" size="large" tag="h3" class="title">СПИСОК-ДЕЛ</el-text>
				<el-text size="large" class="text">2025, Апр. 26</el-text>
			</div>
			<div class="flex">
				<el-popover
					title="Незавершенные задачи"
					popper-class="popover"
					:show-arrow="false"
					width="185px"
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
				<ProfileAvatar />
			</div>
		</div>
		<SearchInput v-if="isMobile" />
	</el-header>
</template>

<style scoped>
.header {
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: auto;
	padding-inline: 0;
}

.header-inner {
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: space-between;
}

.title {
	font-size: 16px;
	font-weight: 700;
	text-transform: capitalize;
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

@media screen and (max-width: 1200px) {
	.text {
		font-size: 16px;
	}
}
</style>
