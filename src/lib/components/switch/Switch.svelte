<script>
	import 'mdui/mdui.css';
	import 'mdui/components/switch.js';

	let { children, _uncheckedIcon, _checkedIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-switch'} {...props}>
	{@render children?.()}
	{@render _uncheckedIcon?.()}
	{@render _checkedIcon?.()}
</svelte:element>
