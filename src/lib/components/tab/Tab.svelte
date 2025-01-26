<script>
	import 'mdui/mdui.css';
	import 'mdui/components/tab.js';

	let { children, _icon, _badge, _custom, ...props } = $props();
</script>

<svelte:element this={'mdui-tab'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _badge?.()}
	{@render _custom?.()}
</svelte:element>
