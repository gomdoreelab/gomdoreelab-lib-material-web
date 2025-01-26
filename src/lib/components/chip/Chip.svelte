<script>
	import 'mdui/mdui.css';
	import 'mdui/components/chip.js';

	let { children, _icon, _endIcon, _selectedIcon, _deleteIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-chip'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _endIcon?.()}
	{@render _selectedIcon?.()}
	{@render _deleteIcon?.()}
</svelte:element>
