<script>
	import 'mdui/mdui.css';
	import 'mdui/components/select.js';

	let {
		children,
		_icon,
		_endIcon,
		_errorIcon,
		_prefix,
		_suffix,
		_clearButton,
		_clearIcon,
		_helper,
		...props
	} = $props();
</script>

<svelte:element this={'mdui-select'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _endIcon?.()}
	{@render _errorIcon?.()}
	{@render _prefix?.()}
	{@render _suffix?.()}
	{@render _clearButton?.()}
	{@render _clearIcon?.()}
	{@render _helper?.()}
</svelte:element>
