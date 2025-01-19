<script>
	import '@material/web/radio/radio.js';

	let radio;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		iconColor = '',
		selectedIconColor = '',
		iconSize = '20px',
		// Properties
		required = false,
		value = 'on',
		checked,
		disabled,
		name,
		// Events
		oninput,
		onchange
	} = $props();

	$effect(() => {
		if (iconColor) {
			radio.style.setProperty('--md-radio-icon-color', iconColor);
		}
		if (selectedIconColor) {
			radio.style.setProperty('--md-radio-selected-icon-color', selectedIconColor);
		}
		if (iconSize) {
			radio.style.setProperty('--md-radio-icon-size', iconSize);
		}
	});
</script>

<md-radio
	bind:this={radio}
	aria-label={ariaLabel}
	{required}
	{value}
	{checked}
	{disabled}
	{name}
	{oninput}
	{onchange}
>
</md-radio>
