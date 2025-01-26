<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-rail.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-rail'} {...props}>
	{@render children?.()}
</svelte:element>
