<script>
	import 'mdui/mdui.css';
	import 'mdui/components/dropdown.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-dropdown'} {...props}>
	{@render children?.()}
</svelte:element>
