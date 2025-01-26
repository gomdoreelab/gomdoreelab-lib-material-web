<script>
	import 'mdui/mdui.css';
	import 'mdui/components/badge.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-badge'} {...props}>
	{@render children?.()}
</svelte:element>
