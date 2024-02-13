<script>
    export let headerText = "HEADER";
    export let bodyText = "";

// IMAGE DETAILS
    export let imageOn = false;
    export let imageSrc = ""

// VIDEO DETAILS
    export let videoOn = false;
    export let width = "560";
    export let height = "315";
    export let videoSrc = "https://www.youtube.com/embed/daF24OPfUVA?si=grq-1PHtXgu0FfNG";
    export let title = "YouTube video player";
    export let frameborder = "0";
    export let allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    export let startTime = "";
</script>

<article>
    <h1>
        {headerText}
    </h1>
    {#if imageOn}
    <span class="picture">
        <picture>
            <source srcset={imageSrc} />
            <img src={imageSrc} alt={bodyText} />
        </picture>
    </span>
    {/if}

    {#if videoOn}
    <iframe 
        width={width}
        height={height}
        src={`${videoSrc}${startTime ? `&start=${startTime}` : ""}&autoplay=1`}
        title={title}
        frameborder={frameborder}
        allow={allow}/>
    {/if}

    <p>
    {bodyText}
    </p>
</article>

<style>
    article{
        display: flex;
        flex-direction: column;
        padding-bottom: 200px;
    }
    
    iframe{
        z-index: 5;
    }
    h1{
        text-wrap: balance;
        margin-bottom: 20px;
    }

    .picture picture img{
        max-height: 600px;
    }
</style>