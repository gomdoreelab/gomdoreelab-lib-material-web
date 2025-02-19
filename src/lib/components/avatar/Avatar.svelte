<script>
	import 'mdui/mdui.css';
	import 'mdui/components/avatar.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-avatar'} {...props}>
	{@render children?.()}
</svelte:element>
