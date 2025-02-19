<script>
	import 'mdui/mdui.css';
	import 'mdui/components/fab.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-fab'} {...props}>
	{@render children?.()}
</svelte:element>
