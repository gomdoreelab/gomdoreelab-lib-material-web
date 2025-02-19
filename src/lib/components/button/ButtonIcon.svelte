<script>
	import 'mdui/mdui.css';
	import 'mdui/components/button-icon.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-button-icon'} {...props}>
	{@render children?.()}
</svelte:element>
