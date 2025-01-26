<script>
	import 'mdui/mdui.css';
	import 'mdui/components/menu-item.js';

	let { children, _icon, _endIcon, _endText, _selectedIcon, _submenu, _custom, ...props } =
		$props();
</script>

<svelte:element this={'mdui-menu-item'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _endIcon?.()}
	{@render _endText?.()}
	{@render _selectedIcon?.()}
	{@render _submenu?.()}
	{@render _custom?.()}
</svelte:element>
