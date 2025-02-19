<script>
	import 'mdui/mdui.css';
	import 'mdui/components/circular-progress.js';

	let { children = undefined, ...props } = $props();
</script>

<svelte:element this={'mdui-circular-progress'} {...props}>
	{@render children?.()}
</svelte:element>
