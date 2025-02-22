<script>
	import 'mdui/mdui.css';
	import 'mdui/components/menu-item.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-menu-item'} {...props}>
	{@render children?.()}
</svelte:element>
