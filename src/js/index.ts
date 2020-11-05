
import Phaser from 'phaser';
import config from './scenes/config';


FBInstant.initializeAsync().then(() => {new Phaser.Game(config)});