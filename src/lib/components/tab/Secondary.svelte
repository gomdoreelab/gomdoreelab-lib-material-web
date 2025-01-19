<script>
	import '@material/web/tabs/secondary-tab.js';

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
			tab.style.setProperty('--md-secondary-tab-container-color', containerColor);
		}
		if (labelTextFont) {
			tab.style.setProperty('--md-secondary-tab-label-text-font', labelTextFont);
		}
		if (activeIndicatorColor) {
			tab.style.setProperty('--md-secondary-tab-active-indicator-color', activeIndicatorColor);
		}
		if (iconColor) {
			tab.style.setProperty('--md-secondary-tab-icon-color', iconColor);
		}
		if (containerShape) {
			tab.style.setProperty('--md-secondary-tab-container-shape', containerShape);
		}
	});
</script>

<md-secondary-tab
	bind:this={tab}
	aria-label={ariaLabel}
	{isTab}
	{active}
	{hasIcon}
	{iconOnly}
	{selected}
>
	{@render slotLabel?.()}
	{@render slotIcon?.()}
</md-secondary-tab>
