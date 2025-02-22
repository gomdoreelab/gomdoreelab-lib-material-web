<script>
	import 'mdui/mdui.css';
	import 'mdui/components/collapse.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-collapse'} {...props}>
	{@render children?.()}
</svelte:element>
