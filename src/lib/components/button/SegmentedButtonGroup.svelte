<script>
	import 'mdui/mdui.css';
	import 'mdui/components/segmented-button-group.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-segmented-button-group'} {...props}>
	{@render children?.()}
</svelte:element>
