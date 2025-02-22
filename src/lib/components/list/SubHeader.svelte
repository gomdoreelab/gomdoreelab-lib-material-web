<script>
	import 'mdui/mdui.css';
	import 'mdui/components/list-subheader.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-list-subheader'} {...props}>
	{@render children?.()}
</svelte:element>

<style>
	mdui-list-subheader {
		font-size: var(--mdui-typescale-label-medium-size);
		letter-spacing: var(--mdui-typescale-label-medium-tracking);
		font-weight: var(--mdui-typescale-label-medium-weight);
	}
</style>
