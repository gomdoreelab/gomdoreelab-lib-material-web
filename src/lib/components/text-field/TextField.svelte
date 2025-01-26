<script>
	import 'mdui/mdui.css';
	import 'mdui/components/text-field.js';

	let {
		children,
		_icon,
		_endIcon,
		_errorIcon,
		_prefix,
		_suffix,
		_clearButton,
		_clearIcon,
		_togglePasswordButton,
		_showPasswordIcon,
		_hidePasswordIcon,
		_helper,
		...props
	} = $props();
</script>

<svelte:element this={'mdui-text-field'} {...props}>
	{@render children?.()}
	{@render _icon?.()}
	{@render _endIcon?.()}
	{@render _errorIcon?.()}
	{@render _prefix?.()}
	{@render _suffix?.()}
	{@render _clearButton?.()}
	{@render _clearIcon?.()}
	{@render _togglePasswordButton?.()}
	{@render _showPasswordIcon?.()}
	{@render _hidePasswordIcon?.()}
	{@render _helper?.()}
</svelte:element>
