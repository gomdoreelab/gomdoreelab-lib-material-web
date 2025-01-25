<script>
	import '@material/web/elevation/elevation.js';
	import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

	let document;
	let top;
	let {
		// Slots
		slotLeadingIcon,
		slotTrailingIcon,
		slotHeadline
	} = $props();

	$effect(() => {
		if (!document.adoptedStyleSheets.includes(typescaleStyles.styleSheet)) {
			document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
		}

		document.querySelector('div.layout section.body').addEventListener('scroll', (event) => {
			console.log(event.target.scrollTop);
			if (event.target.scrollTop > 0) {
				top.style.setProperty('--md-elevation-level', 2);
				top.style.setProperty('background-color', 'var(--md-sys-color-surface-container)');
			} else {
				top.style.setProperty('--md-elevation-level', 0);
				top.style.setProperty('background-color', 'var(--md-sys-color-surface)');
			}
		});
	});
</script>

<svelte:document bind:this={document} />

<div class="top" bind:this={top}>
	<md-elevation></md-elevation>
	<section class="leading">
		{@render slotLeadingIcon?.()}
	</section>
	<section class="md-typescale-title-large">
		{@render slotHeadline?.()}
	</section>
	<section class="trailing">
		{@render slotTrailingIcon?.()}
	</section>
</div>

<style>
	@media (width < 600px) {
		:root {
			--icon: 1;
		}
	}

	@media (width >= 600px) and (width < 840px) {
		:root {
			--icon: 2;
		}
	}

	@media (width >= 840px) and (width < 1200px) {
		:root {
			--icon: 3;
		}
	}

	@media (width >= 1200px) and (width < 1600px) {
		:root {
			--icon: 4;
		}
	}

	@media (width >= 1600px) {
		:root {
			--icon: 5;
		}
	}

	:root {
		--container-height: 64px;
		--leading-icon-size: 24px;
		--trailing-icon-size: 24px;
		--avatar-shape: 15px;
		--avatar-size: 30px;
		--side-padding: 16px;
		--gap-elements: 24px;
		--target-size: 48px;
	}
	.top {
		display: grid;
		grid-template-columns: calc(var(--side-padding) + var(--target-size) * var(--icon)) 1fr calc(
				var(--side-padding) + var(--target-size) * var(--icon)
			);
		column-gap: var(--gap-elements);
		align-items: center;
		justify-items: center;
		position: relative;

		background-color: var(--md-sys-color-surface);
		border-radius: var(--md-sys-shape-corner-none);
		height: var(--container-height);
		color: var(--md-sys-color-on-surface);
	}
	.leading {
		padding-left: var(--side-padding);
	}
	.trailing {
		padding-right: var(--side-padding);
	}
</style>
