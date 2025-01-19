<script>
	import '@material/web/chips/suggestion-chip.js';

	let chip;
	let {
		ariaLabel = '',
		label = '',
		outlineColor = '',
		containerShape = '',
		iconSize = '18px',
		labelTextColor = '',
		labelTextFont = '',
		elevated = false,
		href = '',
		target = '',
		disabled = false,
		softDisabled = false,
		alwaysFocusable = false,
		hasIcon = false,
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

<md-suggestion-chip
	bind:this={chip}
	aria-label={ariaLabel}
	{label}
	{elevated}
	{href}
	{target}
	{disabled}
	{softDisabled}
	{alwaysFocusable}
	{hasIcon}
>
	{@render slotIcon?.()}
</md-suggestion-chip>
