<script>
	import 'mdui/mdui.css';
	import 'mdui/components/segmented-button-group.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-segmented-button-group'} {...props}>
	{@render children?.()}
</svelte:element>
