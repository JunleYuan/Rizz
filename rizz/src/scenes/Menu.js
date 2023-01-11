class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    create() {
        this.play = this.add.image(game.config.width/2 - 175, game.config.height/2 + 200, 'play').setScale(0.5).setInteractive();
        this.play.on('pointerdown', () => {
          
              this.game.sound.stopAll();
              this.sound.play('buttSound');

              this.scene.start("Day1Scene");
          });
    }
    
    update() {

    }
}