<script lang="ts">
    import { onMount } from "svelte";
    let questions: any[] = [];

    function fetchQuestions(subj_num: number) {
        const response = fetch(`https://opentdb.com/api.php?amount=10&category=${subj_num}&type=multiple`);
        const data = response.then(response => response.json());
        questions = data.then(data => data.results);
    }

    function nextQuestion(event: SubmitEvent) {
        event.preventDefault();
        

    }

    onMount(() => {
        fetchQuestions(9); // Example subject number for General Knowledge
    });
</script>

<form onsubmit={nextQuestion}>
    <div class="question">Waiting for question</div>
    <button type="button">Option 1</button>
    <button type="button">Option 2</button>
    <button type="button">Option 3</button>
    <button type="button">Option 4</button>
</form>

