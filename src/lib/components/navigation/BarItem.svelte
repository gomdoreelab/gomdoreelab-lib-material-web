<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-bar-item.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-bar-item'} {...props}>
	{@render children?.()}
</svelte:element>
