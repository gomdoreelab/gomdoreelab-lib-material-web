<script>
	import 'mdui/mdui.css';
	import 'mdui/components/layout-main.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-layout-main'} {...props}>
	{@render children?.()}
</svelte:element>
