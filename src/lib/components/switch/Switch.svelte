<script>
	import '@material/web/switch/switch.js';

	// 'switch' is a keyword.
	let _switch;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		handleColor = '',
		handleShape = '',
		trackColor = '',
		trackShape = '',
		selectedHandleColor = '',
		selectedTrackColor = '',
		// Properties
		selected = false,
		icons = false,
		showOnlySelectedIcon = false,
		required = false,
		value = 'on',
		disabled,
		name,
		// Events
		oninput,
		onchange
	} = $props();

	$effect(() => {
		if (handleColor) {
			_switch.style.setProperty('--md-switch-handle-color', handleColor);
		}
		if (handleShape) {
			_switch.style.setProperty('--md-switch-handle-shape', handleShape);
		}
		if (trackColor) {
			_switch.style.setProperty('--md-switch-track-color', trackColor);
		}
		if (trackShape) {
			_switch.style.setProperty('--md-switch-track-shape', trackShape);
		}
		if (selectedHandleColor) {
			_switch.style.setProperty('--md-switch-selected-handle-color', selectedHandleColor);
		}
		if (selectedTrackColor) {
			_switch.style.setProperty('--md-switch-selected-track-color', selectedTrackColor);
		}
	});
</script>

<md-switch
	bind:this={_switch}
	aria-label={ariaLabel}
	{selected}
	{icons}
	{showOnlySelectedIcon}
	{required}
	{value}
	{disabled}
	{name}
	{oninput}
	{onchange}
>
</md-switch>
