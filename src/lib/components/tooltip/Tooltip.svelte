<script>
	import 'mdui/mdui.css';
	import 'mdui/components/tooltip.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-tooltip'} {...props}>
	{@render children?.()}
</svelte:element>
