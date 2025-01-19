<script>
	import '@material/web/elevation/elevation.js';

	let elevation;
	let { level = 0, shadowColor = '' } = $props();

	$effect(() => {
		if (level !== 0) {
			elevation.style.setProperty('--md-elevation-level', level);
		}
		if (shadowColor) {
			elevation.style.setProperty('--md-elevation-shadow-color', shadowColor);
		}
	});
</script>

<md-elevation bind:this={elevation}></md-elevation>
