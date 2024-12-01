<script>
    import { page } from '$lib/store';

    export let headerText = "HEADER";
    export let bodyText = "";

    // IMAGE DETAILS
    export let imageSrc = "";

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

    const goToNextPage = () => {
        /** @type {'jeopardy' | 'answer' | 'question'}*/
        let newPage = 'jeopardy';
        if($page === 'question')
            newPage = 'answer'
        if($page === 'answer')
            newPage = 'jeopardy'
        if($page === 'jeopardy')
            newPage = 'question'
        
        console.log(`${$page} -> ${newPage}`);
        $page = newPage;
    }
</script>

<!-- This span creates the blue backdrop -->
<span/>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article on:click={goToNextPage}>
    <h1>
        {headerText}
    </h1>

    {#if imageSrc}
        <picture>
            <source srcset={imageSrc} />
            <img src={imageSrc} alt={bodyText} />
        </picture>
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
        margin: 0px 0px 20px 0px;
    }

    picture img {
        max-height: 450px;
    }

    p {
        font-size: 1.5em;
    }
</style>
