<script>
	import 'mdui/mdui.css';
	import 'mdui/components/tabs.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-tabs'} {...props}>
	{@render children?.()}
</svelte:element>
