<script>
    import JeopardyCard from "./JeopardyCard.svelte";
    import birthday2024Cards, { birthday2024Topics } from "../../questions/Birthday2024";
    import leagueTriviaRound1Cards, { leagueTriviaRound1Topics } from "../../questions/LeagueTriviaRound1";

    const currentTopic = leagueTriviaRound1Topics;
    const currentCards = leagueTriviaRound1Cards;
</script>

<article class="jeopardy-board">
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

<style>
    .jeopardy-board{
        background-color: #000A74;
        width: 100%;
        height: 100%;

        border-radius: 6px;
        border: 10px solid grey;
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