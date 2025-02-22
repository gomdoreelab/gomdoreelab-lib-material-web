<script>
	import 'mdui/mdui.css';

	let { children = undefined, ...props } = $props();
</script>

<div class="mdui-table" {...props}>
	{@render children?.()}
</div>
