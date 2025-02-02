<script>
	import 'mdui/mdui.css';

	let { children, ...props } = $props();
</script>

<div class="mdui-table" {...props}>
	{@render children?.()}
</div>
