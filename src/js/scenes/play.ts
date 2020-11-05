
import config from "./config";


export default class PlayScene extends Phaser.Scene {

    constructor() {
        super('play');
    }

    create() {
        this.add.sprite(config.width / 2, config.height / 2, 'invader1-gold');
    }

}