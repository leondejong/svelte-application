<script>
	import Item from '$lib/components/Item.svelte';

	export let items = [];
</script>

<table class="table">
	<thead>
		<tr>
			<th>Id</th>
			<th>active</th>
			<th>Name</th>
			<th>Detail</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each items as item}
			<Item {item} />
		{/each}
	</tbody>
</table>

<style>
	.table {
		width: 100%;
		border-spacing: 0.1875rem;
	}
</style>
