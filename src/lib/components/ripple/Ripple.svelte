<script>
	import '@material/web/ripple/ripple.js';

	let ripple;
	let {
		// Tokens
		hoverColor = '',
		pressedColor = '',
		// Properties
		disabled = false,
		htmlFor, // Bind to 'for'
		control
	} = $props();

	$effect(() => {
		if (hoverColor) {
			ripple.style.setProperty('--md-ripple-hover-color', hoverColor);
		}
		if (pressedColor) {
			ripple.style.setProperty('--md-ripple-pressed-color', pressedColor);
		}
	});
</script>

<md-ripple bind:this={ripple} {disabled} for={htmlFor} {control}></md-ripple>
