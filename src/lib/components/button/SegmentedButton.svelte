<script>
	import 'mdui/mdui.css';
	import 'mdui/components/segmented-button.js';

	let { children, _icon, _selectedIcon, _endIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-segmented-button'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _selectedIcon?.()}
	{@render _endIcon?.()}
</svelte:element>
