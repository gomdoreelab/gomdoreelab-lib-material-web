<script>
	import 'mdui/mdui.css';
	import 'mdui/components/checkbox.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-checkbox'} {...props}>
	{@render children?.()}
</svelte:element>
