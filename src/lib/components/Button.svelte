<script>
	export let type = 'button';
	export let style = '';
	export let background = 'medium';
	export let border = 'medium';
	export let color = 'white';
</script>

<button
	on:click
	{type}
	class="button"
	style="
    {style}
    --background: var(--{background});
    --border: var(--{border});
    --color: var(--{color});
    --background-tint: var(--{background}-tint);
    --border-tint: var(--{border}-tint);
  "
>
	<slot />
</button>

<style>
	.button {
		padding: 0.4375rem 0.9375rem;
		border: 0.0625rem solid var(--border);
		border-radius: 0.25rem;
		background: var(--background);
		color: var(--color);
		box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
		cursor: pointer;
	}

	.button:hover,
	.button:focus,
	.button:active {
		background: var(--background-tint);
		border-color: var(--border-tint);
	}

	.button:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
