<script>
	import 'mdui/mdui.css';
	import 'mdui/components/icon.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-icon'} {...props}>
	{@render children?.()}
</svelte:element>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone" rel="stylesheet" />
