<script>
	import ElevatedButton from '$lib/components/button/Elevated.svelte';
	import FilledButton from '$lib/components/button/Filled.svelte';
	import FilledTonalButton from '$lib/components/button/FilledTonal.svelte';
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<ElevatedButton text="깔깔1" onclick={() => console.log('Hello')}></ElevatedButton>
<ElevatedButton text="깔깔2"></ElevatedButton>
<FilledButton text="깔깔2"></FilledButton>
<FilledTonalButton text="깔깔2"></FilledTonalButton>
<Checkbox onchange={(event) => console.log(event)} oninput={() => console.log('a')}></Checkbox>
