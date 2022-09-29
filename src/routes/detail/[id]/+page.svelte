<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	import { list } from '$lib/stores/list.js';
	import Status from '$lib/components/Status.svelte';

	const item = $list.items.find((entry) => entry.id === Number($page.params.id));
</script>

{#if item}
	<section class="detail">
		<h3 class="title">{item.name}</h3>
		<strong class="id">Id: {item.id}</strong>
		<strong class="status">Active: {String(item.active)}</strong>
		<a class="anchor" href={item.link} target="_blank">
			{item.link}
		</a>
		<p class="content">{item.content}</p>
		<a class="navigation" href="/">Overview</a>
	</section>
{:else if browser}
	<Status content="404: Not Found" />
{/if}

<style>
	.detail {
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

	.anchor {
		display: block;
		margin: 1rem 0;
	}

	.content {
		white-space: pre-wrap;
		margin: 1rem 0 4rem 0;
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
