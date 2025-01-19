<script>
	import '@material/web/chips/chip-set.js';

	let { ariaLabelledBy = '', slotChips } = $props();
</script>

<md-chip-set aria-labelledby={ariaLabelledBy}>
	{@render slotChips?.()}
</md-chip-set>
