<script>
	import '@material/web/select/outlined-select.js';

	let select;
	let {
		// Tokens
		textFieldOutlineColor = '',
		textFieldContainerShape = '',
		textFieldInputTextColor = '',
		textFieldInputTextFont = '',
		// Properties
		quick = false,
		required = false,
		errorText = '',
		label = '',
		noAsterisk = false,
		supportingText = '',
		error = false,
		menuPositioning = 'popover',
		clampMenuWidth = false,
		typeaheadDelay = 200, // DEFAULT_TYPEAHEAD_BUFFER_TIME
		hasLeadingIcon = false,
		displayText = '',
		menuAlign = 'start',
		value,
		selectedIndex,
		disabled,
		name,
		// Slots
		slotOption,
		// Events
		onchange,
		oninput
	} = $props();

	$effect(() => {
		if (textFieldOutlineColor) {
			select.style.setProperty(
				'--md-outlined-select-text-field-outline-color',
				textFieldOutlineColor
			);
		}
		if (textFieldContainerShape) {
			select.style.setProperty(
				'--md-outlined-select-text-field-container-shape',
				textFieldContainerShape
			);
		}
		if (textFieldInputTextColor) {
			select.style.setProperty(
				'--md-outlined-select-text-field-input-text-color',
				textFieldInputTextColor
			);
		}
		if (textFieldInputTextFont) {
			select.style.setProperty(
				'--md-outlined-select-text-field-input-text-font',
				textFieldInputTextFont
			);
		}
	});
</script>

<md-outlined-select
	bind:this={select}
	{quick}
	{required}
	{errorText}
	{label}
	{noAsterisk}
	{supportingText}
	{error}
	{menuPositioning}
	{clampMenuWidth}
	{typeaheadDelay}
	{hasLeadingIcon}
	{displayText}
	{menuAlign}
	{value}
	{selectedIndex}
	{disabled}
	{name}
	{onchange}
	{oninput}
>
	{@render slotOption?.()}
</md-outlined-select>
