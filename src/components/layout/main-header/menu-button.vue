<script lang="ts" setup>
import { useResponsive } from "@/hooks"
import { useDrawerStore } from "@/stores"
import { Expand } from "@element-plus/icons-vue"

const { isMobile } = useResponsive()
const { toggleDrawer } = useDrawerStore()
</script>

<template>
	<el-button v-if="isMobile" @click="() => toggleDrawer('left')" size="large" text circle>
		<template #icon>
			<el-icon :size="24">
				<Expand />
			</el-icon>
		</template>
	</el-button>
</template>

<style scoped></style>
