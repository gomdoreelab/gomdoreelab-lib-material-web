<script>
	import '@material/web/select/filled-select.js';

	let option;
	let {
		// Properties
		disabled = false,
		selected = false,
		value = '',
		type = 'option',
		typeaheadText,
		displayText,
		// Slots
		slotHeadline
	} = $props();
</script>

<md-select-option {disabled} {selected} {value} {type} {typeaheadText} {displayText}>
	{@render slotHeadline?.()}
</md-select-option>
