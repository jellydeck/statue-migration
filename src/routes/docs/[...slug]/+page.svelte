<script>
  const {data} = $props();

  console.log("Data", data.sidebar.items)
</script>

<div class="docs-layout">
  <!-- Sidebar -->
  <aside class="sidebar">
    {#each data.sidebar as group}
      <div class="group">
        {#if !group.isRoot}
          <h3>{group.title}</h3>
        {/if}
        <ul>
          {#each group.items as item}
            <li>
              <a
                href={item.url}
                class:active={data.currentPath === item.url}
              >
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </aside>

  <!-- Content -->
  <main class="content">
    <h1>{data.page.metadata.title}</h1>
    {#if data.page.metadata.description}
      <p class="description">{data.page.metadata.description}</p>
    {/if}

    <!-- Render .svx content -->
    <data.page.content/>
  </main>
</div>
