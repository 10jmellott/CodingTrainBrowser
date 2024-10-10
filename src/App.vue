<script setup lang="ts">
import Featured from "./components/Featured.vue";
import Header from "./components/Header.vue";
import Preview from "./components/Preview.vue";

import challenges, { Challenge } from "./challenges";
import { ref } from "vue";

let defaultChallengeId = "086";
// Get default challenge from hash
const hash = window.location.hash;
if (hash) {
	defaultChallengeId = hash.slice(1);
}
const defaultChallenge = ref(challenges.find((c) => c.id === defaultChallengeId) || challenges[0]);

const featuredChallenge = ref(defaultChallenge);

function updateFeaturedChallenge(challenge: Challenge) {
	featuredChallenge.value = challenge;
	window.location.hash = challenge.id;
}
</script>

<template>
	<div class="app">
		<Header class="app__header" />
		<h2>Featured</h2>
		<Featured :challenge="featuredChallenge" />
		<h2>Catalog</h2>
		<div class="catalog">
			<Preview class="catalog__item" :class="{ active: challenge.id === featuredChallenge.id }"
				v-for="challenge in challenges" :key="challenge.id" :challenge
				@click="() => updateFeaturedChallenge(challenge)" />
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
			flex: 1 1 200px;
			cursor: pointer;
			opacity: 0.5;
			transition: opacity 0.2s;
		}

		.catalog__item.active,
		.catalog__item:hover {
			opacity: 1;
		}
	}
}
</style>
