<script>
	import '@material/web/menu/menu-item.js';

	let item;
	let {
		// Tokens
		containerColor = '',
		selectedContainerColor = '',
		// Properties
		disabled = false,
		type = 'menuitem',
		href = '',
		target = '',
		keepOpen = false,
		selected = false,
		typeaheadText,
		// Slots
		slot,
		slotHeadline,
		slotEnd
	} = $props();

	$effect(() => {
		// Tokens
		if (containerColor) {
			item.style.setProperty('--md-menu-item-container-color', containerColor);
		}
		if (selectedContainerColor) {
			item.style.setProperty('--md-menu-item-selected-container-color', selectedContainerColor);
		}
		// Slots
		if (slot) {
			item.setAttribute('slot', slot);
		}
	});
</script>

<md-menu-item
	bind:this={item}
	{disabled}
	{type}
	{href}
	{target}
	{keepOpen}
	{selected}
	{typeaheadText}
>
	{@render slotHeadline?.()}
	{@render slotEnd?.()}
</md-menu-item>
