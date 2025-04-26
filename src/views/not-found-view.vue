<script lang="ts" setup>
import { ArrowLeft, HomeFilled } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<template>
	<div class="not-found">
		<el-result title="404" sub-title="Страница не найдена">
			<template #icon>
				<el-empty description="" class="empty" />
			</template>
			<template #extra>
				<el-button @click="router.back" type="primary" :icon="ArrowLeft">Назад</el-button>
				<el-button @click="() => router.replace('/')" :link="true" type="primary" :icon="HomeFilled"
					>Главная
				</el-button>
			</template>
		</el-result>
	</div>
</template>

<style scoped>
.not-found {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.empty ::v-deep(.el-empty__description) {
	display: none !important;
}

.empty ::v-deep(.el-empty__image) {
	width: 160px !important;
	height: 160px !important;

	svg {
		width: 160px !important;
		height: 160px !important;
	}
}
</style>
