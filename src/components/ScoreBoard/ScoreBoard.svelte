<script>
    import PlayerCard from "./PlayerCard.svelte";
    export let theme;
    /**
     * @type {string[]}
     */
    export let players;
</script>

<article>
    {#each players as player}
        <!-- Please keep names unique -->
        <PlayerCard name={player} theme={theme}/>
    {/each}
</article>

<style>
    article{
        width: 80%;
        position: absolute;
        bottom: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
</style>