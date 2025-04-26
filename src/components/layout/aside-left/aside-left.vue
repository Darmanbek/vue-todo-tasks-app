<script lang="ts" setup>
import { useResponsive } from "@/hooks"
import { useDrawerStore } from "@/stores"
import { storeToRefs } from "pinia"
import { default as AsideLeftContent } from "./aside-left-content.vue"

const { isMobile } = useResponsive()
const drawerStore = useDrawerStore()
const { left } = storeToRefs(drawerStore)
</script>

<template>
	<el-aside v-if="!isMobile" width="256px" class="aside">
		<AsideLeftContent />
	</el-aside>
	<template v-else>
		<el-drawer
			v-model="left"
			size="256px"
			direction="ltr"
			:show-close="false"
			:with-header="false"
			body-class="drawer-left-body"
		>
			<AsideLeftContent />
		</el-drawer>
	</template>
</template>

<style scoped>
.aside {
	background: var(--el-bg-color-overlay);
	box-shadow: var(--el-box-shadow-light);
}
:global(.drawer-left-body) {
	padding: 0 !important;
}
</style>
