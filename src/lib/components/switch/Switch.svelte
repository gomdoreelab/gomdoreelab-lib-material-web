<script>
	import 'mdui/mdui.css';
	import 'mdui/components/switch.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-switch'} {...props}>
	{@render children?.()}
</svelte:element>
