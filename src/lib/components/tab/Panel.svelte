<script>
	import 'mdui/mdui.css';
	import 'mdui/components/tab-panel.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-tab-panel'} {...props}>
	{@render children?.()}
</svelte:element>
