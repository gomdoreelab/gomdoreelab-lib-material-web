<script>
	import '@material/web/chips/filter-chip.js';

	let chip;
	let {
		ariaLabel = '',
		label = '',
		selectedContainerColor = '',
		outlineColor = '',
		containerShape = '',
		iconSize = '18px',
		labelTextColor = '',
		labelTextFont = '',
		elevated = false,
		removable = false,
		selected = false,
		hasSelectedIcon = false,
		disabled = false,
		softDisabled = false,
		alwaysFocusable = false,
		hasIcon = false,
		handleTrailingActionFocus,
		ariaLabelRemove,
		slotIcon
	} = $props();

	$effect(() => {
		if (selectedContainerColor) {
			chip.style.setProperty('--md-filter-chip-selected-container-color', selectedContainerColor);
		}
		if (outlineColor) {
			chip.style.setProperty('--md-assist-chip-outline-color', outlineColor);
		}
		if (containerShape) {
			chip.style.setProperty('--md-assist-chip-container-shape', containerShape);
		}
		if (iconSize !== '18px') {
			chip.style.setProperty('--md-assist-chip-icon-size', iconSize);
		}
		if (labelTextColor) {
			chip.style.setProperty('--md-assist-chip-label-text-color', labelTextColor);
		}
		if (labelTextFont) {
			chip.style.setProperty('--md-assist-chip-label-text-font', labelTextFont);
		}
	});
</script>

<md-filter-chip
	bind:this={chip}
	aria-label={ariaLabel}
	{label}
	{elevated}
	{removable}
	{selected}
	{hasSelectedIcon}
	{disabled}
	{softDisabled}
	{alwaysFocusable}
	{hasIcon}
	{handleTrailingActionFocus}
	{ariaLabelRemove}
>
	{@render slotIcon?.()}
</md-filter-chip>
