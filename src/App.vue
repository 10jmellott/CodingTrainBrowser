<script setup lang="ts">
import Featured from "./components/Featured.vue";
import Header from "./components/Header.vue";
import Preview from "./components/Preview.vue";

import challenges from "./challenges";
import { ref } from "vue";

const featuredChallenge = ref(challenges[0]);
</script>

<template>
	<div class="app">
		<Header class="app__header" />
		<h2>Featured</h2>
		<Featured :challenge="featuredChallenge" />
		<h2>Catalog</h2>
		<div class="catalog">
			<Preview
				class="catalog__item"
				v-for="challenge in challenges"
				:key="challenge.id"
				:challenge
				@click="featuredChallenge = challenge"
			/>
		</div>
	</div>
</template>

<style scoped>
.app {
	display: flex;
	flex-direction: column;
	gap: 32px;

	h2 {
		font-size: 36px;
	}

	.catalog {
		display: flex;
		flex-wrap: wrap;
		grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
		gap: 16px;

		.catalog__item {
			/* min-width: 180px; */
			flex: 1 1 200px;
			cursor: pointer;
		}
	}
}
</style>
