import WinterJeopardyPodium from './WinterJeopardyPodium.png';
import IcicleImage from './icicles.png'
export default {
    name: "Winter",
    background: 'https://images.pexels.com/photos/140234/pexels-photo-140234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    podium: {
        src: WinterJeopardyPodium,
        height: 160,
        scoreOffsetTop: 52,
    },
    border: "10px solid white",
    borderImage: "repeating-linear-gradient( 45deg, red, red 1%, white 1%, white 8% ) 10;",
    belowBorderImage: IcicleImage
}