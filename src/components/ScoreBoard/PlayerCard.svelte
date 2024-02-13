<script>
    export let name = "";
    let score = 0;
    let isScoreUpdaterOpen = false;
    let isNegative = false;
    const scoreUpdateOptions = [0, 200, 400, 600, 800, 1000];
    const podiumHeight = 125;

    import podium from '$lib/images/JeopardyPodium.png';

</script>

<section>
    <dialog open={isScoreUpdaterOpen}>
        <form method="dialog">
        {#each scoreUpdateOptions as scoreUpdate}
            <button on:click={() => {
                if(isNegative)
                    score -= scoreUpdate;
                else
                    score += scoreUpdate;
                isScoreUpdaterOpen = false;
            }}>{scoreUpdate}</button>
        {/each}
    </form>
    </dialog>

    <section class="score-wrapper">
        <div class="name">
            {name}
        </div>
        <div>
            {score}
        </div>
        <span>
            <button on:click={() => {
                isNegative = true;
                isScoreUpdaterOpen = true;
            }}>
                -
            </button>
            <button on:click={() => {
                isNegative = false;
                isScoreUpdaterOpen = true;
            }}>
                +
            </button>
        </span>
    </section>

    <span class="podium">
        <picture>
            <source srcset={podium} type="image/png" height={podiumHeight}/>
            <img src={podium} alt="Podium" />
        </picture>
    </span>
</section>

<style>
    .score-wrapper{
        position: absolute;
        top: 22px;
        display: flex;
        flex-direction: column;
        width: 125px;
        z-index: 4;
    }

    .name{
        margin-bottom: 20px;
    }

    .score-wrapper button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 20px;
    }

    .podium{
        position: relative;
        z-index: 3;
    }

    .podium picture{
        aspect-ratio: 1 / 1;
    }

    div{
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    
    dialog{
        margin: 0;
        width: 50vw;
        bottom: 100px;

        z-index: 10;
    }

    dialog form{
        display: flex;
        justify-content: space-evenly;
        gap: 30px;
        font-size: 2rem;
    }

    .score-wrapper span{
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-self: center;
        justify-self: center;
        margin-top: 5px;
    }
</style>