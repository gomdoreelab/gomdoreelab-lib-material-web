<script>
	import '@material/web/fab/fab.js';

	let fab;
	let {
		ariaLabel = '',
		containerColor = '',
		loweredContainerColor = '',
		containerShape = '',
		iconColor = '',
		iconSize = '24px',
		smallContainerShpae = '',
		smallIconSize = '24px',
		largeContainerShape = '',
		largeIconSize = '36px',
		labelTextFont = '',
		variant = 'surface',
		size = 'medium',
		label = '',
		lowered = false,
		slotIcon
	} = $props();

	$effect(() => {
		if (containerColor) {
			fab.style.setProperty('--md-fab-container-color', containerColor);
		}
		if (loweredContainerColor) {
			fab.style.setProperty('--md-fab-lowered-container-color', loweredContainerColor);
		}
		if (containerShape) {
			fab.style.setProperty('--md-fab-container-shape', containerShape);
		}
		if (iconColor) {
			fab.style.setProperty('--md-fab-icon-color', iconColor);
		}
		if (iconSize !== '24px') {
			fab.style.setProperty('--md-fab-icon-size', iconSize);
		}
		if (smallContainerShpae) {
			fab.style.setProperty('--md-fab-small-container-shape', smallContainerShpae);
		}
		if (smallIconSize !== '24px') {
			fab.style.setProperty('--md-fab-small-icon-size', smallIconSize);
		}
		if (largeContainerShape) {
			fab.style.setProperty('--md-fab-large-container-shape', largeContainerShape);
		}
		if (largeIconSize !== '36px') {
			fab.style.setProperty('--md-fab-large-icon-size', largeIconSize);
		}
		if (labelTextFont) {
			fab.style.setProperty('--md-fab-label-text-font', labelTextFont);
		}
	});
</script>

<md-fab bind:this={fab} aria-label={ariaLabel} {variant} {size} {label} {lowered}>
	{@render slotIcon?.()}
</md-fab>
