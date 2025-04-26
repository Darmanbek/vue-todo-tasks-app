<script lang="ts" setup>
import { Moon, Sunny, UserFilled } from "@element-plus/icons-vue"
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
	<el-aside width="256px" class="aside">
		<div class="top">
			<div class="profile">
				<el-text tag="h3">Привет, Пользователь</el-text>
				<el-avatar :icon="UserFilled" class="avatar" />
			</div>
			<div class="theme">
				<el-text tag="h3">Тёмный режим</el-text>
				<el-switch
					v-model="isDark"
					@change="toggleDark"
					:inactive-action-icon="Sunny"
					:active-action-icon="Moon"
					ico
				/>
			</div>
		</div>
		<div class="progress">
			<div class="title">
				<el-text>Все задачи</el-text>
				<el-text>1/4</el-text>
			</div>
			<el-progress :percentage="25" :show-text="false" />
		</div>
	</el-aside>
</template>

<style scoped>
.aside {
	background: var(--el-bg-color-overlay);
	box-shadow: var(--el-box-shadow-light);
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.top {
	display: flex;
	flex-direction: column;
	gap: 24px;

	.profile {
		display: flex;
		gap: 12px;
		align-items: center;

		h3 {
			text-align: center;
			font-weight: 700;
			font-size: 16px;
		}

		.avatar {
			width: 45px;
			aspect-ratio: 1;
			height: 40px;
			flex-grow: 1;
		}
	}

	.theme {
		display: flex;
		gap: 12px;
		align-items: center;
		margin-top: 20px;
		justify-content: space-between;

		h3 {
			font-weight: 600;
			font-size: 14px;
		}
	}
}

.progress {
	display: flex;
	flex-direction: column;
	gap: 12px;

	.title {
		display: flex;
		gap: 12px;
		justify-content: space-between;
	}
}
</style>
