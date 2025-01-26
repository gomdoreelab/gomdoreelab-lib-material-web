<script>
	import 'mdui/mdui.css';

	let { children, ...props } = $props();
</script>

<div class="mdui-prose" {...props}>
	{@render children?.()}
</div>
