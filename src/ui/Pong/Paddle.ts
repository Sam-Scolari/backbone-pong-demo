import { BoxCollider } from "./colliders";


export default class Paddle {
    ctx: any;
    side: number;
    x: number;
    y: number;
    width: number;
    height: number;
    collider: BoxCollider;
    speed: number;
    padding: number;

    constructor(_ctx, _side, _y, _width, _height) {
        this.ctx = _ctx;
        this.side = _side;
        this.padding = 16;
        this.y = _y - _height / 2;
        this.x = this.side ? this.ctx.canvas.width - this.padding - 8 : this.padding;
        this.width = _width;
        this.height = _height;
        this.speed = 3;

        this.collider = new BoxCollider(this.ctx, this.x, this.y, this.width, this.height)
    }

    up() {
        if (this.y > this.padding) {
            this.y -= this.speed;
            this.collider.update(this.x, this.y);
        }
    }

    down() {
        if (this.y < this.ctx.canvas.height - this.height -  this.padding) {
            this.y += this.speed;
            this.collider.update(this.x, this.y);
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
    }
}