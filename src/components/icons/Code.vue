<script setup lang="ts">
withDefaults(defineProps<{ fill?: string }>(), {
	fill: "#000",
});
</script>

<template>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.89 3L14.85 3.4L11.11 21L9.15002 20.6L12.89 3ZM19.59 12L16 8.41V5.58L22.42 12L16 18.41V15.58L19.59 12ZM1.58002 12L8.00002 5.58V8.41L4.41002 12L8.00002 15.58V18.41L1.58002 12Z"
			:fill
		/>
	</svg>
</template>

<style scoped></style>
