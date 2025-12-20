<script>
    import { onMount } from "svelte";
    import { players, socket } from "$lib/store";

    // @ts-nocheck
    import PlayerCard from "./PlayerCard.svelte";
    export let theme;
    export let gameId;

    let isFormOn = false;
    let name = "";
    /**
     * Adds a new jeopardy podium for this player
     */
    const addPlayer = () => {
        console.log(`Adding ${name}`);
        socket.emit("client_adds_player", name, () => {
            console.log(`Successfully added player`);
        });
        name = "";
    };

    const resetBuzzers = () => {
        socket.emit("client_unbuzzes_all", () => {
            console.log(`Unbuzzed all`);
        });
    };
    const clearAllPlayers = () => {
        name = "";
        socket.emit("client_clears_players", () => {
            console.log("No more players!");
        });
    };

    socket.on("server_updates_players", (newPlayerState) => {
        console.log("Server updated players to:", newPlayerState);
        $players = newPlayerState;
    });

    onMount(() => {
        console.log(
            "WELCOME! To get started, you'll want to press the Escape key on your" +
                " keyboard and type some names to add people to the scoreboard." +
                " Don't forget to free up some room by hitting escape again!",
        );
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                isFormOn = !isFormOn;
                setTimeout(() => {
                    document.getElementById("new_player_name")?.focus();
                }, 100);
            }
        });
        return document.removeEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                isFormOn = !isFormOn;
                setTimeout(() => {
                    document.getElementById("new_player_name")?.focus();
                }, 100);
            }
        });
    });
</script>

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article>
    {#each $players as player}
        <!-- Please keep names unique -->
        <PlayerCard buzz={player?.buzz} name={player?.name} {theme} />
    {/each}
    {#if isFormOn}
        <menu class="player-control">
            <label for="new_player_name">Add player to Game {gameId}</label>
            <form on:submit|preventDefault={addPlayer}>
                <input id="new_player_name" type="text" bind:value={name} />
                <button type="submit">+</button>
            </form>
            <label for="new_player_name">
                Clear all players from Game {gameId}
            </label>
            <button
                id="clear_players_from_game"
                class="btn-clear"
                on:click={clearAllPlayers}
            >
                🧹 CLEAR ALL PLAYERS 🧹
            </button>
        </menu>
    {/if}
    <button class="reset-button" on:click={resetBuzzers}>Reset Buzzers</button>
</article>

<style>
    article {
        min-width: fit-content;
        width: 100%;
        min-height: 150px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        z-index: 5;
    }

    .player-control {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    form {
        z-index: 5;

        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    label {
        width: 100%;
        color: blue;
        text-align: center;
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px 16px;

        /* color */
        color: white;
        background-color: #79463a;
        border: 1px solid black;
        /* text */
        line-height: 1rem;
        /* border */
        border-radius: 6px;
    }
    .btn-clear {
        padding: 4px 8px;
    }
    .reset-button {
        background-color: white;
        color: #97c1e6;
        position: fixed;
        width: min-content;
        right: 20px;
        top: 20px;
        padding: 4px 16px;
    }
</style>
