<script>
	import 'mdui/mdui.css';
	import 'mdui/components/snackbar.js';

	let { children, _action, _closeButton, _closeIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-snackbar'} {...props}>
	{@render children?.()}
	{@render _action?.()}
	{@render _closeButton?.()}
	{@render _closeIcon?.()}
</svelte:element>
