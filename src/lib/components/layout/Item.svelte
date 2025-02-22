<script>
	import 'mdui/mdui.css';
	import 'mdui/components/layout-item.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-layout-item'} {...props}>
	{@render children?.()}
</svelte:element>
