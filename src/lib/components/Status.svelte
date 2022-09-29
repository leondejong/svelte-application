<script>
	export let content;
</script>

<section class="status">{content}</section>

<style>
	.status {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 3rem;
	}
</style>
