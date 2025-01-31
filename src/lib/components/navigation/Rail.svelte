<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-rail.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-rail'} {...props} style="height: 100%;">
	{@render children?.()}
</svelte:element>
