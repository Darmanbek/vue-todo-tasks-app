<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
	<el-config-provider>
		<div class="common-layout dark">
			<el-container>
				<el-aside width="256px">Aside</el-aside>
				<el-main class="main">
					<header>
						<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

						<div class="wrapper">
							<nav>
								<RouterLink to="/">Home</RouterLink>
								<RouterLink to="/about">About</RouterLink>
							</nav>
						</div>
					</header>
					<RouterView />
				</el-main>
				<el-aside width="256px">Aside</el-aside>
			</el-container>
		</div>
	</el-config-provider>
</template>

<style scoped>
.main {
	padding: 20px;
	min-height: 100vh;
}
</style>
