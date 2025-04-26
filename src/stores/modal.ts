import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalStore = defineStore("modal", () => {
	const open = ref(false)
	function toggleOpen() {
		open.value = !open.value
	}

	return { open, toggleOpen }
})
