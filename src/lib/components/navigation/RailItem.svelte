<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-rail-item.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-rail-item'} {...props}>
	{@render children?.()}
</svelte:element>
