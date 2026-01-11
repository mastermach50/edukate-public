<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";

	let { children } = $props();
</script>

<Navbar />

<style>
	:root {
		--base-color: #121212;
		--on-base-color: #ffffff;

		--primary-color: #1e88e5;
		--on-primary-color: #ffffff;
		--secondary-color: #c2185b;
		--on-secondary-color: #ffffff;
	}

	:global(body) {
		margin: 0;
		font-family: system-ui, sans-serif;

		color: var(--on-base-color);
		background-color: var(--base-color);
	}
</style>


{@render children()}
