<script>
	import '@material/web/menu/menu.js';
	import '@material/web/menu/sub-menu.js';
	import '@material/web/menu/menu-item.js';

	let menu;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		containerColor = '',
		containerShape = '',
		// Properties
		anchorCorner = 'Corner.START_END',
		menuCorner = 'Corner.START_START',
		hoverOpenDelay = 400,
		hoverCloseDelay = 400,
		isSubmenu = true,
		// Slots
		slotItem,
		slotMenu
	} = $props();

	$effect(() => {
		if (containerColor) {
			menu.style.setProperty('--md-menu-container-color', containerColor);
		}
		if (containerShape) {
			menu.style.setProperty('--md-menu-container-shape', containerShape);
		}
	});
</script>

<md-sub-menu
	bind:this={menu}
	aria-label={ariaLabel}
	{anchorCorner}
	{menuCorner}
	{hoverOpenDelay}
	{hoverCloseDelay}
	{isSubmenu}
>
	{@render slotItem?.()}
	{@render slotMenu?.()}
</md-sub-menu>
