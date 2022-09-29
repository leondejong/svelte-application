<script>
	export let checked = false;
	export let value = '';
	export let style = '';
	export let color = 'medium';
</script>

<input
	bind:checked
	on:input
	{value}
	type="checkbox"
	class="checkbox"
	style="
    {style}
    --color: var(--{color});
    --color-tint: var(--{color}-tint);
  "
/>

<style>
	.checkbox {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		width: 1rem;
		height: 1rem;
		margin: 0;
		outline: none;
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	.checkbox::before,
	.checkbox::after {
		content: '';
		position: absolute;
	}

	.checkbox::before {
		display: inline-block;
		top: 0;
		left: 0;
		width: 0.75rem;
		height: 0.75rem;
		border: 0.125rem solid var(--color);
	}

	.checkbox::after {
		display: none;
		top: 0.25rem;
		left: 0.25rem;
		width: 0.5rem;
		height: 0.5rem;
		background: var(--color);
	}

	.checkbox:hover::before,
	.checkbox:focus::before,
	.checkbox:active::before {
		border: 0.125rem solid var(--color-tint);
	}

	.checkbox:hover::after,
	.checkbox:focus::after,
	.checkbox:active::after {
		background: var(--color-tint);
	}

	.checkbox:checked::after {
		display: inline-block;
	}

	.checkbox::before,
	.checkbox::after {
		border-radius: 10%;
	}

	.checkbox:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
