<script>
	import '@material/web/dialog/dialog.js';

	let dialog;
	let {
		containerColor = '',
		headlineColor = '',
		headlineFont = '',
		supportingTextColor = '',
		supportingTextFont = '',
		quick = false,
		returnValue = '',
		type,
		noFocusTrap = false,
		open,
		getOpenAnimation,
		getCloseAnimation,
		slotHeadline,
		slotContent,
		slotActions,
		oncancel
	} = $props();

	$effect(() => {
		if (containerColor) {
			dialog.style.setProperty('--md-dialog-container-color', containerColor);
		}
		if (headlineColor) {
			dialog.style.setProperty('--md-dialog-headline-color', headlineColor);
		}
		if (headlineFont) {
			dialog.style.setProperty('--md-dialog-headline-font', headlineFont);
		}
		if (supportingTextColor) {
			dialog.style.setProperty('--md-dialog-supporting-text-color', supportingTextColor);
		}
		if (supportingTextFont) {
			dialog.style.setProperty('--md-dialog-supporting-text-font', supportingTextFont);
		}
	});
</script>

<md-dialog
	bind:this={dialog}
	{quick}
	{returnValue}
	{type}
	{noFocusTrap}
	{open}
	{getOpenAnimation}
	{getCloseAnimation}
	{oncancel}
>
	{@render slotHeadline?.()}
	{@render slotContent?.()}
	{@render slotActions?.()}
</md-dialog>
