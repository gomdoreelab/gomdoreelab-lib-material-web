<script>
	import '@material/web/button/text-button.js';

	let button;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		textColor = '',
		textFont = '',
		// Properties
		disabled = false,
		softDisabled = false,
		href = '',
		target = '',
		trailingIcon = false,
		hasIcon = false,
		type = 'button',
		value = '',
		name = '',
		// Events
		onclick,
		// Slots
		slotLabel,
		slotIcon,
		// And others..
		id = ''
	} = $props();

	$effect(() => {
		if (textColor) {
			button.style.setProperty('--md-text-button-label-text-color', textColor);
		}
		if (textFont) {
			button.style.setProperty('--md-text-button-label-text-font', textFont);
		}
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<md-text-button
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
	{id}
>
	{@render slotLabel?.()}
	{@render slotIcon?.()}
</md-text-button>
