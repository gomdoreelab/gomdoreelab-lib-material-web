<script>
	import 'mdui/mdui.css';
	import 'mdui/components/dialog.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-dialog'} {...props}>
	{@render children?.()}
</svelte:element>
