<script lang="ts" setup>
import { TaskCard } from "@/components/shared"
</script>

<template>
	<el-row :gutter="20" style="row-gap: 20px">
		<el-col :xs="24" :md="12" :xxl="8">
			<TaskCard />
		</el-col>
		<el-col :xs="24" :md="12" :xxl="8">
			<TaskCard />
		</el-col>
		<el-col :xs="24" :md="12" :xxl="8">
			<TaskCard />
		</el-col>
	</el-row>
</template>

<style scoped></style>
