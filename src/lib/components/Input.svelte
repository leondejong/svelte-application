<script>
	export let value = '';
	export let placeholder = '';
	export let style = '';
	export let background = 'white';
	export let border = 'medium';
	export let color = 'dark';
	export let label = 'medium-tint';
</script>

<input
	bind:value
	on:input
	type="text"
	class="input"
	{placeholder}
	style="
    {style}
    --background: var(--{background});
    --border: var(--{border});
    --color: var(--{color});
    --label: var(--{label});
    --background-tint: var(--{background}-tint);
    --border-tint: var(--{border}-tint);
  "
/>

<style>
	.input {
		min-width: 16rem;
		padding: 0.4375rem 0.9375rem;
		border: 0.0625rem solid var(--border);
		outline: none;
		border-radius: 0.25rem;
		text-decoration: none;
		background: var(--background);
		color: var(--color);
		box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
	}

	.input:hover,
	.input:focus,
	.input:active {
		background: var(--background-tint);
		border-color: var(--border-tint);
	}

	.input:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.input::placeholder {
		color: var(--label);
	}
</style>
