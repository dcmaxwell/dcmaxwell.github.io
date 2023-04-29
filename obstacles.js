const obstaclesArray = [];

class Obstacle {
    constructor(){
    this.top = (Math.random() * canvas.height/3) + 25;
    this.bottom = (Math.random() * canvas.height/3) + 25;
    this.x = canvas.clientWidth;
    this.width = 80;
    this.color = 'hsla(' + hue + ', 100%, 50%, 1)';
    this.counted = false;    

    }
    draw(){
        const topImg = new Image();
        topImg.src = 'obstacles.png';
        const bottomImg = new Image();
        bottomImg.src = 'obstacles.png';
    
        // Draw top obstacle
        ctx.drawImage(topImg, this.x, 0, this.width, this.top);
    
        // Draw bottom obstacle
        ctx.drawImage(bottomImg, this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    
    update(){
        this.x -= gamespeed;
        if (!this.counted && this.x < bird.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles(){         
    if (frame%100 ===0){
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}

