<script>
	import { page } from '$app/stores';
	import Status from '$lib/components/Status.svelte';
</script>

<Status content={`${$page.status}: ${$page.error.message}`} />
