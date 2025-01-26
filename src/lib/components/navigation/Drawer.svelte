<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-drawer.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-drawer'} {...props}>
	{@render children?.()}
</svelte:element>
