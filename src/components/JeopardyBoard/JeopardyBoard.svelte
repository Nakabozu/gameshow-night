<script>
    // Components
    import JeopardyCard from "./JeopardyCard.svelte";

    export let currentTopic;
    export let currentCards;
    export let theme;
</script>

<article class="jeopardy-board" style='--border-image: {theme?.borderImage}; --border: {theme?.border}; margin-bottom: {theme?.belowBorderImage ? "0px" : "150px"}'>
    <section class="jeopardy-topics">
        {#each currentTopic as topic}
            <div class="topic">
                {topic}
            </div>
        {/each}
    </section>
    <section class="jeopardy-cards">
        {#each currentCards as {questionProps, answerProps}, index}
            <div class="card">
                <JeopardyCard value={((index%5)+1)*200} questionProps={questionProps} answerProps={answerProps}>
                    (Slotted content)
                </JeopardyCard>
            </div>
        {/each}
    </section>
    
</article>
    {#if theme?.belowBorderImage}
        <img src={theme?.belowBorderImage} width="100%" height="150px" alt="Decorative border"/>
    {/if}
<style>
    .jeopardy-board{
        background-color: #000A74;
        width: 100%;

        margin-bottom: 150px;

        border-radius: 6px;
        border: var(--border);
        border-image: var(--border-image);
    }

    .jeopardy-topics{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    .jeopardy-cards{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-auto-flow: column;
    }
    
    .topic, .card{
        display: flex;
        height: 75px;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        word-break: break-word;
    }

    .topic{
        border: 2px solid black;
        border-bottom: 5px solid black;
    }

    .card{
        border: 2px solid black;
    }
</style>