
export default class PreloadScene extends Phaser.Scene {

    constructor() {
        super('preload');
    }

    preload() {
        this.load.spritesheet(
            'invader1-gold',
            require('../../assets/spritesheets/invader1-gold.png'),
            {
                frameWidth: 79,
                frameHeight: 66
            }
        );

        this.load.on('progress', (percent) => {
            FBInstant.setLoadingProgress(percent * 100);
        });

        this.load.once('complete', () => {
            FBInstant.startGameAsync().then(() => {
                this.scene.start('play');
            });
        });
    }

}