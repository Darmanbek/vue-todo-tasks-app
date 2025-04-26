<script lang="ts" setup>
import { useResponsive } from "@/hooks"
import { useDrawerStore } from "@/stores"
import { storeToRefs } from "pinia"
import { default as AsideRightContent } from "./aside-right-content.vue"

const { isMobile } = useResponsive()
const drawerStore = useDrawerStore()
const { right } = storeToRefs(drawerStore)
</script>

<template>
	<el-aside v-if="!isMobile" width="256px" class="aside">
		<AsideRightContent />
	</el-aside>
	<template v-else>
		<el-drawer
			v-model="right"
			direction="rtl"
			size="256px"
			:show-close="false"
			:with-header="false"
			body-class="drawer-right-body"
		>
			<AsideRightContent />
		</el-drawer>
	</template>
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

:global(.drawer-right-body) {
	padding: 24px !important;
	display: flex;
	flex-direction: column;
	gap: 24px;
}
</style>
