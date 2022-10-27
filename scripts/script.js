// window.onload = () => {
homePage = document.getElementById("home-page");
btnStart = document.getElementById("start-button");
btnStop = document.getElementById("stop-button");
btnAgain = document.getElementById("start-again");

let game = null;

btnStart.addEventListener("click", () => {
  game = new Game();
  game.startGame();
  console.log(game);
  btnStart.disabled = true;
  btnStart.style.display = "none";
  homePage.style.display = "none";
});
if (!game) {
  btnStop.disabled = true;
}

class BackgroundSky {
  constructor(canvas, ctx) {
    this.image = new Image();
    this.image.src = "img/background/backgroundSky.JPG";
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
class BackgroundFire {
  constructor(canvas, ctx) {
    this.image = new Image();
    this.image.src = "../img/background/background-fire.png";
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = -50;
    this.y = 880;
    this.width = this.canvas.width + 40;
    this.height = 200;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.x - this.canvas.width,
      this.y,
      this.width,
      this.height
    );
  }
  move() {
    this.x += 1;
    this.x %= this.canvas.width;
  }
}
class Kitten {
  constructor(canvas, ctx) {
    this.image = new Image();
    this.image.src = "../img/cat.png";
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * this.canvas.width);
    this.y = -50;
    this.width = 125;
    this.height = 125;
    this.kittenSpeed = 5;
  }
  move() {
    this.y += 2;
  }
  moveFaster() {
    this.y += 1;
  }
  moveFast() {
    this.y += 2;
  }
  topEdge() {
    return this.y;
  }
  rightEdge() {
    return this.x + this.width;
  }
  bottomEdge() {
    return this.y + this.height - 50;
  }
  leftEdge() {
    return this.x;
  }
  draw() {
    if (this.x <= 20 && this.x >= this.canvas.width - 20) {
      return;
    } else {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
}
class Puppy {
  constructor(canvas, ctx) {
    this.image = new Image();
    this.image.src = "../img/puppy5.png";
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * this.canvas.width);
    this.y = -125;
    this.width = 100;
    this.height = 125;
    this.vitesse = 0;
  }
  topEdge() {
    return this.y + 20;
  }
  rightEdge() {
    return this.x + this.width;
  }
  bottomEdge() {
    return this.y + this.height - 30;
  }
  leftEdge() {
    return this.x;
  }
  move() {
    this.y += 3;
  }
  moveFast() {
    this.y += 2;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
class Baby {
  constructor(canvas, ctx) {
    this.image = new Image();
    this.image.src = "../img/text/baby.png";
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 150;
    this.height = 125;
    this.direction = {
      x: 1,
      y: 1,
    };
  }
  topEdge() {
    return this.y;
  }
  rightEdge() {
    return this.x + this.width;
  }
  bottomEdge() {
    return this.y + this.height;
  }
  leftEdge() {
    return this.x;
  }
  outOfBound() {
    if (this.x + this.width > this.canvas.width) {
      this.direction.x += -1;
      return true;
    }
    if (this.y + this.height > this.canvas.height) {
      this.direction.y *= -1;
      return true;
    }
    if (this.x < 0) {
      this.direction.x *= -1;
      return true;
    }
    if (this.y < 0) {
      this.direction.y *= -1;
      return true;
    }
    return false;
  }
  move() {
    this.x += 3 * this.direction.x;
    this.y += 2 * this.direction.y;
  }
  moveFaster() {
    this.x += 4 * this.direction.x;
    this.y += 3 * this.direction.y;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
class Basket {
  constructor(canvas, ctx) {
    this.image = new Image();
    this.image.src = "../img/basket01.png";
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = this.canvas.width / 2 - 100;
    this.y = 730;
    this.width = 200;
    this.height = 150;
  }
  moveLeft() {
    if (this.x <= 20) {
      return;
    }
    this.x -= 50;
  }
  moveRight() {
    if (this.x >= this.canvas.width - this.width - 20) {
      return;
    }
    this.x += 50;
  }
  topEdge() {
    return this.y;
  }
  rightEdge() {
    return this.x + this.width;
  }
  bottomEdge() {
    return this.y + this.height; //- 75;
  }
  leftEdge() {
    return this.x;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
// class Greating {
//   constructor(canvas, ctx) {
//     this.canvas = canvas;
//     this.ctx = ctx;
//     this.image = new Image();
//     this.isImageOn = false;
//     this.textImages = [
//       "./../img/text/high-score01.png",
//       "./../img/text/high-score02.png",
//       "./../img/text/high-score03.png",
//     ];
//     this.image.src = "";
//     //this.image.src = textImages[Math.floor(Math.random() * textImages.length)];
//     this.x = -475;
//     this.y = this.canvas.height / 2 - 50;
//     this.width = 450;
//     this.height = 100;
//   }
//   draw() {
//     this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//   }
//   move() {
//     if (this.x >= this.canvas.width) {
//       return (this.x = -475);
//     } else {
//       this.x += 12;
//     }
//   }
// }
class Game {
  constructor() {
    this.canvas = null;
    this.intervalId = null;
    this.ctx = null;
    this.frames = 0;
    this.init();
    ///////////////////////////// IMAGES /////////////////////////////////////////
    this.background = new BackgroundSky(this.canvas, this.ctx);
    this.backgroundFire = new BackgroundFire(this.canvas, this.ctx);
    this.basket = new Basket(this.canvas, this.ctx);
    this.kittens = [];
    this.puppies = [];
    this.baby = new Baby(this.canvas, this.ctx);
    ///////////////////////////// ADD ON /////////////////////////////////////////
    this.score = 0;
    //this.greatings = [];
    // this.greating = new Greating(this.canvas, this.ctx);
    this.vitesse = 4;
    //canvas.style.cursor = "none";
  }
  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.createEventListeners();
  }
  startGame() {
    return this.mainGame();
  }
  mainGame() {
    //console.log("on");
    this.intervalId = setInterval(() => {
      this.frames++;
      this.background.draw();
      this.backgroundFire.draw();
      this.backgroundFire.move();
      this.basket.draw();
      this.kittenPush();
      this.puppiesPush();
      this.getScore();
      this.babyPush();
      //this.motivationPush();
    }, 1000 / 120);
  }
  //
  randomGreating() {
    this.greating.image.src =
      this.greating.textImages[
        Math.floor(Math.random() * this.greating.textImages.length)
      ];
    console.log(this.greating.image.src);
  }

  kittenPush() {
    //this.vitesse = 4;
    if (this.frames % this.vitesse === 0) {
      if (this.score >= 50) {
        this.vitesse = 5;
      }
      if (this.score >= 100) {
        this.vitesse = 4;
      }
      if (this.score >= 150) {
        this.vitesse = 3;
      }
      if (this.frames % 60 === 0) {
        this.kittens.push(new Kitten(this.canvas, this.ctx));
      }
      //console.log(this.vitesse);
    }
    ///////////////////////////// KITTEN ACTIONS ////////////////////////////////////
    for (let i = 0; i < this.kittens.length; i++) {
      let kitten = this.kittens[i];
      kitten.draw();
      kitten.move();
      ///////////////////////////// COLLISIONS ////////////////////////////////////
      if (this.checkCatch(kitten, this.basket)) {
        this.score += 5;
        this.kittens.splice(kitten, 1);
      } else if (kitten.y + 50 >= this.canvas.height + 100) {
        this.kittens.splice(kitten, 1);
      }
    }
    return this.score;
  }

  puppiesPush() {
    if (this.frames % this.vitesse === 0) {
      this.vitesse = 5;
      if (this.score >= 50) {
        this.vitesse = 4;
      }
      if (this.score >= 100) {
        this.vitesse = 3;
      }
      if (this.score >= 150) {
        this.vitesse = 2;
      }
      if (this.frames % 120 === 0) {
        this.puppies.push(new Puppy(this.canvas, this.ctx));
      }
      console.log(this.vitesse);
    }

    ///////////////////////////// PUPPIES ACTIONS ////////////////////////////////////
    for (let i = 0; i < this.puppies.length; i++) {
      let puppy = this.puppies[i];
      puppy.draw();
      puppy.move();
      ///////////////////////////// COLLISIONS ////////////////////////////////////
      if (this.checkCatch(puppy, this.basket)) {
        //clearInterval(this.intervalId);
        this.score -= 15;
        this.puppies.splice(puppy, 1);
        //return this.score;
      } else if (puppy.y + 50 >= this.canvas.height + 100) {
        this.puppies.splice(puppy, 1);
      }
    }
    return this.score;
  }
  babyPush() {
    if (this.score >= 75) {
      this.baby.outOfBound();
      this.baby.draw();
      this.baby.move();
    }
    if (this.score >= 150) {
      this.baby.moveFaster();
    }
    if (
      this.baby.bottomEdge() >= this.basket.topEdge() &&
      this.baby.leftEdge() >= this.basket.leftEdge() &&
      this.baby.rightEdge() <= this.basket.rightEdge() &&
      this.baby.bottomEdge() >= this.basket.bottomEdge()
    ) {
      this.gameOver();
    }
  }
  checkCatch(animal, basket) {
    const isInY =
      animal.bottomEdge() >= basket.topEdge() &&
      animal.leftEdge() >= basket.leftEdge() &&
      animal.rightEdge() <= basket.rightEdge() &&
      animal.bottomEdge() <= basket.bottomEdge() - 50;
    return isInY;
  }
  getScore() {
    document.querySelector(".score").textContent = this.score;
    const endMessage = document.querySelector("#looser-board");
    const endGame = document.querySelector("#game-board");
    if (this.score < 0) {
      this.gameOver();
    } else {
      endGame.style.display = "flex";
      endMessage.style.display = "none";
      //endMessage.classList.add("not-visible");
      btnStart.disabled = true;
      btnStop.disabled = false;
    }
  }

  //////////////////////  EVENTS  ////////////////////////////////////////::
  createEventListeners() {
    document.addEventListener("keydown", addKeydownEvent);
  }

  pauseAction() {
    if (btnStop.classList.contains("paused")) {
      clearInterval(this.intervalId);
      btnStop.classList.remove("paused");
      btnStop.classList.add("played");
    } else {
      this.mainGame();
      btnStop.classList.remove("played");
      btnStop.classList.add("paused");
    }
  }

  gameOver() {
    const endMessage = document.querySelector("#looser-board");
    const endGame = document.querySelector("#game-board");
    const endGameNav = document.querySelector(".navigation");
    clearInterval(this.intervalId);
    removeEventListener("keydown", addKeydownEvent);
    this.puppies = [];
    this.kittens = [];
    //this.intervalId = null;
    this.canvas.innerHTML = "";
    endGame.style.display = "none";
    endGameNav.style.display = "none";
    endMessage.style.display = "flex";
    //endMessage.classList.remove("not-visible");
    btnStop.disabled = true;
    btnStart.disabled = false;
  }
}

function addKeydownEvent(event) {
  switch (event.key) {
    case "ArrowLeft":
      game.basket.moveLeft();
      break;
    case "ArrowRight":
      game.basket.moveRight();
      break;
    default:
      break;
  }
}

btnStop.addEventListener("click", () => {
  game.pauseAction();
});
