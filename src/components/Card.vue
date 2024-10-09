<script setup lang="ts"></script>

<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style scoped>
.card {
	background-color: var(--background-alt);
	border-radius: 8px;
	padding: 12px;
}
</style>
