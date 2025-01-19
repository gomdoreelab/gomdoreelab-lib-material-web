<script>
	import '@material/web/textfield/outlined-text-field.js';

	let field;
	let {
		// Accessibility
		ariaLabel = '',
		// Tokens
		containerShape = '',
		focusOutlineColor = '',
		inputTextFont = '',
		labelTextFont = '',
		// Properties
		error = false,
		errorText = '',
		label = '',
		noAsterisk = false,
		required = false,
		value = '',
		prefixText = '',
		suffixText = '',
		hasLeadingIcon = false,
		hasTrailingIcon = false,
		supportingText = '',
		textDirection = '',
		rows = 2,
		cols = 20,
		inputMode = '',
		max = '',
		maxLength = -1,
		min = '',
		minLength = -1,
		noSpinner = false,
		pattern = '',
		placeholder = '',
		readOnly = false,
		multiple = false,
		step = '',
		type = 'text',
		autocomplete = '',
		disabled,
		name,
		selectionDirection,
		selectionEnd,
		selectionStart,
		valueAsNumber,
		valueAsDate,
		// Events
		onselect,
		onchange,
		oninput,
		// Slots
		slotLeadingIcon,
		slotTrailingIcon
	} = $props();

	$effect(() => {
		if (containerShape) {
			field.style.setProperty('--md-outlined-text-field-container-shape', containerShape);
		}
		if (focusOutlineColor) {
			field.style.setProperty('--md-outlined-text-field-focus-outline-color', focusOutlineColor);
		}
		if (inputTextFont) {
			field.style.setProperty('--md-outlined-text-field-input-text-font', inputTextFont);
		}
		if (labelTextFont) {
			field.style.setProperty('--md-outlined-text-field-label-text-font', labelTextFont);
		}
	});
</script>

<md-outlined-text-field
	bind:this={field}
	aria-label={ariaLabel}
	{error}
	{errorText}
	{label}
	{noAsterisk}
	{required}
	{value}
	{prefixText}
	{suffixText}
	{hasLeadingIcon}
	{hasTrailingIcon}
	{supportingText}
	{textDirection}
	{rows}
	{cols}
	{inputMode}
	{max}
	{maxLength}
	{min}
	{minLength}
	{noSpinner}
	{pattern}
	{placeholder}
	{readOnly}
	{multiple}
	{step}
	{type}
	{autocomplete}
	{disabled}
	{name}
	{selectionDirection}
	{selectionEnd}
	{selectionStart}
	{valueAsNumber}
	{valueAsDate}
	{onselect}
	{onchange}
	{oninput}
>
	{@render slotLeadingIcon?.()}
	{@render slotTrailingIcon?.()}
</md-outlined-text-field>
