<footer class="footer">
	<p class="note">
		<slot />
	</p>
</footer>

<style>
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: right;
	}

	.note {
		margin: 1rem 1rem 1rem 2rem;
		font-size: 1rem;
	}
</style>
