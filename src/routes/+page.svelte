<script>
    import { goto } from "$app/navigation";
    import { socket } from "$lib/store";
    import { onMount } from "svelte";
    let gameId = -1;

    const startGame = () => {
        goto(`/${gameId}`);
    };

    onMount(() => {
        socket.emit(
            "client_requests_game_id",
            (/** @type {number} */ nemGameId) => {
                gameId = nemGameId;
                console.log();
            },
        );
    });
</script>

<section>
    <h1>Game Show Night: Christmas 2025</h1>
    Enjoy some custom trivia questions.
    <article>
        <h2>Instructions</h2>
        <ol>
            <li>
                Provide all players with the game ID you see in the large button
                below
            </li>
            <li>
                Direct all players to <a
                    href="https://gameshow-night-buzzers.vercel.app"
                    >the buzzers app</a
                >
            </li>
            <li>
                Have the players enter the game ID you gave them into the app
            </li>
            <li>Click the large button below</li>
            <li>Press the <kbd>Esc</kbd> button</li>
            <li>
                Enter the names of the players/teams and press <kbd>Enter</kbd> or
                click the + button
            </li>
            <li>Have your players select their name on the buzzer app</li>
        </ol>
        <div class="warning">
            ONE BIG WARNING! The app is, admittedly, very fragile. Refreshing
            the page completely breaks your session. Try to avoid it at all
            costs!
        </div>
    </article>
    <button on:click={startGame}
        >{#if gameId < 0}
            Creating your game...
        {:else}
            <div>Click to start!</div>
            <div>Your game ID is: {gameId}</div>
        {/if}
    </button>
</section>

<style>
    section {
        background-color: black;
        color: whitesmoke;
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    h2 {
        margin: 10px 20px;
        font-size: 32px;
    }
    button {
        --bg-color: #101015;
        --color: #dddddd;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 80%;
        margin: 20px;
        justify-content: center;
        align-items: center;
        font-size: 8vw;
        border-radius: 20px;
        background-color: var(--bg-color);
        border: 2px solid var(--color);
        cursor: pointer;
    }
    button:hover {
        border: 2px solid hsl(from var(--color) h s 25%);
        color: hsl(from var(--color) h s 25%);
        background-color: hsl(from var(--bg-color) h s 10%);
    }
    button:active {
        border: 2px solid hsl(from var(--color) h s 15%);
        color: hsl(from var(--color) h s 15%);
        background-color: hsl(from var(--bg-color) h s 0%);
    }
    .warning {
        color: red;
        font-weight: 600;
        padding: 0px 20px;
    }
</style>
