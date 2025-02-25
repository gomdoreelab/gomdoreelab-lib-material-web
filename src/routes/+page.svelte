<script>
	import { setColorSchemeHTML, ListSubHeader } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		setColorSchemeHTML('#ffffff', {
			primary: '#ffffff',
			secondary: '#ffe8bf',
			tertiary: '#D1CECE',
			neutral: '#FFF5E8',
			neutralVariant: '#929090'
		});
	});
</script>

<ListSubHeader>Hello</ListSubHeader>
