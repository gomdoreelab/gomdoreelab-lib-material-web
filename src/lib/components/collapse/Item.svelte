<script>
	import 'mdui/mdui.css';
	import 'mdui/components/collapse-item.js';

	let { children, _header, ...props } = $props();
</script>

<svelte:element this={'mdui-collapse-item'} {...props}>
	{@render children?.()}
	{@render _header?.()}
</svelte:element>
