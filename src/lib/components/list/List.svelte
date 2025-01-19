<script>
	import '@material/web/list/list.js';

	let list;
	let {
		// Tokens
		containerColor = '',
		// Custom Tokens
		maxWidth = '',
		// Slots
		slotItems
	} = $props();

	$effect(() => {
		if (containerColor) {
			list.style.setProperty('--md-list-container-color', containerColor);
		}
		if (maxWidth) {
			list.style.setProperty('max-width', maxWidth);
		}
	});
</script>

<md-list bind:this={list}>
	{@render slotItems?.()}
</md-list>
