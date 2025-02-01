<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-rail.js';

	let { children, _top, _bottom, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-rail'} {...props} style="height: 100%;">
	{@render children?.()}
	{@render _top?.()}
	{@render _bottom?.()}
</svelte:element>
