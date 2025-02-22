<script>
	import 'mdui/mdui.css';
	import 'mdui/components/top-app-bar.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-top-app-bar'} {...props} style="width: 100%;">
	{@render children?.()}
</svelte:element>
