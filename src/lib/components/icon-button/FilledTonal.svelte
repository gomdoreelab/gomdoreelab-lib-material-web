<script>
	import '@material/web/iconbutton/filled-tonal-icon-button.js';

	let iconButton;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		selectedContainerColor = '',
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
		if (selectedContainerColor) {
			iconButton.style.setProperty(
				'--md-filled-tonal-icon-button-selected-container-color',
				selectedContainerColor
			);
		}
		if (containerShape) {
			iconButton.style.setProperty('--md-filled-tonal-icon-button-container-shape', containerShape);
		}
		if (containerWidth !== '40px') {
			iconButton.style.setProperty('--md-filled-tonal-icon-button-container-width', containerWidth);
		}
		if (containerHeight !== '40px') {
			iconButton.style.setProperty(
				'--md-filled-tonal-icon-button-container-height',
				containerHeight
			);
		}
		if (iconSize !== '24px') {
			iconButton.style.setProperty('--md-filled-tonal-icon-button-icon-size', iconSize);
		}
	});
</script>

<md-filled-tonal-icon-button
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
</md-filled-tonal-icon-button>
