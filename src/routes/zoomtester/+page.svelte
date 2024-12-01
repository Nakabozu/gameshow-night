<script>
    let imageSrc = "http://www.cinemacats.com/wp-content/uploads/movies/scrooged02.jpg";
    let startingY = 748;
    let startingX = 1111;
    let startingZoom = 540;

    let x = startingX;
    let y = startingY;
    let zoom = startingZoom;
</script>

<article>
    <div>
        <!-- The hidden image will auto-size the div's width for us to keep it at the right aspect ratio without any fancy calculations -->
        <img src={imageSrc} alt="Fennel Claws" class="hidden-image"/>
        <img 
            style="top: -{y}px; left: -{x}px; height: {zoom}%"
            class="zoom-image"
            src={imageSrc}
            alt="Fennel Claws"/>
    </div>
</article>

<style>
    article{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: bisque;
    }

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

        top: 0px;
        left: 0px;
        height: 100%;

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