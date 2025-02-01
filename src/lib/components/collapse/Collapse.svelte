<script>
	import 'mdui/mdui.css';
	import 'mdui/components/collapse.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-collapse'} {...props}>
	{@render children?.()}
</svelte:element>
