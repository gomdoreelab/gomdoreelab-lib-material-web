<script>
	import '@material/web/button/elevated-button.js';

	let button;
	let {
		containerColor = '',
		containerShape = '',
		text = '',
		textColor = '',
		textFont = ''
	} = $props();

	$effect(() => {
		if (containerColor) {
			button.style.setProperty('--md-elevated-button-container-color', containerColor);
		}
		if (containerShape) {
			button.style.setProperty('--md-elevated-button-container-shape', containerShape);
		}
		if (textColor) {
			button.style.setProperty('--md-elevated-button-label-text-color', textColor);
		}
		if (textFont) {
			button.style.setProperty('--md-elevated-button-label-text-font', textFont);
		}
	});
</script>

<md-elevated-button bind:this={button}>
	{text}
</md-elevated-button>
