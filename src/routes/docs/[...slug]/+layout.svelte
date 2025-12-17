<script lang="ts">
	import DocsContents from '$lib/components/DocsContents.svelte';


    const {data, children} = $props();
    console.log("data", data)
</script>


<div class="article-container">
	<div class="sidebar-container">
		<DocsContents contents={data.sections} />
	</div>

	<div class="content">
		{@render children()}
	</div>
</div>

<style>
	.article-container {
		--sidebar-width: 28rem;

		/*display: flex;
		flex-direction: column;*/
	}

	.sidebar-container {
	    max-width: var(--sidebar-width);
	}

	.content {
	    padding-left: var(--sidebar-width)
	}
</style>
