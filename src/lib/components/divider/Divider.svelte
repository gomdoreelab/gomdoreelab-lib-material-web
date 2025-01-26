<script>
	import 'mdui/mdui.css';
	import 'mdui/components/divider.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-divider'} {...props}>
	{@render children?.()}
</svelte:element>
