<script>
	import 'mdui/mdui.css';
	import 'mdui/components/segmented-button.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-segmented-button'} {...props}>
	{@render children?.()}
</svelte:element>
