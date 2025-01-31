<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-drawer.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-drawer'} {...props} style="height: 100%;">
	{@render children?.()}
</svelte:element>
