<script>
	import 'mdui/mdui.css';
	import 'mdui/components/select.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-select'} {...props}>
	{@render children?.()}
</svelte:element>
