<script>
	import '@material/web/slider/slider.js';

	let slider;
	let {
		// Tokens
		activeTractColor = '',
		activeTrackShape = '',
		inactiveTrackColor = '',
		inactiveTrackShape = '',
		handleColor = '',
		handleShape = '',
		// Properties
		min = 0,
		max = 100,
		value,
		valueStart,
		valueEnd,
		valueLabel = '',
		valueLabelStart = '',
		valueLabelEnd = '',
		ariaLabelStart = '',
		ariaValueTextStart = '',
		ariaLabelEnd = '',
		ariaValueTextEnd = '',
		step = 1,
		ticks = false,
		labeled = false,
		range = false,
		disabled,
		name,
		nameStart,
		nameEnd,
		// Events
		onchange,
		oninput
	} = $props();

	$effect(() => {
		if (activeTractColor) {
			slider.style.setProperty('--md-slider-active-track-color', activeTractColor);
		}
		if (activeTrackShape) {
			slider.style.setProperty('--md-slider-active-track-shape', activeTrackShape);
		}
		if (inactiveTrackColor) {
			slider.style.setProperty('--md-slider-inactive-track-color', inactiveTrackColor);
		}
		if (inactiveTrackShape) {
			slider.style.setProperty('--md-slider-inactive-track-shape', inactiveTrackShape);
		}
		if (handleColor) {
			slider.style.setProperty('--md-slider-handle-color', handleColor);
		}
		if (handleShape) {
			slider.style.setProperty('--md-slider-handle-shape', handleShape);
		}
	});
</script>

<md-slider
	bind:this={slider}
	{min}
	{max}
	{value}
	{valueStart}
	{valueEnd}
	{valueLabel}
	{valueLabelStart}
	{valueLabelEnd}
	{ariaLabelStart}
	{ariaValueTextStart}
	{ariaLabelEnd}
	{ariaValueTextEnd}
	{step}
	{ticks}
	{labeled}
	{range}
	{disabled}
	{name}
	{nameStart}
	{nameEnd}
	{onchange}
	{oninput}
></md-slider>
