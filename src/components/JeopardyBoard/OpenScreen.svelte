<script>
    import { onMount } from 'svelte';
    import { page, dailyDoubleIndex, currentQuestionIndex } from '$lib/store';
    import dailyDoubleSound from '$lib/audio/DailyDouble.mp3';
    import ZoomOutImage from '../SpecialQuestions/ZoomOutImage.svelte';
    import '$lib/typeDefs'
  import DailyDouble from '../SpecialQuestions/DailyDouble.svelte';

    export let headerText = "OOPS HEADER";
    export let bodyText = "";

    // IMAGE DETAILS
    export let imageSrc = "";

    // ZOOM OUT IMAGE DETAILS
    /**
     * @type {ZoomOutImageType}
     */
    export let zoomOutImageData;

    // VIDEO DETAILS
    export let videoSrc = "";
    export let isYoutube = true;
    export let videoWidth = "560";
    export let videoHeight = "315";
    export let title = "YouTube video player";
    export let frameborder = "0";
    export let allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;";
    export let startTime = "";
    export let isMuted = false;
    export let isShowingControls = true;
    export let audioSrc = "";

    /** @type {HTMLAudioElement}*/
    let audioElement;
    let showDailyDouble = false;
    let timer = 20;
    onMount(()=>{
        timer = 20;
        setInterval(()=>{
            if(timer > 0){
                timer = timer - 1;
            }
        }, 1000);
        if($dailyDoubleIndex === $currentQuestionIndex && $page === 'question'){
            audioElement.play();
            showDailyDouble = true;
            setTimeout(()=>{showDailyDouble = false}, 3000);
        }
    });

    const goToNextPage = () => {
        /** @type {'jeopardy' | 'answer' | 'question'}*/
        let newPage = 'jeopardy';
        if($page === 'question')
            newPage = 'answer'
        if($page === 'answer')
            newPage = 'jeopardy'
        if($page === 'jeopardy')
            newPage = 'question'
        
        $page = newPage;
    }
</script>

<!-- This span creates the blue backdrop -->
<span/>

<!-- !!!DAILY DOUBLE!!! -->
<audio src={dailyDoubleSound} bind:this={audioElement}/>
{#if showDailyDouble}
    <DailyDouble/>
{/if}
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article on:click={goToNextPage}>
    <h1>
        {headerText}
        {#if $page === 'question' && timer > 0}
            <div>{timer}</div>
        {/if}
    </h1>
    

    {#if imageSrc}
        <picture>
            <source srcset={imageSrc} />
            <img src={imageSrc} alt={bodyText} />
        </picture>
    {/if}

    {#if zoomOutImageData}
        <ZoomOutImage 
            imageSrc={zoomOutImageData?.imageSrc}
            startingY={zoomOutImageData?.startingY}
            startingX={zoomOutImageData?.startingX}
            startingZoom={zoomOutImageData?.startingZoom}
        />
    {/if}

    {#if videoSrc && isYoutube}
        <iframe
            width={videoWidth}
            height={videoHeight}
            src={`${videoSrc}&autoplay=1${isMuted ? "&mute=1" : ""}${isShowingControls ? "" : "&controls=0"}${startTime ? `&start=${startTime}` : ""}`}
            {title}
            {frameborder}
            {allow}
        />
    {/if}
    {#if videoSrc && !isYoutube}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
            width={videoWidth}
            height={videoHeight}
            src={`${videoSrc}`}
            autoplay
            muted={isMuted}
        />
    {/if}
    {#if audioSrc}
        <audio src={audioSrc} autoplay controls/>
    {/if}

    {#if bodyText}
        <p>
            {bodyText}
        </p>
    {/if}
</article>



<style>
    span{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;

        background-color: #000A74;
    }
    article {
        display: flex;
        flex-direction: column;

        height: 100%;
        width: clamp(300px, calc(100% - 200px), 100%);

        position: relative;
        align-items: center;
        justify-content: center;
        z-index: 4;
    }

    iframe {
        align-self: center;
        z-index: 5;
    }
    h1 {
        text-wrap: balance;
        margin: 0px 0px 5px 0px;
    }

    h1 > div{
        font-size: large;
    }

    picture img {
        max-height: 450px;
    }

    p {
        font-size: 1.5em;
    }
</style>
