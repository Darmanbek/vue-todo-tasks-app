<script lang="ts" setup>
import { Calendar, Check, Close, DeleteFilled, Edit, StarFilled } from "@element-plus/icons-vue"
import { ElDivider } from "element-plus"
import { h, ref } from "vue"

const isCompleted = ref(false)
</script>

<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span>Card name</span>
				<el-tag effect="dark" style="font-size: 16px">Main</el-tag>
			</div>
		</template>
		<template #default>
			<div class="card-body">
				<el-text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque earum non odit
					perspiciatis quae rerum. Alias minus nemo optio?
				</el-text>
				<el-tag effect="dark" style="font-size: 16px; margin-top: 20px" icon>
					<el-icon>
						<Calendar />
					</el-icon>
					2025-01-01
				</el-tag>
			</div>
		</template>
		<template #footer>
			<div class="card-footer">
				<el-space
					fill
					:fill-ratio="4"
					style="width: 100%"
					:spacer="h(ElDivider, { direction: 'vertical' })"
				>
					<span>
						<el-switch
							:active-action-icon="Check"
							:inactive-action-icon="Close"
							v-model="isCompleted"
						/>
					</span>
					<span>
						<el-icon :size="24">
							<StarFilled />
						</el-icon>
					</span>
					<span>
						<el-icon :size="20">
							<DeleteFilled />
						</el-icon>
					</span>
					<span>
						<el-icon :size="20">
							<Edit />
						</el-icon>
					</span>
				</el-space>
			</div>
		</template>
	</el-card>
</template>

<style scoped>
.card-header {
	display: flex;
	align-items: center;
	gap: 8px;
	justify-content: space-between;
}

.card-body {
	display: flex;
	flex-direction: column;
	align-items: start;
}
</style>
-
