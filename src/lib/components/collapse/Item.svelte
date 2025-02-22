<script>
	import 'mdui/mdui.css';
	import 'mdui/components/collapse-item.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-collapse-item'} {...props}>
	{@render children?.()}
</svelte:element>
