<script>
	import '@material/web/list/list-item.js';

	let item;
	let {
		// Tokens
		containerShape = '',
		labelTextColor = '',
		supportingTextColor = '',
		trailingSupportingTextColor = '',
		labelTextFont = '',
		supportingTextFont = '',
		trailingSupportingTextFont = '',
		leadingIconColor = '',
		trailingIconColor = '',
		leadingIconSize = '18px',
		trailingIconSize = '24px',
		leadingAvatarLabelColor = '',
		leadingAvatarLabelFont = '',
		leadingAvatarColor = '',
		leadingAvatarSize = '40px',
		leadingAvatarShape = '',
		leadingImageHeight = '56px',
		leadingImageWidth = '56px',
		leadingImageShape = '',
		// Properties
		disabled = false,
		type = 'text',
		href = '',
		target = '',
		// Slots
		slotHeadline,
		slotSupportingText,
		slotTrailingSupportingText,
		slotStart,
		slotEnd
	} = $props();

	$effect(() => {
		if (containerShape) {
			item.style.setProperty('--md-list-item-container-shape', containerShape);
		}
		if (labelTextColor) {
			item.style.setProperty('--md-list-item-label-text-color', labelTextColor);
		}
		if (supportingTextColor) {
			item.style.setProperty('--md-list-item-supporting-text-color', supportingTextColor);
		}
		if (trailingSupportingTextColor) {
			item.style.setProperty(
				'--md-list-item-trailing-supporting-text-color',
				trailingSupportingTextColor
			);
		}
		if (labelTextFont) {
			item.style.setProperty('--md-list-item-label-text-font', labelTextFont);
		}
		if (supportingTextFont) {
			item.style.setProperty('--md-list-item-supporting-text-font', supportingTextFont);
		}
		if (trailingSupportingTextFont) {
			item.style.setProperty(
				'--md-list-item-trailing-supporting-text-font',
				trailingSupportingTextFont
			);
		}
		if (leadingIconColor) {
			item.style.setProperty('--md-list-item-leading-icon-color', leadingIconColor);
		}
		if (trailingIconColor) {
			item.style.setProperty('--md-list-item-trailing-icon-color', trailingIconColor);
		}
		if (leadingIconSize !== '18px') {
			item.style.setProperty('--md-list-item-leading-icon-size', labelTextFont);
		}
		if (trailingIconSize !== '24px') {
			item.style.setProperty('--md-list-item-trailing-icon-size', trailingIconSize);
		}
		if (leadingAvatarLabelColor) {
			item.style.setProperty('--md-list-item-leading-avatar-label-color', leadingAvatarLabelColor);
		}
		if (leadingAvatarLabelFont) {
			item.style.setProperty('--md-list-item-leading-avatar-label-font', leadingAvatarLabelFont);
		}
		if (leadingAvatarColor) {
			item.style.setProperty('--md-list-item-leading-avatar-color', leadingAvatarColor);
		}
		if (leadingAvatarSize !== '40px') {
			item.style.setProperty('--md-list-item-leading-avatar-size', leadingAvatarSize);
		}
		if (leadingAvatarShape) {
			item.style.setProperty('--md-list-item-leading-avatar-shape', leadingAvatarShape);
		}
		if (leadingImageHeight !== '56px') {
			item.style.setProperty('--md-list-item-leading-image-height', leadingImageHeight);
		}
		if (leadingImageWidth !== '56px') {
			item.style.setProperty('--md-list-item-leading-image-width', leadingImageWidth);
		}
		if (leadingImageShape) {
			item.style.setProperty('--md-list-item-leading-image-shape', leadingImageShape);
		}
	});
</script>

<md-list-item bind:this={item} {disabled} {type} {href} {target}>
	{@render slotHeadline?.()}
	{@render slotSupportingText?.()}
	{@render slotTrailingSupportingText?.()}
	{@render slotStart?.()}
	{@render slotEnd?.()}
</md-list-item>
