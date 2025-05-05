let game = {
    width : 640,
    height : 360,
    ctx: undefined,
    platform: undefined,
    ball: undefined,
    rows: 4,
    colums: 8,
    blocks : [],
    sprites: {
        background: undefined,
        platform: undefined,
        ball: undefined,
        block: undefined,
    },
    init: function(){
        let canvas = document.getElementById('mycanvas');
        this.ctx = canvas.getContext("2d")
    },
    load: function(){
        for(let key in this.sprites){
            this.sprites[key] = new Image();
            this.sprites[key].src = "img/" + key +".png";
        }
        // this.sprites.background = new Image();
        // this.sprites.background.src = "img/background.png"
        // this.sprites.platform = new Image();
        // this.sprites.platform.src = "img/platform.png"
    },
    create: function(){
        for(let colum = 0; colum < this.colums; colum++){
            this.blocks.push({
                x : 68*colum,
                y : 0,
                width: 64,
                height:32,
            })
        }
    },
    start: function(){
            this.init();
            this.load();
            this.create();
            this.run();
    },
    render: function(){
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.ctx.drawImage(this.sprites.ball, this.ball.width * this.ball.frame, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.height, this.ball.width);

        this.blocks.forEach(function(element){
            this.ctx.drawImage(this.sprites.block, element.x, element.y)

        },this)
    },
    run: function(){
        this.render();
        window.requestAnimationFrame(function(){
            game.run();
        })
    }
}

game.ball = {
    width : 20,
    height : 20,
    frame : 0,
    x : 340,
    y : 270
}

game.platform = {
    x : 300,
    y : 300
}

window.addEventListener("load", function(){
    game.start();
})


