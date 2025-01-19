<script>
	import '@material/web/tabs/tabs.js';

	let tabs;
	let {
		// Accessibility
		ariaLabel = '',
		// Properties
		autoActivate = false,
		activeTabIndex,
		activeTab,
		// Events
		onchange,
		// Slots
		slotPrimaryTab,
		slotSecondaryTab
	} = $props();
</script>

<md-tabs
	bind:this={tabs}
	aria-label={ariaLabel}
	{autoActivate}
	{activeTabIndex}
	{activeTab}
	{onchange}
>
	{@render slotPrimaryTab?.()}
	{@render slotSecondaryTab?.()}
</md-tabs>
