<script>
	import 'mdui/mdui.css';
	import 'mdui/components/chip.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-chip'} {...props}>
	{@render children?.()}
</svelte:element>
