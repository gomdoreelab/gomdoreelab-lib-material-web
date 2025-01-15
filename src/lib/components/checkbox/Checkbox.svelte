<script>
	import '@material/web/checkbox/checkbox.js';

	let checkbox;
	let {
		ariaLabel = '',
		label = '',
		touchTarget = 'wrapper',
		outlineColor = '',
		selectedContainerColor = '',
		selectedIconColor = '',
		containerShape = '',
		state = 'checked',
		required = false,
		value = 'on',
		disabled = false,
		name = '',
		onchange,
		oninput
	} = $props();

	$effect(() => {
		if (outlineColor) {
			checkbox.style.setProperty('--md-checkbox-outline-color', outlineColor);
		}
		if (selectedContainerColor) {
			checkbox.style.setProperty('--md-checkbox-selected-container-color', selectedContainerColor);
		}
		if (selectedIconColor) {
			checkbox.style.setProperty('--md-checkbox-selected-icon-color', selectedIconColor);
		}
		if (containerShape) {
			checkbox.style.setProperty('--md-checkbox-container-shape', containerShape);
		}
	});
</script>

<md-checkbox
	bind:this={checkbox}
	aria-label={ariaLabel}
	id={label}
	touch-target={touchTarget}
	checked={state === 'checked'}
	indeterminate={state === 'indeterminate'}
	{required}
	{value}
	{disabled}
	{name}
	{onchange}
	{oninput}
>
</md-checkbox>
