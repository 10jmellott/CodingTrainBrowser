<script setup lang="ts">
import Card from "./Card.vue";
defineProps<{
	href: string;
	logo: any;
	text: string;
}>();
</script>

<template>
	<a :href target="_blank">
		<Card class="button">
			<component :is="logo" height="18" width="18" />
			<span>{{ text }}</span>
		</Card>
	</a>
</template>

<style scoped>
.button {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px;
	background: white;
	color: black;
	font-size: 14px;

	span {
		padding-left: 8px;
		border-left: 1px solid var(--dim-foreground);
	}
}
</style>
