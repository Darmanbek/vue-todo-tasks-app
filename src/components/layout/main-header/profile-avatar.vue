<script lang="ts" setup>
import { useResponsive } from "@/hooks"
import { useDrawerStore } from "@/stores"
import { UserFilled } from "@element-plus/icons-vue"

const { isMobile } = useResponsive()
const { toggleDrawer } = useDrawerStore()
</script>

<template>
	<button @click="() => toggleDrawer('right')" v-if="isMobile" class="button">
		<el-avatar :icon="UserFilled" class="avatar" />
	</button>
</template>

<style scoped>
.avatar {
	width: 32px;
	aspect-ratio: 1;
	height: 32px;
}

.button {
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;
}
</style>
