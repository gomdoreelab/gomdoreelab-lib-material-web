<script>
	import 'mdui/mdui.css';
	import 'mdui/components/list-item.js';

	let { children, _description, _icon, _endIcon, _custom, ...props } = $props();
</script>

<svelte:element this={'mdui-list-item'} {...props}>
	{@render children?.()}
	{@render _description?.()}
	{@render _icon?.()}
	{@render _endIcon?.()}
	{@render _custom?.()}
</svelte:element>
