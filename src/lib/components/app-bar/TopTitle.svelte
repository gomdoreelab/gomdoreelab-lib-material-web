<script>
	import 'mdui/mdui.css';
	import 'mdui/components/top-app-bar-title.js';

	let { children, _labelLarge, ...props } = $props();
</script>

<svelte:element this={'mdui-top-app-bar-title'} {...props}>
	{@render children?.()}
	{@render _labelLarge?.()}
</svelte:element>
