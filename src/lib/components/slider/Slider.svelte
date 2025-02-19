<script>
	import 'mdui/mdui.css';
	import 'mdui/components/slider.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-slider'} {...props}>
	{@render children?.()}
</svelte:element>
