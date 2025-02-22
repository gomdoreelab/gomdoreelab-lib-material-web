<script>
	import 'mdui/mdui.css';
	import 'mdui/components/dropdown.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-dropdown'} {...props}>
	{@render children?.()}
</svelte:element>
