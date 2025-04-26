<script lang="ts" async setup>
import { TaskCard, TaskModal } from "@/components/shared"
</script>

<template>
	<TaskModal />
	<el-row :gutter="20" style="row-gap: 20px">
		<el-col :xs="24" :md="12" :xl="8">
			<TaskCard />
		</el-col>
		<el-col :xs="24" :md="12" :xl="8">
			<TaskCard />
		</el-col>
		<el-col :xs="24" :md="12" :xl="8">
			<TaskCard />
		</el-col>
	</el-row>
</template>

<style scoped></style>
