<script>
	import 'mdui/mdui.css';
	import 'mdui/components/tooltip.js';

	let { children, _headline, _content, _action, ...props } = $props();
</script>

<svelte:element this={'mdui-tooltip'} {...props}>
	{@render children?.()}
	{@render _headline?.()}
	{@render _content?.()}
	{@render _action?.()}
</svelte:element>
