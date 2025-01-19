<script>
	import '@material/web/icon/icon.js';

	let icon;
	let {
		// Tokens
		font = 'Material Symbols Outlined',
		size = '24px',
		// Custom Tokens
		filled = 0, //range from 0 to 1
		// Slot
		slot,
		slotIcon
	} = $props();

	$effect(() => {
		// Tokens
		if (font) {
			icon.style.setProperty('--md-icon-font', font);
		}
		if (size !== '24px') {
			icon.style.setProperty('--md-icon-size', size);
		}
		if (filled !== 0) {
			icon.style.setProperty('font-variation-settings', `'FILL' ${filled}`);
		}
		// Slot
		if (slot) {
			icon.setAttribute('slot', slot);
		}
	});
</script>

<link
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1"
	rel="stylesheet"
/>
<link
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL@20..48,100..700,0..1"
	rel="stylesheet"
/>
<link
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL@20..48,100..700,0..1"
	rel="stylesheet"
/>

<md-icon bind:this={icon} {filled}>
	{@render slotIcon?.()}
</md-icon>
