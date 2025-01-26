<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-rail-item.js';

	let { children, _icon, _activeIcon, _badge, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-rail-item'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _activeIcon?.()}
	{@render _badge?.()}
</svelte:element>
