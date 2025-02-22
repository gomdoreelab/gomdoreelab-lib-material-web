<script>
	import 'mdui/mdui.css';
	import 'mdui/components/radio-group.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-radio-group'} {...props}>
	{@render children?.()}
</svelte:element>
