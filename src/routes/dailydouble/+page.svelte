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
        <img class="flip-and-zoom-image" src="https://miro.medium.com/v2/resize:fit:1200/0*pK28BGqcH9atFP8_.png" alt="Daily Double"/>
    </div>
</article>

<style>
    article{
        width: 100%;
        height: 100%;

        background-color: bisque;
    }

    div{
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;

        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        
        z-index: 100;
        background-color: #000A74;
    }


    .flip-and-zoom-image{
        height: 0.1%;
        max-height: 100%;
        width: 0.1%;
        max-width: 100%;

        object-fit: cover;

        animation-name: flip-and-zoom;
        animation-delay: 0s;
        animation-duration: 2s;
        /* Smooth animation */
        animation-timing-function: linear;
        /* Keep the final styles of the animation when the animation completes */
        animation-fill-mode: forwards; 
        animation-iteration-count: 1;

        rotate: 1 0 0 0deg;
    }

    @keyframes flip-and-zoom{
        to{
            width: 100.1%;
            height: 100.1%;
            rotate: 1 0 0 720deg;
        }
    }
</style>