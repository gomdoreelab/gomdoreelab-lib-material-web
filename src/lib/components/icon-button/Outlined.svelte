<script>
	import '@material/web/iconbutton/outlined-icon-button.js';

	let iconButton;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		outlineColor = '',
		outlineWidth = '1px',
		containerShape = '',
		containerWidth = '40px',
		containerHeight = '40px',
		iconSize = '24px',
		// Properties
		disabled = false,
		softDisabled = false,
		flipIconInRtl = false,
		href = '',
		target = '',
		ariaLabelSelected = '',
		toggle = false,
		selected = false,
		type = 'button',
		value = '',
		name,
		form,
		labels,
		// Events
		oninput,
		onchange,
		// Slots
		slotIcon,
		slotSelected
	} = $props();

	$effect(() => {
		if (outlineColor) {
			iconButton.style.setProperty('--md-outlined-icon-button-outline-color', outlineColor);
		}
		if (outlineWidth !== '1px') {
			iconButton.style.setProperty('--md-outlined-icon-button-outline-width', outlineWidth);
		}
		if (containerShape) {
			iconButton.style.setProperty('--md-outlined-icon-button-container-shape', containerShape);
		}
		if (containerWidth !== '40px') {
			iconButton.style.setProperty('--md-outlined-icon-button-container-width', containerWidth);
		}
		if (containerHeight !== '40px') {
			iconButton.style.setProperty('--md-outlined-icon-button-container-height', containerHeight);
		}
		if (iconSize !== '24px') {
			iconButton.style.setProperty('--md-outlined-icon-button-icon-size', iconSize);
		}
	});
</script>

<md-outlined-icon-button
	bind:this={iconButton}
	aria-label={ariaLabel}
	{disabled}
	{softDisabled}
	{flipIconInRtl}
	{href}
	{target}
	{ariaLabelSelected}
	{toggle}
	{selected}
	{type}
	{value}
	{name}
	{form}
	{labels}
	{oninput}
	{onchange}
>
	{@render slotIcon?.()}
	{@render slotSelected?.()}
</md-outlined-icon-button>
