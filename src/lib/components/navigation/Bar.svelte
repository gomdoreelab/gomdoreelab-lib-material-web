<script>
	import 'mdui/mdui.css';
	import 'mdui/components/navigation-bar.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-navigation-bar'} {...props}>
	{@render children?.()}
</svelte:element>
