<script>
    import { page } from '$app/state';
    import JoinButton from "./buttons/NavJoinButton.svelte";

</script>

<nav>
    <a href="/"><h1>Edukate</h1></a>
    {#if page.url.pathname === '/'}
    <a href="/join"><JoinButton /></a>
    {/if}
</nav>

<style>
    a {
        text-decoration: none;
        color: inherit;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        color: var(--on-primary-color);
    }
</style>