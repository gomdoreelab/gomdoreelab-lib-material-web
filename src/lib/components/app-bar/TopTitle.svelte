<script>
	import 'mdui/mdui.css';
	import 'mdui/components/top-app-bar-title.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-top-app-bar-title'} {...props}>
	{@render children?.()}
</svelte:element>
