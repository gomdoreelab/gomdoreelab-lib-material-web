<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-bar.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-bar'} {...props} style="width: 100vw;">
	{@render children?.()}
</svelte:element>
