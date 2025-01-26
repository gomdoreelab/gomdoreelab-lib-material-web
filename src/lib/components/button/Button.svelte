<script>
	import 'mdui/mdui.css';
	import 'mdui/components/button.js';

	let { children, _icon, _endIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-button'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _endIcon?.()}
</svelte:element>
