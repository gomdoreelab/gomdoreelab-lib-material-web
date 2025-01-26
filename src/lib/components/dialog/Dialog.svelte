<script>
	import 'mdui/mdui.css';
	import 'mdui/components/dialog.js';

	let { children, _header, _icon, _headline, _description, _action, ...props } = $props();
</script>

<svelte:element this={'mdui-dialog'} {...props}>
	{@render children?.()}
	{@render _header?.()}
	{@render _icon?.()}
	{@render _headline?.()}
	{@render _description?.()}
	{@render _action?.()}
</svelte:element>
