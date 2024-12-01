<script>
    export let imageSrc = "https://media.discordapp.net/attachments/1226360071991066624/1312816366960771194/IMG_3043.jpg?ex=674ddf04&is=674c8d84&hm=eb8f4b9f0b5944c58cf1ac65d266f26b448780e531b1e86da03b83e17f8a6851&=&format=webp&width=503&height=671";
    export let startingY = 748;
    export let startingX = 1111;
    export let startingZoom = 540;

    let x = startingX;
    let y = startingY;
    let zoom = startingZoom;
</script>

<div>
    <!-- The hidden image will auto-size the div's width for us to keep it at the right aspect ratio without any fancy calculations -->
    <img src={imageSrc} alt="Fennel Claws" class="hidden-image"/>
    <img 
        style="top: -{y}px; left: -{x}px; height: {zoom}%"
        class="zoom-image"
        src={imageSrc}
        alt="Fennel Claws"/>
</div>

<style>
    div{
        position: relative;

        height: 500px;
        overflow: hidden;

        align-content: center;
    }

    .hidden-image{
        opacity: 0.01;
        height: 100%;
        max-width: 100%;
    }

    .zoom-image{
        position: absolute;

        animation-name: zoomOut;
        animation-delay: 5s;
        animation-duration: 15s;
        /* Smooth animation */
        animation-timing-function: linear;
        /* Keep the final styles of the animation when the animation completes */
        animation-fill-mode: forwards; 
    }

    @keyframes zoomOut{
        to{
            height: 100%;
            top: 0;
            left: 0;
        }
    }
</style>