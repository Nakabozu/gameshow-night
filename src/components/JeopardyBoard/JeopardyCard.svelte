<script>
    import { lastCardsScore, page, currentQuestionIndex, dailyDoubleIndex } from "$lib/store";
    export let value = 0;
    export let currentCardIndex = 0;
    let isUsed = false;

    const updateQuestionDetails = () => {
        $currentQuestionIndex = currentCardIndex;
    }

    const updateLastCardsScore = () => {
        let newValue = value;
        if($dailyDoubleIndex === currentCardIndex){
            newValue *= 2;
        }
        $lastCardsScore = newValue;
    }

    const onRightClick = (/** @type {{ preventDefault: () => void; }} */ ev) => {
        ev.preventDefault();
        isUsed = !isUsed;
    }
</script>

<button
    class={`card ${isUsed ? 'greyify' : ""}`}
    on:click={() => {
        $page = 'question';
        updateLastCardsScore();
        updateQuestionDetails();
        isUsed = true;
    }}
    on:contextmenu={onRightClick}
>{value}</button>

<style>
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }

    .card{
        width: 100%;
        height: 100%;
    }
    
    .greyify{
        color: gray;
        background-color: #000A47;
    }
</style>
