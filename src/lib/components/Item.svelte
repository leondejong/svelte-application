<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';

	import { list } from '$lib/stores/list.js';

	export let item = {};

	function update(name, value) {
		list.update({ ...item, [name]: value });
	}

	function remove() {
		list.remove(item);
	}

	const inputStyle = `
    width: calc(100% - 0.5rem);
    margin: 0.25rem;
  `;
</script>

<tr class="row">
	<td class="cell">{item.id}</td>
	<td class="cell">
		<Checkbox
			checked={item.active}
			color="white"
			on:input={(e) => update('active', e.target.checked)}
		/>
	</td>
	<td class="cell">
		<Input
			type="text"
			placeholder="Name"
			background="transparent"
			border="white"
			color="white"
			value={item.name}
			style={inputStyle}
			on:input={(e) => update('name', e.target.value)}
		/>
	</td>
	<td class="cell">
		<a href={`detail/${item.id}`}>Detail</a>
	</td>
	<td class="cell">
		<a href={`edit/${item.id}`}>
			<Button type="button" background="blue" border="blue">Edit</Button>
		</a>
		<Button type="button" on:click={remove} background="red" border="red">Remove</Button>
	</td>
</tr>

<style>
	.row {
		text-align: center;
		background: var(--dark-tint);
	}

	.cell {
		border-radius: 0.25rem;
	}
</style>
