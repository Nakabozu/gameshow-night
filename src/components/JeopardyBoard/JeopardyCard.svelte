<script>
    import OpenScreen from "./OpenScreen.svelte";

    export let value = 0;

    export let questionProps = {};
    export let answerProps = {};

    let isUsed = false;
    let isShowingAnswer = false;
    let isBeingShown = false;

    const onRightClick = (/** @type {{ preventDefault: () => void; }} */ ev) => {
        ev.preventDefault();
        isUsed = !isUsed;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article
    class={`card ${isUsed ? 'greyify' : ""}`}
    on:click={() => {
        isBeingShown = true;
    }}
    on:contextmenu={onRightClick}
>{value}</article>

{#if isBeingShown}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <section>
        {#if !isShowingAnswer}
            <OpenScreen {...questionProps}/>
        {:else}
            <OpenScreen {...answerProps}/>
        {/if}
        <button on:click={()=>{
            if(!isShowingAnswer)
                isShowingAnswer = !isShowingAnswer;
            else if(isBeingShown){
                isBeingShown = !isBeingShown;
                isShowingAnswer = false;
                isUsed = true;
            }
        }}/>
    </section>
{/if}

<style>
    article{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }

    section {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;

        background-color: #000A74;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card{
        width: 100%;
        height: 100%;
    }
    
    .greyify{
        color: gray;
        background-color: #000A47;
    }

    p{
        font-size: 1.5em;
    }

    button{
        position: fixed;
        bottom: 150px;
        left: 0px;
        width: 100%;
        height: 200px;
        opacity: 1%;
    }
</style>
