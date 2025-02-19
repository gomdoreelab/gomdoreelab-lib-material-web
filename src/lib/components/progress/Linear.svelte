<script>
	import 'mdui/mdui.css';
	import 'mdui/components/linear-progress.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-linear-progress'} {...props}>
	{@render children?.()}
</svelte:element>
