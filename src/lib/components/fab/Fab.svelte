<script>
	import 'mdui/mdui.css';
	import 'mdui/components/fab.js';

	let { children, _icon, ...props } = $props();
</script>

<svelte:element this={'mdui-fab'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
</svelte:element>
