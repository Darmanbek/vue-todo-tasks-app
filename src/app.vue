<script lang="ts" setup>
import { RouterView } from "vue-router"
import { AsideLeft, AsideRight, Footer, Header } from "./components/layout"
</script>

<template>
	<el-config-provider>
		<div class="common-layout dark">
			<el-container>
				<AsideLeft />
				<el-main class="main">
					<Header />
					<div class="inner-main">
						<RouterView />
					</div>
					<Footer />
				</el-main>
				<AsideRight />
			</el-container>
		</div>
	</el-config-provider>
</template>

<style scoped>
.main {
	padding: 20px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.inner-main {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
