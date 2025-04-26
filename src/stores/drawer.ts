import { defineStore } from "pinia"
import { ref } from "vue"

export const useDrawerStore = defineStore("drawer", () => {
	const left = ref(false)
	const right = ref(false)
	function toggleDrawer(type: "left" | "right" = "left") {
		if (type === "right") {
			right.value = !right.value
			return
		}
		left.value = !left.value
	}

	function setDrawer(type: "left" | "right" = "left", open: boolean) {
		if (type === "right") {
			right.value = open
			return
		}
		left.value = open
	}

	return { left, right, toggleDrawer, setDrawer }
})
