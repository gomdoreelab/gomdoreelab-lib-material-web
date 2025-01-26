<script>
	import 'mdui/mdui.css';
	import 'mdui/components/range-slider.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-range-slider'} {...props}>
	{@render children?.()}
</svelte:element>
