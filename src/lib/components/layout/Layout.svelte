<script>
	import 'mdui/mdui.css';
	import 'mdui/components/layout.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-layout'} {...props}>
	{@render children?.()}
</svelte:element>
