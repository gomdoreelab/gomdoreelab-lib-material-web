<script>
	import 'mdui/mdui.css';
	import 'mdui/components/checkbox.js';

	let { children, _uncheckedIcon, _checkedIcon, _indeterminateIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-checkbox'} {...props}>
	{@render children?.()}
	{@render _uncheckedIcon?.()}
	{@render _checkedIcon?.()}
	{@render _indeterminateIcon?.()}
</svelte:element>
