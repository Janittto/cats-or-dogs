// window.onload = () => {
const homePage = document.getElementById("home-page");
const btnStart = document.querySelectorAll(".load-new-game");
const btnStop = document.getElementById("stop-button");
const nav = document.querySelector(".navigation");
const canvasBlock = document.querySelector("#game-board");
//btnAgain = document.getElementById("start-again");

let game = null;
canvasBlock.style.display = "none";

btnStart.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    game = new Game();
    game.startGame();
    btnStart.disabled = true;
    //element.style.display = "none";
    if (element.classList.contains("cat")) {
      console.log("cat lover");
      return canvasBlock.classList.add("cat-lover");
    } else if (element.classList.contains("dog")) {
      return canvasBlock.classList.add("dog-lover");
      console.log("dog lover");
    }
  });
});
if (!game) {
  nav.style.display = "none";
}

//////////////////////////////// OBJ  ///////////////////////////////

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
    this.image.src = "img/background/background-fire.png";
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
    this.image.src = "img/cat.png";
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
    this.image.src = "img/puppy5.png";
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
    this.image.src = "img/text/baby.png";
    this.canvas = canvas;
    this.shakeId = false;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 150;
    this.height = 140;
    this.shakeFactor = 1;
    this.isShaking = false;
    this.direction = {
      x: 1,
      y: 1,
    };
  }
  topEdge() {
    return this.y + 10;
  }
  rightEdge() {
    return this.x + this.width - 15;
  }
  bottomEdge() {
    return this.y + this.height - 15;
  }
  leftEdge() {
    return this.x + 10;
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
  moveRandom() {
    this.x += Math.floor(Math.random() * 4) - 2;
    this.y += Math.floor(Math.random() * 4) - 2;
    this.draw();

    //console.log("Delayed for 1 second.");
    //
  }
  moveFaster() {
    this.x += 4 * this.direction.x;
    this.y += 3 * this.direction.y;
  }
  moveFast() {
    this.x += 2 * this.direction.x;
    this.y += 1 * this.direction.y;
  }
  shake() {
    this.isShaking = true;
  }
  timeShaking() {
    this.shakeId = true;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
class Basket {
  constructor(canvas, ctx) {
    this.image = new Image();
    this.image.src = "img/basket01.png";
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
    this.numberSaved = [];
    this.animalSaved = 0;
    this.puppies = [];

    this.baby = new Baby(this.canvas, this.ctx);
    ///////////////////////////// ADD ON /////////////////////////////////////////
    this.score = 0;
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
    /////////////////////// DISPLAY HTML ///////////////////////////////////////
    homePage.style.display = "none";
    nav.style.display = "flex";
    /////////////////////// INTERVAL ///////////////////////////////////////
    this.intervalId = setInterval(() => {
      this.frames++;

      this.background.draw();
      this.backgroundFire.draw();
      this.backgroundFire.move();
      this.basket.draw();
      if (this.baby.isShaking) {
        this.baby.moveRandom();
        return;
      }
      if (this.baby.shakeId) {
        //clearInterval(this.intervalId);
        //this.gameOver();
        console.log(this.shakeId);
        console.log("fini");
      }
      if (canvasBlock.classList.contains("cat-lover")) {
        console.log("lol");
        this.kittenPush();
        this.puppiesPush();
      } else if (canvasBlock.classList.contains("dog-lover")) {
        console.log("lol reverse");
        this.kittenPushReverse();
        this.puppiesPushReverse();
      }
      this.getScore();
      this.babyPush();
      //this.motivationPush();
    }, 1000 / 120);
  }
  ///////////////////////////////////MAIN ACTIONS ///////////////////////////////////////////

  ///////////////////////////////////CAT LOVER  ///////////////////////////////////////////

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
      //console.log();
      kitten.draw();
      kitten.move();

      ///////////////////////////// COLLISIONS ////////////////////////////////////
      if (this.checkCatch(kitten, this.basket)) {
        this.score += 5;

        this.numberSaved.push(kitten);
        this.kittens.splice(kitten, 1);
        return (this.animalSaved = this.numberSaved.length);
      } else if (kitten.y + 50 >= this.canvas.height + 100) {
        this.kittens.splice(kitten, 1);
      }
    }

    //return this.score;
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
      //console.log(this.vitesse);
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

  ///////////////////////////////////DOG LOVER  ///////////////////////////////////////////

  puppiesPushReverse() {
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
        this.puppies.push(new Puppy(this.canvas, this.ctx));
      }
      //console.log(this.vitesse);
    }
    ///////////////////////////// KITTEN ACTIONS ////////////////////////////////////
    for (let i = 0; i < this.puppies.length; i++) {
      let puppy = this.puppies[i];
      //console.log();
      puppy.draw();
      puppy.move();

      ///////////////////////////// COLLISIONS ////////////////////////////////////
      if (this.checkCatch(puppy, this.basket)) {
        this.score += 5;
        this.numberSaved.push(puppy);
        this.puppies.splice(puppy, 1);
        return (this.animalSaved = this.numberSaved.length);
      } else if (puppy.y + 50 >= this.canvas.height + 100) {
        this.puppies.splice(puppy, 1);
      }
    }

    //return this.score;
  }

  kittenPushReverse() {
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
        this.kittens.push(new Kitten(this.canvas, this.ctx));
      }
      //console.log(this.vitesse);
    }

    ///////////////////////////// PUPPIES ACTIONS ////////////////////////////////////
    for (let i = 0; i < this.kittens.length; i++) {
      let kitten = this.kittens[i];
      kitten.draw();
      kitten.move();
      ///////////////////////////// COLLISIONS ////////////////////////////////////
      if (this.checkCatch(kitten, this.basket)) {
        //clearInterval(this.intervalId);
        this.score -= 15;
        this.kittens.splice(kitten, 1);
        //return this.score;
      } else if (kitten.y + 50 >= this.canvas.height + 100) {
        this.kittens.splice(kitten, 1);
      }
    }
    return this.score;
  }

  ///////////////////////////// BABY ////////////////////////////////////

  babyPush() {
    if (this.score >= 50) {
      this.baby.outOfBound();
      this.baby.draw();
      this.baby.move();
    }
    if (this.score >= 100) {
      this.baby.moveFaster();
    }

    if (this.score >= 150) {
      this.baby.moveFast();
    }
    const isInX =
      this.baby.rightEdge() >= this.basket.leftEdge() &&
      this.baby.leftEdge() <= this.basket.rightEdge();
    const isInY =
      this.baby.topEdge() <= this.basket.bottomEdge() &&
      this.baby.bottomEdge() >= this.basket.topEdge();
    if (isInX && isInY) {
      document.getElementById("mySound").play();
      this.baby.shake();

      setTimeout(() => {
        //console.log("end");

        this.gameOver();
      }, 2000);
      //console.log("this is the third message");
      //this.baby.isShaking = false;
      //this.gameOver();
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
    const notice = document.querySelector(".aside");
    const loveKind = document.querySelector(".animal-kind");
    if (btnStop.classList.contains("paused")) {
      clearInterval(this.intervalId);
      btnStop.classList.remove("paused");
      btnStop.classList.add("played");
      btnStop.textContent = "play";
      notice.style.display = "block";
      if (canvasBlock.classList.contains("cat-lover")) {
        loveKind.textContent = "Kitten";
      } else if (canvasBlock.classList.contains("dog-lover")) {
        loveKind.textContent = "Puppies";
      }
    } else {
      this.mainGame();
      btnStop.classList.remove("played");
      btnStop.classList.add("paused");
      notice.style.display = "none";
      btnStop.textContent = "pause";
    }
  }

  gameOver() {
    const endMessage = document.querySelector("#looser-board");
    const scoreParagraph = document.querySelector("#looser-board h3 span");
    const endGame = document.querySelector("#game-board");
    const endGameNav = document.querySelector(".navigation");
    const savedNumber = document.querySelector(".number-saved");
    const loveKind = document.querySelector(".animal-kind");
    console.log(loveKind);
    clearInterval(this.intervalId);
    removeEventListener("keydown", addKeydownEvent);
    this.puppies = [];
    this.kittens = [];
    this.numberSaved = [];
    //this.intervalId = null;
    this.canvas.innerHTML = "";
    savedNumber.textContent = this.animalSaved;
    if (canvasBlock.classList.contains("cat-lover")) {
      loveKind.textContent = "Kitten";
    } else if (canvasBlock.classList.contains("dog-lover")) {
      loveKind.textContent = "Puppies";
    }
    scoreParagraph.textContent = this.score;
    endGame.style.display = "none";
    endGameNav.style.display = "none";
    endMessage.style.display = "flex";
    //btnStart.style.display = "block"; //endMessage.classList.remove("not-visible");
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
