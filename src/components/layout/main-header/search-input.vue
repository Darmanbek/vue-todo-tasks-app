<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue"
import { ref } from "vue"

const searchValue = ref("")
</script>

<template>
	<el-input
		v-model="searchValue"
		class="input"
		size="large"
		style="background: var(--el-bg-color-overlay)"
		placeholder="Искать задачу"
		:suffix-icon="Search"
	/>
</template>

<style scoped>
.input {
	max-width: 300px;
}

@media screen and (max-width: 1200px) {
	.input {
		max-width: 100%;
		width: 100%;
	}
}
</style>
