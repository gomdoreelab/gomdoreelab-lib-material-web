<script>
	import 'mdui/mdui.css';
	import 'mdui/components/menu.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-menu'} {...props}>
	{@render children?.()}
</svelte:element>
