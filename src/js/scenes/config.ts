
import PlayScene from './play';
import PreloadScene from './preload';


var config: Phaser.Types.Core.GameConfig = {
    width: 360,
    height: 640,
    scene: [PreloadScene, PlayScene],
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}


export default config;