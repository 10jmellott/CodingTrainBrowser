<script setup lang="ts">
import Card from "./Card.vue";
import { Challenge } from "../challenges";

defineProps<{
	challenge: Challenge;
}>();
</script>

<template>
	<Card class="preview">
		<img
			:src="`/thumbnails/${challenge.id}.png`"
			alt="Thumbnail"
			height="64"
			width="64"
		/>
		<p class="title">{{ challenge.name }}</p>
		<p class="number">#{{ challenge.id }}</p>
	</Card>
</template>

<style scoped>
.preview {
	display: flex;
	position: relative;
	align-items: center;
	overflow: hidden;
	gap: 12px;

	img {
		margin: -12px 0 -12px -12px;
	}

	.title {
		text-align: center;
		flex: 1;
	}

	.number {
		font-size: 12px;
		position: absolute;
		top: 8px;
		right: 8px;
	}
}
</style>
