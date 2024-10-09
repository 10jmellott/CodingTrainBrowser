<script setup lang="ts">
withDefaults(defineProps<{ fill?: string; color?: string }>(), {
	fill: "#1374EF",
	color: "#fff",
});
</script>

<template>
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_18_164)">
			<path
				d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z"
				:fill
			/>
			<path
				d="M8 18.1176H14.8868L10.8359 28L24 13.8824H17.1132L21.1641 4L8 18.1176Z"
				:color
			/>
		</g>
		<defs>
			<clipPath id="clip0_18_164">
				<rect width="32" height="32" fill="white" />
			</clipPath>
		</defs>
	</svg>
</template>

<style scoped></style>
