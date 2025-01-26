<script>
	import 'mdui/mdui.css';
	import 'mdui/components/radio.js';

	let { children, _uncheckedIcon, _checkedIcon, ...props } = $props();
</script>

<svelte:element this={'mdui-radio'} {...props}>
	{@render children?.()}
	{@render _uncheckedIcon?.()}
	{@render _checkedIcon?.()}
</svelte:element>
