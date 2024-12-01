<script>
  import { onMount } from "svelte";

    // @ts-nocheck
    import PlayerCard from "./PlayerCard.svelte";
    export let theme;

    let isFormOn = false;
    let name = "";
    /**
     * @type {string[]}
     */
    let players = [];
    /**
     * Adds a new jeopardy podium for this player
     */
    const addPlayer = () => {
        players = [...players, name];
        console.log(name)
        name = "";
    }

onMount(()=>{
    console.log("WELCOME! To get started, you'll want to press the Escape key on your keyboard and type some names to add people to the scoreboard. Don't forget to free up some room by hitting escape again!")
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            isFormOn = !isFormOn;
            setTimeout(()=>{document.getElementById('new_player_name')?.focus()}, 100);
        }
    });
    return document.removeEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            isFormOn = !isFormOn;
            setTimeout(()=>{document.getElementById('new_player_name')?.focus()}, 100);
        }
    });
})
</script>

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article>
    {#each players as player}
        <!-- Please keep names unique -->
        <PlayerCard name={player} theme={theme}/>
    {/each}
    {#if isFormOn}
        <form on:submit|preventDefault={addPlayer}>
            <input id="new_player_name" type="text" bind:value={name}/>
            <button type="submit">+</button>
        </form>
    {/if}
</article>

<style>
    article{
        min-width: fit-content;
        width: 100%;
        min-height: 150px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        z-index: 5;
    }

    form{
        z-index: 5;
        
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px 15px;

        /* color */
        color: white;
        background-color: #79463A;
        border: 1px solid black;
        /* text */
        line-height: 1rem;
        /* border */
        border-radius: 6px;
    }
</style>