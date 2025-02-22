<script>
	import 'mdui/mdui.css';
	import 'mdui/components/tab.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-tab'} {...props}>
	{@render children?.()}
</svelte:element>
