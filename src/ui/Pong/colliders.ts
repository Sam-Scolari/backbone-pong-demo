// export function BoxCollision(r1,r2){
//     return !(r1.x>r2.x+r2.w || r1.x+r1.w<r2.x || r1.y>r2.y+r2.h || r1.y+r1.h<r2.y);
// }

// export function CircleCollision(c1,c2){
//     var dx=c2.x-c1.x;
//     var dy=c2.y-c1.y;
//     var rSum=c1.r+c2.r;
//     return(dx*dx+dy*dy<=rSum*rSum);
// }

export function BoxCircleCollision(rect,circle){
    var dx=Math.abs(circle.x-(rect.x+rect.width/2));
    var dy=Math.abs(circle.y-(rect.y+rect.y/2));

    if( dx > circle.radius+rect.width ){ return(false); }
    if( dy > circle.radius+rect.height ){ return(false); }

    if( dx <= rect.width ){ return(true); }
    if( dy <= rect.height ){ return(true); }

    var dx=dx-rect.width;
    var dy=dy-rect.height
    return(dx*dx+dy*dy<=circle.radius*circle.radius);
}

export class BoxCollider {
    ctx: any;
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(_ctx, _x, _y, _w, _h) {
        this.ctx = _ctx;
        this.x = _x - _w / 2;
        this.y = _y - _h / 2;
        this.w = _w;
        this.h = _h;
       
    }

    update(_x, _y) {
        this.x = _x;
        this.y = _y;
       
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle="red";
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.stroke();
    }
}

export class CircleCollider {
    ctx: any;
    x: number;
    y: number;
    r: number;
    

    constructor(_ctx, _x, _y, _r) {
        this.ctx = _ctx;
        this.x = _x - _r / 2;
        this.y = _y - _r / 2;
        this.r = _r;
      
    }

    update(_x, _y) {
        this.x = _x;
        this.y = _y;
       
    }

    draw() {
         this.ctx.beginPath();
         this.ctx.strokeStyle="red";
        this.ctx.arc(this.x, this.y, this.r, 0);
        this.ctx.stroke();
    }
}