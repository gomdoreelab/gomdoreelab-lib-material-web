<script>
	import 'mdui/mdui.css';
	import 'mdui/components/text-field.js';

	let { children = undefined, value = $bindable(), ...props } = $props();
</script>

<svelte:element this={'mdui-text-field'} {value} {...props}>
	{@render children?.()}
</svelte:element>
