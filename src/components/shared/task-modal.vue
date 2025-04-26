<script lang="ts" setup>
import { useModalStore } from "@/stores"
import type { TaskChange } from "@/types"
import { ElSelectV2, type FormInstance, type FormRules } from "element-plus"
import { storeToRefs } from "pinia"
import { reactive, ref } from "vue"

const modalStore = useModalStore()
const { open } = storeToRefs(modalStore)

const onCloneModal = () => {
	if (open.value) {
		modalStore.toggleOpen()
	}
	taskFormRef?.value?.resetFields()
}

const taskFormRef = ref<FormInstance>()
const taskForm = reactive<TaskChange>({
	id: undefined,
	title: "",
	date: "",
	description: "",
	dir: "",
	important: false,
	completed: false
})

const dirOptions = [
	{
		value: "Main",
		label: "Main"
	},
	{
		value: "Music",
		label: "Music"
	}
]

const rules = reactive<FormRules<TaskChange>>({
	title: [
		{
			required: true,
			message: "Пожалуйста, заполните заголовок!"
		}
	],
	date: [
		{
			type: "date",
			required: true,
			message: "Пожалуйста, заполните дату!",
			trigger: "change"
		}
	],
	description: [
		{
			required: true,
			message: "Пожалуйста, заполните описание!"
		}
	],
	dir: [
		{
			required: true,
			message: "Пожалуйста, заполните каталог!"
		}
	]
})

const submitForm = async (formEl: FormInstance | undefined) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log("submit!")
			console.log(taskForm)
		} else {
			console.error("error submit!", fields)
		}
	})
}
</script>

<template>
	<el-dialog width="520px" v-model="open" title="Добавить задачу" @close="onCloneModal">
		<el-form
			hide-required-asterisk
			label-position="top"
			ref="taskFormRef"
			:model="taskForm"
			:rules="rules"
			label-width="auto"
		>
			<el-form-item label="Заголовок" prop="title">
				<el-input v-model="taskForm.title" />
			</el-form-item>
			<el-form-item label="Дата" prop="date">
				<el-date-picker
					v-model="taskForm.date"
					type="date"
					aria-label="Выберите дату"
					placeholder="Выберите дату"
					style="width: 100%"
				/>
			</el-form-item>
			<el-form-item label="Описание" prop="description">
				<el-input v-model="taskForm.description" type="textarea" />
			</el-form-item>
			<el-form-item label="Каталог" prop="dir">
				<el-select-v2 v-model="taskForm.dir" placeholder="Выберите каталог" :options="dirOptions" />
			</el-form-item>
			<el-form-item prop="important">
				<el-checkbox v-model="taskForm.important">Отметить как важное</el-checkbox>
			</el-form-item>
			<el-form-item prop="completed">
				<el-checkbox v-model="taskForm.completed">Отметить как выполненное</el-checkbox>
			</el-form-item>
		</el-form>
		<template #footer>
			<el-form-item>
				<el-button
					style="width: 100%"
					type="primary"
					native-type="submit"
					@click="submitForm(taskFormRef)"
					>Добавить
				</el-button>
			</el-form-item>
		</template>
	</el-dialog>
</template>

<style scoped></style>
