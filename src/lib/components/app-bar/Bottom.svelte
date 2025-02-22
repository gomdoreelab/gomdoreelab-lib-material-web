<script>
	import 'mdui/mdui.css';
	import 'mdui/components/bottom-app-bar.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-bottom-app-bar'} {...props}>
	{@render children?.()}
</svelte:element>
