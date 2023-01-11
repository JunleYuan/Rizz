

let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    fps: {
        target: 60
    },
    physics: {
        default: 'arcade'
        
    },
    scene: [Loading, Menu]

    //testing
}
    
let game = new Phaser.Game(config);
