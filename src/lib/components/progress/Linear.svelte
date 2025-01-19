<script>
	import '@material/web/progress/linear-progress.js';

	let progress;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		trackColor = '',
		trackHeight = '4px',
		trackShape = '',
		activeIndicatorColor = '',
		activeIndicatorHeight = '4px',
		// Properties
		buffer = 0,
		value = 0,
		max = 1,
		indeterminate = false,
		fourColor = false
	} = $props();

	$effect(() => {
		if (trackColor) {
			progress.style.setProperty('--md-linear-progress-track-color', trackColor);
		}
		if (trackHeight !== '4px') {
			progress.style.setProperty('--md-linear-progress-track-height', trackHeight);
		}
		if (trackShape) {
			progress.style.setProperty('--md-linear-progress-track-shape', trackShape);
		}
		if (activeIndicatorColor) {
			progress.style.setProperty(
				'--md-linear-progress-active-indicator-color',
				activeIndicatorColor
			);
		}
		if (activeIndicatorHeight !== '4px') {
			progress.style.setProperty(
				'--md-linear-progress-active-indicator-height',
				activeIndicatorHeight
			);
		}
	});
</script>

<md-linear-progress
	bind:this={progress}
	aria-label={ariaLabel}
	{buffer}
	{value}
	{max}
	{indeterminate}
	{fourColor}
>
</md-linear-progress>
