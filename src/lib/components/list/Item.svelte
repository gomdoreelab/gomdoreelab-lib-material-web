<script>
	import 'mdui/mdui.css';
	import 'mdui/components/list-item.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-list-item'} {...props}>
	{@render children?.()}
</svelte:element>
