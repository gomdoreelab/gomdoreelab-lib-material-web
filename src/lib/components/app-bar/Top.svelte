<script>
	import 'mdui/mdui.css';
	import 'mdui/components/top-app-bar.js';

	let {
		// Properties
		order = 0,
		// Slots
		children,
		...props
	} = $props();

	let drawer = document.querySelector('mdui-navigation-drawer');
	let rail = document.querySelector('mdui-navigation-rail');
	let width = drawer ? drawer.style.width : rail ? rail.style.width : '80';
</script>

{#if order === 0}
	<svelte:element this={'mdui-top-app-bar'} {...props} style="width: 100%;">
		{@render children?.()}
	</svelte:element>
{:else}
	<svelte:element this={'mdui-top-app-bar'} {...props} style="width: calc(100% - {width}px);">
		{@render children?.()}
	</svelte:element>
{/if}
