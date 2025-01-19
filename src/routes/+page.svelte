<script>
	import {
		ElevatedButton,
		FilledButton,
		Checkbox,
		Dialog,
		List,
		Icon,
		ListItem,
		Menu,
		MenuItem,
		SubMenu
	} from '$lib/index.js';

	let isOpenDialog = false;
	let isOpenMenu = false;
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<ElevatedButton onclick={() => (isOpenDialog = !isOpenDialog)}>
	{#snippet slotLabel()}
		깔깔1
	{/snippet}
	{#snippet slotIcon()}
		<svg slot="icon" viewBox="0 0 48 48"
			><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
		</svg>
	{/snippet}
</ElevatedButton>
<Checkbox onchange={(event) => console.log(event)} oninput={() => console.log('a')}></Checkbox>
<Dialog open={isOpenDialog} oncancel={() => (isOpenDialog = !isOpenDialog)}>
	{#snippet slotHeadline()}
		<div slot="headline" style="height: 200px; width: 500px;">Dialog title</div>
	{/snippet}
</Dialog>
<h3>Outlined</h3>
<span>
	<Icon filled={0}>
		{#snippet slotIcon()}
			settings
		{/snippet}
	</Icon>
</span>
<List maxWidth={'300px'}>
	{#snippet slotItems()}
		<ListItem>
			{#snippet slotHeadline()}
				Fruits
			{/snippet}
		</ListItem>
		<ListItem>
			{#snippet slotHeadline()}
				<div slot="headline">Cucumber</div>
			{/snippet}
			{#snippet slotSupportingText()}
				<div slot="supporting-text">
					Cucumbers are long green fruits that are just as long as this multi-line description
				</div>
			{/snippet}
		</ListItem>
	{/snippet}
</List>

<span style="position: relative;">
	<FilledButton id="usage-submenu-anchor" onclick={() => (isOpenMenu = !isOpenMenu)}>
		{#snippet slotLabel()}
			깔깔111111111111222222222
		{/snippet}
	</FilledButton>
	<Menu hasOverflow={true} open={isOpenMenu} id="usage-submenu" anchor="usage-submenu-anchor">
		{#snippet slotMenu()}
			<SubMenu>
				{#snippet slotItem()}
					<MenuItem slot="item">
						{#snippet slotHeadline()}
							<div slot="headline">Fruits with A</div>
						{/snippet}
						{#snippet slotEnd()}
							<Icon slot="end">
								{#snippet slotIcon()}
									arrow_right
								{/snippet}
							</Icon>
						{/snippet}
					</MenuItem>
				{/snippet}
				{#snippet slotMenu()}
					<Menu slot="menu"></Menu>
				{/snippet}
			</SubMenu>
		{/snippet}
		{#snippet slotItem()}
			<MenuItem>
				{#snippet slotHeadline()}
					<div slot="headline">banana</div>
				{/snippet}
			</MenuItem>
		{/snippet}
	</Menu>
</span>
