<script>
	import 'mdui/mdui.css';
	import 'mdui/components/divider.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-divider'} {...props}>
	{@render children?.()}
</svelte:element>
