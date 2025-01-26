<script>
	import 'mdui/mdui.css';
	import 'mdui/components/collapse.js';

	let { children, _header, ...props } = $props();
</script>

<svelte:element this={'mdui-collapse'} {...props}>
	{@render children?.()}
	{@render _header?.()}
</svelte:element>
