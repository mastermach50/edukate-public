<script lang="ts">
    import { goto } from "$app/navigation";
    import FormSubmitButton from "./buttons/FormSubmitButton.svelte";

    function submitHandler(event: SubmitEvent) {
        event.preventDefault();

        goto("/game");
    }
</script>

<form onsubmit={submitHandler}>
    <h2>Join Game</h2>
    <input type="text" placeholder="Game Code" required />
    <input type="text" placeholder="Username" required />
    <gap></gap>
    <FormSubmitButton />
</form>

<style>
    h2 {
        margin: 0.5rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        max-width: fit-content;

        padding: 2rem;
        border: 2px solid var(--primary-color);
        border-radius: 2em;
    }

    input[type="text"] {
        padding: 0.5rem;
        font-size: 1rem;
        border: 2px solid var(--primary-color);
        border-radius: 0.5rem;
        width: 15rem;
    }
</style>
