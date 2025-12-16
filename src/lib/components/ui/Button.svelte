<script>
	import { resolve } from "$app/paths";

let {
  variant = 'default',
  href = undefined,
  type = 'button',
  children,
  ...rest
} = $props();
</script>

{#if href}
	<a data-variant={variant} href={resolve(href)} {...rest}>
		{@render children()}
	</a>
{:else}
	<button data-variant={variant} {type} {...rest}>
		{@render children()}
	</button>
{/if}

<style>
@reference "tailwindcss";

button, a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
  border: none;
  padding: 12px 16px;
}

[data-variant="default"] {
    @apply bg-transparent text-(--text) ring-1 ring-(--text)/10 hover:bg-(--brand)/20 hover:ring-(--brand)/20;
}

[data-variant="brand"] {
  @apply bg-(--brand) text-(--text) inset-shadow-sm inset-shadow-white/40 focus:inset-shadow-white/10;
}

[data-variant="subtle"] {
  @apply bg-(--brand) text-(--text);
}

[data-variant="link"] {
  @apply bg-transparent text-(--text) no-underline hover:underline p-0;
}

button:hover, a:hover {
    filter:  brightness(115%);
}
</style>
