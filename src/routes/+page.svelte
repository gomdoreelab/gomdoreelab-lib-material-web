<script>
	import { setColorSchemeHTML, ListSubHeader } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		setColorSchemeHTML('#0099ff');
	});
</script>

<ListSubHeader>Hello</ListSubHeader>
