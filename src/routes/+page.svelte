<script>
  import NavigationBar from '$lib/components/NavigationBar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Stats from '$lib/components/Stats.svelte';
  import Categories from '$lib/components/Categories.svelte';
  import LatestContent from '$lib/components/LatestContent.svelte';
  import BuiltBy from '$lib/components/BuiltBy.svelte';

  const {data} = $props();
</script>

<svelte:head>
	<title>Statue</title>
	<meta
		name="description"
		content="Statue SSG powered by Svelte, generates static sites from markdown content."
	/>
</svelte:head>

<NavigationBar navbarItems={data.directories} activePath="/" />

<div
	class="min-h-screen bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)"
>
	<Hero />
</div>
