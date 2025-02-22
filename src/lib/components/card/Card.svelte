<script>
	import 'mdui/mdui.css';
	import 'mdui/components/card.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-card'} {...props}>
	{@render children?.()}
</svelte:element>
