<script>
	import { list } from '$lib/stores/list.js';

	import List from '$lib/components/List.svelte';
	import Button from '$lib/components/Button.svelte';

	const buttonStyle = `
    margin: 0.25rem;
  `;

	function clear() {
		if (window.confirm('Are you sure you want to clear all items?')) {
			list.clear();
		}
	}

	function example() {
		if (window.confirm('Are you sure you want to replace all items by the example?')) {
			list.example();
		}
	}

	function add() {
		list.add({
			id: 0,
			name: 'name',
			link: 'link',
			content: 'content',
			active: false
		});
	}
</script>

<section class="overview">
	<div class="actions">
		<Button type="button" style={buttonStyle} on:click={example}>Example</Button>
		<Button type="button" style={buttonStyle} on:click={clear}>Clear</Button>
	</div>
	<div class="list">
		<List items={$list.items} />
	</div>
	<div class="actions">
		<Button type="button" background="cyan" border="cyan" style={buttonStyle} on:click={add}>
			Add
		</Button>
	</div>
</section>

<style>
	.overview {
		margin: 0 12.5%;
	}

	.actions {
		display: flex;
		justify-content: right;
		margin: 1rem 0;
	}
</style>
