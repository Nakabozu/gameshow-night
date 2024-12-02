<script>
    // @ts-nocheck

    // Components
    import JeopardyCard from "./JeopardyCard.svelte";
    import { page, currentQuestionIndex } from "$lib/store";
    import OpenScreen from "./OpenScreen.svelte";

    export let currentTopic;
    export let currentCards;
    export let theme;

    /**
     * @type {ScreenData}
     */
    $: openScreenProps = currentCards[$currentQuestionIndex][$page === 'question' ? 'questionProps' : 'answerProps'];
</script>

<div class="jeopardy-board-container" style={$page !== "jeopardy" ? "display: none" : undefined}>
    <article class="jeopardy-board" style='--border-image: {theme?.borderImage}; --border: {theme?.border}; margin-bottom: {theme?.belowBorderImage ? "0px" : "150px"}'>
        <section class="jeopardy-topics">
            {#each currentTopic as topic}
                <div class="topic">
                    {topic}
                </div>
            {/each}
        </section>
        <section class="jeopardy-cards" >
            {#each currentCards as currentCard, index}
                <div class="card">
                    <JeopardyCard value={((index%5)+1)*200} currentCardIndex={index}>
                        (Slotted content)
                    </JeopardyCard>
                </div>
            {/each}
        </section>
    </article>
    {#if theme?.belowBorderImage}
        <span class="decorative-below-border" style='--below-border-image-url: url({theme.belowBorderImage});'/>
    {/if}
</div>

{#if $page !== "jeopardy"}
    <OpenScreen {...openScreenProps}/>
{/if}

<style>
    .jeopardy-board-container{
        height: 100%;
        position: relative;
        align-content: flex-end;
    }

    .jeopardy-board{
        background-color: #000A74;

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

    .decorative-below-border{
        background-image: var(--below-border-image-url);
        height: 150px;
        display: block;
        background-repeat: repeat-x;
        background-size: contain;
    }
</style>