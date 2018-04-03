function setup() {
  createCanvas(500, 500);
  background(200);
}
class Bar {
    constructor(x,y,w,h,scale)  {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.deg = 0
        this.dir = 0
    }
    draw() {
        context.fillStyle = "black"
        context.save()
        context.translate(this.x,this.y)
        context.rotate(this.deg*Math.PI/180)
        for(var i = 0;i<2;i++) {
            context.save()
            context.scale((i*2-1),1)
            context.fillRect(0,0,this.w,this.h)
            this.drawHandler()
            context.restore()
        }
        context.restore()
    }
    drawHandler() {
        context.fillStyle = "black"
        context.fillRect(4*this.w/5,-2*this.h,this.w/10,this.h)
    }
    update() {
        this.deg+=this.dir*6
        if(this.deg<=-30) {
            this.dir = 1
        }
        if(this.deg == 0) {
            this.dir = 0
            this.deg = 0
        }
        if(this.deg>=30) {
            this.dir = -1
        }
    }
    handleTap(x,y) {
        var handler1XL = this.x-(7*this.w)/10,handler1XH = handler1XL+(this.w/10)
        var handler2XL = this.x+(7*this.w)/10,handler2XH = handler2XL+(this.w/10)
        var handlerYL = this.y-(2*this.h),handlerYH = handlerYL+this.h
        if(y>=handlerYL && y<=handlerYH && this.deg == 0) {
            if(x>=handler1XL && x<=handler1XH) {
                this.dir = -1;
            }
            else if(x>=handler2XL && x<=handler2XH) {
                this.dir = 1;
            }
        }
    }
}
class Pivot {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.size = size
    }
    draw() {
        var x = this.x,y = this.y,size = this.size
        context.fillStyle="black"
        context.beginPath()
        context.moveTo(x,y)
        context.lineTo(x+size/2,y+size/2)
        context.lineTo(x-size/2,y-size/2)
        context.fill()
    }
}
var t = 0,frames = 5
var rotatingBar
var pivot
var init = ()=>{
    pivot = new Pivot(canvas.width/2,canvas.height/2,canvas.width/15)
    rotatingBar = new Bar(canvas.width/2,canvas.height/2,canvas.width/10,canvas.height/20)
    t = 0
}
init()

canvas.onmousedown = (event) => {
    console.log(event)
    var x = event.offsetX,y = event.offsetY
    rotatingBar.handleTap(x,y)
}
function draw() {
    context.clearRect(0,0,canvas.width,canvas.height)
    rotatingBar.draw()
    pivot.draw()
    if(t%5 == 0) {
        rotatingBar.update()
    }
    t++
    window.requestAnimationFrame(draw)
}
window.requestAnimationFrame(draw)
