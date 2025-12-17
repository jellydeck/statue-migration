<script>
  const {data} = $props();
</script>

<article class="docs-layout">

  <main class="content">
    <h1>{data.page.metadata.title}</h1>
    {#if data.page.metadata.description}
      <p class="description">{data.page.metadata.description}</p>
    {/if}


    <data.page.content/>
  </main>
</article>
