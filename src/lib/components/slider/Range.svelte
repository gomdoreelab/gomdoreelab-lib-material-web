<script>
	import 'mdui/mdui.css';
	import 'mdui/components/range-slider.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-range-slider'} {...props}>
	{@render children?.()}
</svelte:element>
