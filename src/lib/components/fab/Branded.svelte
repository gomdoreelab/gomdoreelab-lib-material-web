<script>
	import '@material/web/fab/branded-fab.js';

	let fab;
	let {
		ariaLabel = '',
		brandedContainerColor = '',
		brandedContainerShape = '',
		brandedIconSize = '36px',
		branedLabelTextFont = '',
		labelTextFont = '',
		variant = 'surface',
		size = 'medium',
		label = '',
		lowered = false,
		slotIcon
	} = $props();

	$effect(() => {
		if (brandedContainerColor) {
			fab.style.setProperty('--md-fab-branded-container-color', brandedContainerColor);
		}
		if (brandedContainerShape) {
			fab.style.setProperty('--md-fab-branded-container-shape', brandedContainerShape);
		}
		if (brandedIconSize !== '36px') {
			fab.style.setProperty('--md-fab-branded-icon-size', brandedIconSize);
		}
		if (branedLabelTextFont) {
			fab.style.setProperty('--md-fab-branded-label-text-font', branedLabelTextFont);
		}
		if (labelTextFont) {
			fab.style.setProperty('--md-fab-label-text-font', labelTextFont);
		}
	});
</script>

<md-branded-fab bind:this={fab} aria-label={ariaLabel} {variant} {size} {label} {lowered}>
	{@render slotIcon?.()}
</md-branded-fab>
