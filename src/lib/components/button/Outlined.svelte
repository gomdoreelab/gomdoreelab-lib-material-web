<script>
	import '@material/web/button/outlined-button.js';

	let button;
	let {
		ariaLabel = '',
		text = '',
		containerColor = '',
		containerShape = '',
		textColor = '',
		textFont = '',
		disabled = false,
		softDisabled = false,
		href = '',
		target = '',
		trailingIcon = false,
		hasIcon = false,
		type = 'button',
		value = '',
		name = '',
		onclick
	} = $props();

	$effect(() => {
		if (containerColor) {
			button.style.setProperty('--md-outlined-button-container-color', containerColor);
		}
		if (containerShape) {
			button.style.setProperty('--md-outlined-button-container-shape', containerShape);
		}
		if (textColor) {
			button.style.setProperty('--md-outlined-button-label-text-color', textColor);
		}
		if (textFont) {
			button.style.setProperty('--md-outlined-button-label-text-font', textFont);
		}
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<md-outlined-button
	bind:this={button}
	aria-label={ariaLabel}
	{disabled}
	{softDisabled}
	{href}
	{target}
	{trailingIcon}
	{hasIcon}
	{type}
	{value}
	{name}
	{onclick}
>
	{text}
</md-outlined-button>
