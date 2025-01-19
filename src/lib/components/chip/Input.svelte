<script>
	import '@material/web/chips/input-chip.js';

	let chip;
	let {
		ariaLabel = '',
		label = '',
		outlineColor = '',
		containerShape = '',
		iconSize = '18px',
		labelTextColor = '',
		labelTextFont = '',
		avatar = false,
		href = '',
		target = '',
		removeOnly = false,
		selected = false,
		disabled = false,
		softDisabled = false,
		alwaysFocusable = false,
		hasIcon = false,
		handleTrailingActionFocus,
		ariaLabelRemove,
		slotIcon
	} = $props();

	$effect(() => {
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

<md-input-chip
	bind:this={chip}
	aria-label={ariaLabel}
	{label}
	{avatar}
	{href}
	{target}
	{removeOnly}
	{selected}
	{disabled}
	{softDisabled}
	{alwaysFocusable}
	{hasIcon}
	{handleTrailingActionFocus}
	{ariaLabelRemove}
>
	{@render slotIcon?.()}
</md-input-chip>
