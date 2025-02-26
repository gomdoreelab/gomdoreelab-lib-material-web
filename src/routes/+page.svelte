<script>
	import { setColorSchemeHTML, setHTMLTheme, ListSubHeader } from '$lib/index.js';
	import { onMount } from 'svelte';

	let on = $state(false);

	onMount(() => {
		setColorSchemeHTML('#ffffff', {
			primary: '#fffff1',
			secondary: '#ffe8bf',
			tertiary: '#D1CECE',
			neutral: '#FFF5E8'
			// neutralVariant: '#929090'
		});

		on = true;
	});
</script>

<ListSubHeader>Hello</ListSubHeader>

{#if on}
	<button
		style="background-color: rgb(var(--mdui-color-primary))"
		onclick={() => setHTMLTheme('light')}
	>
		버튼
	</button>
	<button
		style="background-color: rgb(var(--mdui-color-primary-dark))"
		onclick={() => setHTMLTheme('dark')}
	>
		버튼
	</button>
{/if}
