<script>
    import {
        lastCardsScore,
        page,
        currentQuestionIndex,
        dailyDoubleIndex,
        socket,
    } from "$lib/store";
    export let value = 0;
    export let currentCardIndex = 0;
    let isUsed = false;

    const updateQuestionDetails = () => {
        $currentQuestionIndex = currentCardIndex;
    };

    const updateLastCardsScore = () => {
        let newValue = value;
        if ($dailyDoubleIndex === currentCardIndex) {
            newValue *= 2;
        }
        $lastCardsScore = newValue;
    };

    const onRightClick = (
        /** @type {{ preventDefault: () => void; }} */ ev,
    ) => {
        ev.preventDefault();
        isUsed = !isUsed;
    };

    const resetBuzzers = () => {
        socket.emit("client_unbuzzes_all", () => {
            console.log(`Unbuzzed all`);
        });
    };
</script>

<button
    class={`card ${isUsed ? "greyify" : ""}`}
    on:click={() => {
        $page = "question";
        updateLastCardsScore();
        updateQuestionDetails();
        resetBuzzers();
        isUsed = true;
    }}
    on:contextmenu={onRightClick}>{value}</button
>

<style>
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }

    .card {
        width: 100%;
        height: 100%;
    }

    .greyify {
        color: gray;
        background-color: #000a47;
    }
</style>
