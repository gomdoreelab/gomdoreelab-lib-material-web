<script>
	import 'mdui/mdui.css';
	import 'mdui/components/radio.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-radio'} {...props}>
	{@render children?.()}
</svelte:element>
