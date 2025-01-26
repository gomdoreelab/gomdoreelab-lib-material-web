<script>
	import 'mdui/mdui.css';
	import 'mdui/components/dropdown.js';

	let { children, _trigger, ...props } = $props();
</script>

<svelte:element this={'mdui-dropdown'} {...props}>
	{@render children?.()}
	{@render _trigger?.()}
</svelte:element>
