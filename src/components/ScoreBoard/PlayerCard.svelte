<script>
    export let name = "";
    export let theme;
    let score = 0;
    let isScoreUpdaterOpen = false;
    let isNegative = false;
    const scoreUpdateOptions = [0, 200, 400, 600, 800, 1000];
    const podiumHeight = theme?.podiumHeight ? theme.podiumHeight : 125;

    import podium from '$lib/images/JeopardyPodium.png';

</script>

<section class="player-card-container">
    <div role="menu" popover="auto" id={`scoreboard-${name}`} class="scoreboard-popover-container" style='--name-of-anchor: --anchor-{name};'>
        <div class="scoreboard-popover-content">
            {#each scoreUpdateOptions as scoreUpdate}
                <button on:click={() => {
                    if(isNegative)
                        score -= scoreUpdate;
                    else
                        score += scoreUpdate;
                    isScoreUpdaterOpen = false;
                }}>{scoreUpdate}</button>
            {/each}
        </div>
    </div>

    <section class="score-wrapper">
        <div class="name" style='--name-of-anchor: --anchor-{name};'>
            {name}
        </div>
        <div>
            {score}
        </div>
        <span>
            <button popovertarget={`scoreboard-${name}`} on:click={() => {
                isNegative = true;
                isScoreUpdaterOpen = true;
            }}>
                -
            </button>
            <button popovertarget={`scoreboard-${name}`} on:click={() => {
                isNegative = false;
                isScoreUpdaterOpen = true;
            }}>
                +
            </button>
        </span>
    </section>

    <span class="podium">
        <picture>
            <source srcset={theme?.podium ? theme?.podium : podium} type="image/png" height={podiumHeight}/>
            <img src={podium} alt="Podium" />
        </picture>
    </span>
</section>

<style>
    .player-card-container{
        position: relative;
    }

    .score-wrapper{
        position: absolute;
        top: 22px;
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 4;
    }

    .name{
        anchor-name: var(--name-of-anchor);

        margin-bottom: 20px;
    }

    .score-wrapper button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 20px;

        line-height: 1rem;
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
    
    .scoreboard-popover-container{
        position-anchor: var(--name-of-anchor);
        bottom: anchor(top);
        right: anchor(right);

        /* DO NOT ASSIGN display TO A POPOVER CONTAINER OR IT CANNOT OPEN AND CLOSE */
        z-index: 10;
        border: 3px solid grey;
        border-radius: 6px;
    }

    .scoreboard-popover-content{
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