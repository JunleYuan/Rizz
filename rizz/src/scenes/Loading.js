class Loading extends Phaser.Scene {
    constructor() {
        super("loading");
    }

    

    preload() {
        //this.load.image('backgroundWS', './assets/back.png');
        
        let loadingBar = this.add.graphics({
            
            fillStyle: {
                color: 0xffffff //white
            }
            
        })
        this.loadWidth = 200;
        this.loadHeight = 50;

   

        this.loadIMG();

     
        this.loadSound();

        
        
        
        
        this.load.on("progress",(percent)=>{
            loadingBar.fillRect(this.game.renderer.width/2 - this.loadWidth/2, this.game.renderer.height/2, this.loadWidth * percent, this.loadHeight);

        })

    }

    create() {
        
        this.scene.start("menu");

        //this.scene.start("total");
        
    }

    update(delta) {

    }

    loadIMG(){
        this.load.json('day1', './assets/json/day1.json');
        
    }

    loadSound(){
        //this.load.audio('backgroundMusic', './assets/Mimi.mp3');

    }

}