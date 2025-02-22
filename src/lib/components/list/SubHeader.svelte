<script>
	import 'mdui/mdui.css';
	import 'mdui/components/list-subheader.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-list-subheader'} {...props}>
	{@render children?.()}
</svelte:element>
