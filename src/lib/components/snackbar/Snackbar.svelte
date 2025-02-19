<script>
	import 'mdui/mdui.css';
	import 'mdui/components/snackbar.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-snackbar'} {...props}>
	{@render children?.()}
</svelte:element>
