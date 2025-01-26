<script>
	import 'mdui/mdui.css';
	import 'mdui/components/list.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-list'} {...props}>
	{@render children?.()}
</svelte:element>
