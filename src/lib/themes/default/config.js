import BritishColumbiaCabin from './BritishColumbiaCabin.jpg';
import WinterJeopardyPodium from './WinterJeopardyPodium.png';
import IcicleImage from './icicles.png'
export default {
    name: "Winter",
    background: BritishColumbiaCabin,
    podium: {
        src: WinterJeopardyPodium,
        height: 150,
        scoreOffsetTop: 52,
    },
    border: "10px solid white",
    borderImage: "repeating-linear-gradient( 45deg, red, red 1%, white 1%, white 8% ) 10;",
    belowBorderImage: IcicleImage
}