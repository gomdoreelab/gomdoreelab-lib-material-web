<script>
	import '@material/web/iconbutton/icon-button.js';

	let iconButton;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		iconColor = '',
		stateLayerShape = '',
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
		if (iconColor) {
			iconButton.style.setProperty('--md-icon-button-icon-color', iconColor);
		}
		if (stateLayerShape) {
			iconButton.style.setProperty('--md-icon-button-state-layer-shape', stateLayerShape);
		}
		if (iconSize !== '24px') {
			iconButton.style.setProperty('--md-icon-button-icon-size', iconSize);
		}
	});
</script>

<md-icon-button
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
</md-icon-button>
