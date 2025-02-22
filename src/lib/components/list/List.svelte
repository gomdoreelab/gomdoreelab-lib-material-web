<script>
	import 'mdui/mdui.css';
	import 'mdui/components/list.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-list'} {...props}>
	{@render children?.()}
</svelte:element>
