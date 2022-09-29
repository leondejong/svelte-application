<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	import { list } from '$lib/stores/list.js';
	import Status from '$lib/components/Status.svelte';
	import Input from '$lib/components/Input.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';

	const item = $list.items.find((entry) => entry.id === Number($page.params.id));

	const inputStyle = `
    display: block;
    width: 100%;
    margin: 1rem 0;
  `;

	const textareaStyle = `
    height: 25rem;
  `;

	function update(name, value) {
		list.update({ ...item, [name]: value });
	}
</script>

{#if item}
	<section class="edit">
		<h3 class="title">
			{item.name}
		</h3>
		<strong class="id">
			Id: {item.id}
		</strong>
		<strong class="status">
			Active:
			<Checkbox
				checked={item.active}
				color="white"
				on:input={(e) => update('active', e.target.checked)}
			/>
		</strong>
		<Input
			style={inputStyle}
			value={item.name}
			placeholder="Name"
			on:input={(e) => update('name', e.target.value)}
		/>
		<Input
			style={inputStyle}
			value={item.link}
			placeholder="Link"
			on:input={(e) => update('link', e.target.value)}
		/>
		<TextArea
			style={inputStyle + textareaStyle}
			value={item.content}
			placeholder="Content"
			on:input={(e) => update('content', e.target.value)}
		/>
		<a class="navigation" href="/">Overview</a>
	</section>
{:else if browser}
	<Status content="404: Not Found" />
{/if}

<style>
	.edit {
		margin: 0 25%;
	}

	.title {
		margin: 1rem;
		text-align: center;
	}

	.id {
		display: block;
		margin: 1rem 0;
	}

	.status {
		display: block;
		margin: 1rem 0;
	}

	.navigation {
		position: fixed;
		right: 0;
		bottom: 0;
		width: 100%;
		padding: 1rem 1rem 1rem 2rem;
		text-align: left;
		z-index: 1;
	}
</style>
