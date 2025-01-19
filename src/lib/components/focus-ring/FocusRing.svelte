<script>
	import '@material/web/focus/md-focus-ring.js';

	let focusRing;
	let {
		// Tokens
		color = '',
		shape = '',
		width = '3px',
		// Properties
		visible = false,
		inward = false,
		htmlFor, // Bind to 'for'
		control
	} = $props();

	$effect(() => {
		if (color) {
			focusRing.style.setProperty('--md-focus-ring-color', color);
		}
		if (shape) {
			focusRing.style.setProperty('--md-focus-ring-shape', shape);
		}
		if (width) {
			focusRing.style.setProperty('--md-focus-ring-width', width);
		}
	});
</script>

<md-focus-ring bind:this={focusRing} {visible} {inward} for={htmlFor} {control}></md-focus-ring>
