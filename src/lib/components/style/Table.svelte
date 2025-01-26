<script>
	import 'mdui/mdui.css';

	let { children, ...props } = $props();
</script>

<table class="mdui-table" {...props}>
	{@render children?.()}
</table>
