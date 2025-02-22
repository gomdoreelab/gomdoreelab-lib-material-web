<script>
	import 'mdui/mdui.css';
	import 'mdui/components/snackbar.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-snackbar'} {...props}>
	{@render children?.()}
</svelte:element>
