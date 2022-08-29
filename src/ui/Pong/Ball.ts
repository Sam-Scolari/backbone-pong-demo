import { CircleCollider } from "./colliders";


export default class Ball {
    ctx: any;
    x: number;
    y: number;
    radius: number;
    collider: CircleCollider;
    speed: number
    directionX: number;
    directionY: number;

    constructor(_ctx, _x, _y, _radius) {
        this.ctx = _ctx;
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
        this.directionX = 1;
        this.directionY = 1;
        this.speed = 1;
        this.collider = new CircleCollider(this.ctx, this.x, this.y, this.radius)
    }

    update(player1Score, player2Score, setPlayer1Score, setPlayer2Score) {
    // If ball goes off screen
      if (this.x > this.ctx.canvas.width - this.radius ) {
        setPlayer1Score(player1Score);
        this.directionX *= -1
    };
      if (this.x < this.radius) this.directionX *= -1;
      if (this.y > this.ctx.canvas.height - this.radius) this.directionY *= -1;
      if (this.y < this.radius) this.directionY *= -1;


      
      this.x += this.speed * this.directionX;
      this.y += this.speed * this.directionY;


      
        //   Update collider
      this.collider.update(this.x, this.y);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}