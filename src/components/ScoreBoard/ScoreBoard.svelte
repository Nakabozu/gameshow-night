<script>
    import PlayerCard from "./PlayerCard.svelte";
    /**
     * @type {string[]}
     */
    const playerInfo = [
        "Zuzu",
        "Kuro",
        "Ghost",
        // "Jade",
        // "Tanya"
    ];
</script>

<article>
    {#each playerInfo as player}
        <PlayerCard name={player}/>
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