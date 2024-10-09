<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
	<Card class="header">
		<img src="/logo.png" alt="Joshua Mellott-Lillie" height="64" width="64" />
		<h1>Coding Train Browser</h1>
	</Card>
</template>

<style scoped>
.header {
	font-size: 40px;
	display: flex;
	align-items: center;

	h1 {
		margin: auto;
	}
}
</style>
