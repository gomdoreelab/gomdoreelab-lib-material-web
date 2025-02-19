<script>
	import 'mdui/mdui.css';
	import 'mdui/components/text-field.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-text-field'} {...props}>
	{@render children?.()}
</svelte:element>
