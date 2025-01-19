<script>
	import '@material/web/tabs/primary-tab.js';

	let tab;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		containerColor = '',
		labelTextFont = '',
		activeIndicatorColor = '',
		iconColor = '',
		containerShape = '',
		// Properties
		inlineIcon = false,
		isTab = false,
		active = false,
		hasIcon = false,
		iconOnly = false,
		selected,
		// Slots
		slotLabel,
		slotIcon
	} = $props();

	$effect(() => {
		if (containerColor) {
			tab.style.setProperty('--md-primary-tab-container-color', containerColor);
		}
		if (labelTextFont) {
			tab.style.setProperty('--md-primary-tab-label-text-font', labelTextFont);
		}
		if (activeIndicatorColor) {
			tab.style.setProperty('--md-primary-tab-active-indicator-color', activeIndicatorColor);
		}
		if (iconColor) {
			tab.style.setProperty('--md-primary-tab-icon-color', iconColor);
		}
		if (containerShape) {
			tab.style.setProperty('--md-primary-tab-container-shape', containerShape);
		}
	});
</script>

<md-primary-tab
	bind:this={tab}
	aria-label={ariaLabel}
	{inlineIcon}
	{isTab}
	{active}
	{hasIcon}
	{iconOnly}
	{selected}
>
	{@render slotLabel?.()}
	{@render slotIcon?.()}
</md-primary-tab>
