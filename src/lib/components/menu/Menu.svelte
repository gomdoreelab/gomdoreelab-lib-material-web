<script>
	import '@material/web/menu/menu.js';

	let menu;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		containerColor = '',
		containerShape = '',
		// Properties
		anchor = '',
		positioning = 'absolute',
		quick = false,
		hasOverflow = false,
		open = false,
		xOffset = 0,
		yOffset = 0,
		noHorizontalFlip = false,
		noVerticalFlip = false,
		typeaheadDelay = 200,
		anchorCorner = 'Corner.END_START',
		menuCorner = 'Corner.START_START',
		stayOpenOnOutsideClick = false,
		stayOpenOnFocusout = false,
		skipRestoreFocus = false,
		defaultFocus = 'FocusState.FIRST_ITEM',
		noNavigationWrap = false,
		isSubmenu = false,
		typeaheadController,
		// Slots
		slot,
		slotItem,
		slotMenu
	} = $props();

	$effect(() => {
		// Tokens
		if (containerColor) {
			menu.style.setProperty('--md-menu-container-color', containerColor);
		}
		if (containerShape) {
			menu.style.setProperty('--md-menu-container-shape', containerShape);
		}
		// Slots
		if (slot) {
			menu.setAttribute('slot', slot);
		}
	});
</script>

<md-menu
	bind:this={menu}
	aria-label={ariaLabel}
	{anchor}
	{positioning}
	{quick}
	{hasOverflow}
	{open}
	{xOffset}
	{yOffset}
	{noHorizontalFlip}
	{noVerticalFlip}
	{typeaheadDelay}
	{anchorCorner}
	{menuCorner}
	{stayOpenOnOutsideClick}
	{stayOpenOnFocusout}
	{skipRestoreFocus}
	{defaultFocus}
	{noNavigationWrap}
	{isSubmenu}
	{typeaheadController}
>
	{@render slotItem?.()}
	{@render slotMenu?.()}
</md-menu>
