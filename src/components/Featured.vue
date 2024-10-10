<script setup lang="ts">
import Button from "./Button.vue";
import Card from "./Card.vue";
import GitHub from "./icons/GitHub.vue";
import StackBlitz from "./icons/StackBlitz.vue";
import { ref, onMounted, watch } from "vue";
import p5 from "p5";

import { Challenge, importChallenge } from "../challenges";

const props = defineProps<{
	challenge: Challenge;
}>();

const container = ref<HTMLDivElement | null>(null);
let p5Instance: any;
async function updateChallenge() {
	const challenge = await importChallenge(props.challenge);

	if (container.value) {
		console.log(p5Instance);
		p5Instance?.remove();
		const p5Setup = (p5Context: any) => {
			const p5Props = Object.keys(challenge);
			for (let prop of p5Props) {
				p5Context[prop] = (e: any) => {
					// @ts-ignore
					challenge[prop].call(p5Context, e);
				};
			}
		};
		p5Instance = new p5(p5Setup, container.value);
	}
}

onMounted(updateChallenge);

// Watch for changes to the challenge prop
watch(() => props.challenge, updateChallenge);
</script>

<template>
	<Card class="featured">
		<div class="featured__text">
			<div class="featured__meta">
				<span class="featured__number">#{{ challenge.id }}</span>
				<span class="featured__date">{{ challenge.date }}</span>
			</div>
			<h3>{{ challenge.name }}</h3>
			<p>
				{{ challenge.description }}
			</p>
			<Button href="https://github.com/10jmellott/CodingTrainBrowser" :logo="GitHub" text="Open in GitHub" />
			<Button href="https://stackblitz.com/github/10jmellott/CodingTrainBrowser" :logo="StackBlitz"
				text="Open in StackBlitz" />
		</div>
		<div class="featured__player" ref="container"></div>
	</Card>
</template>

<style scoped>
.featured {
	display: grid;
	grid-template-columns: 1fr min-content;
	gap: 12px;

	h1 {
		margin: auto;
	}

	.featured__text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
	}

	.featured__meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		gap: 12px;
	}

	.featured__number {
		font-size: 24px;
	}

	.featured__player {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		overflow: hidden;
		flex-shrink: 0;
	}

	h3 {
		font-size: 32px;
		text-transform: uppercase;
		letter-spacing: 0.3rem;
	}

	p {
		margin-bottom: auto;
	}
}
</style>
