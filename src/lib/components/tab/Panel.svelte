<script>
	import 'mdui/mdui.css';
	import 'mdui/components/tab-panel.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-tab-panel'} {...props}>
	{@render children?.()}
</svelte:element>
