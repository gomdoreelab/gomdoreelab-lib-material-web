<script>
	let { children } = $props();
</script>

<div class="dark-high-contrast">
	{@render children?.()}
</div>

<style>
	@import url(../app.css);
</style>
