class Cell {
    constructor(game, r, c) {
        this.width = game.cellWidth;
        this.height = game.cellHeight;
        let x = c * this.width;
        let y = r * this.height;
        this.loc = new JSVector(x, y);
        this.r = r;
        this.c = c;
        this.isPath = false;
        // this.num = num
        // let red = Math.random() * 2;
        // let grn = Math.random() * 200 + 55;
        // let blu = Math.random() * 100 + 55;
        // this.clr = "rgba(" + red + ", " + grn + "," + blu + ", " + .65 + ")"
    }//  +++++++++  end constructor

    run() {
        this.render();
        // this.update();
    }

    render() {
        let ctx = game.ctx;

        if(this.isPath) {
            ctx.fillStyle = "burlywood";
            ctx.fillRect(this.loc.x, this.loc.y,this.width, this.height);
        }
        //render cell
        // ctx.fillStyle = this.clr;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
        // ctx.fill();
        ctx.stroke();
        // ctx.font = '10px serif';
        // ctx.strokeText("r = " + this.r, this.loc.x + 5, this.loc.y + 11);
        // ctx.strokeText("c = " + this.c, this.loc.x + 5, this.loc.y + 31);

    }

    update() {

    }
}//+++++++++++++++++++++  end of Cell class
