<script>
	import 'mdui/mdui.css';
	import 'mdui/components/card.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-card'} {...props}>
	{@render children?.()}
</svelte:element>
