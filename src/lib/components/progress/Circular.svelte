<script>
	import '@material/web/progress/circular-progress.js';

	let progress;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		activeIndicatorColor = '',
		size = '48px',
		activeIndicatorWidth = 8.3333,
		// Properties
		value = 0,
		max = 1,
		indeterminate = false,
		fourColor = false
	} = $props();

	$effect(() => {
		if (activeIndicatorColor) {
			progress.style.setProperty(
				'--md-circular-progress-active-indicator-color',
				activeIndicatorColor
			);
		}
		if (size !== '48px') {
			progress.style.setProperty('--md-circular-progress-size', size);
		}
		if (activeIndicatorWidth !== 8.3333) {
			progress.style.setProperty(
				'--md-circular-progress-active-indicator-width',
				activeIndicatorWidth
			);
		}
	});
</script>

<md-circular-progress
	bind:this={progress}
	aria-label={ariaLabel}
	{value}
	{max}
	{indeterminate}
	{fourColor}
>
</md-circular-progress>
