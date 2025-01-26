<script>
	import 'mdui/mdui.css';
	import 'mdui/components/top-app-bar.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-top-app-bar'} {...props}>
	{@render children?.()}
</svelte:element>
