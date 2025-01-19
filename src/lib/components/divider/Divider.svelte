<script>
	import '@material/web/divider/divider.js';

	let divider;
	let {
		role = 'separator',
		color = '',
		thickness = '1px',
		inset = false,
		insetStart = false,
		insetEnd = false
	} = $props();

	$effect(() => {
		if (color) {
			divider.style.setProperty('--md-divider-color', color);
		}
		if (thickness) {
			divider.style.setProperty('--md-divider-thickness', thickness);
		}
	});
</script>

<md-divider bind:this={divider} {role} {inset} {insetStart} {insetEnd}></md-divider>
