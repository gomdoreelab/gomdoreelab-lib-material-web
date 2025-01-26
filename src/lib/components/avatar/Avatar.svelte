<script>
	import 'mdui/mdui.css';
	import 'mdui/components/avatar.js';

	let { children, ...props } = $props();
</script>

<svelte:element this={'mdui-avatar'} {...props}>
	{@render children?.()}
</svelte:element>
