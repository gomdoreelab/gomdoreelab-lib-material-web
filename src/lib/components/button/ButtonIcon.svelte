<script>
	import 'mdui/mdui.css';
	import 'mdui/components/button-icon.js';

	let { children, _selectedIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-button-icon'} {...props}>
	{@render children?.()}
	{@render _selectedIcon?.()}
</svelte:element>
