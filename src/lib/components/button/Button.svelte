<script>
	import 'mdui/mdui.css';
	import 'mdui/components/button.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-button'} {...props}>
	{@render children?.()}
</svelte:element>
