<script>
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const copy = `©${new Date().getFullYear()}`;
</script>

<div id="root">
	<Header>Physicists</Header>
	<main>
		<slot />
	</main>
	<Footer>{copy}</Footer>
</div>

<style>
	#root {
		flex: 1;
	}
</style>
