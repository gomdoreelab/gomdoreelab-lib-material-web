<script>
	import 'mdui/mdui.css';
	import 'mdui/components/switch.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-switch'} {...props}>
	{@render children?.()}
</svelte:element>
