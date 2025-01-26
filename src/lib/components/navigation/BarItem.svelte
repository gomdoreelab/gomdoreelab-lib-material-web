<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-bar-item.js';

	let { children, _icon, _activeIcon, _badge, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-bar-item'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _activeIcon?.()}
	{@render _badge?.()}
</svelte:element>
