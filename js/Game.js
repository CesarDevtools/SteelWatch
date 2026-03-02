class Game {
  constructor() {
    this.player = new Character("Knight", 1000, 1000);
    this.enemy = new Enemy("Traitor", 1000, 800);
    this.turn = "player";
  }

  showResult() {
    if (this.player.health <= 0) {
      setTimeout(() => {
        showDefeat();
      }, 4000);
    } else if (this.enemy.health <= 0) {
      setTimeout(() => {
        showVictory();
      }, 4000);
    }
  }

  gameOver() {
    if (this.player.isAlive() && this.enemy.isAlive()) {
      return false;
    } else {
      console.log("GAME OVER");
      this.showResult();
      return true;
    }
  }

  playerTurn() {
    if (this.turn !== "player") return;

    this.player.attack(this.enemy);
    this.turn = "enemy";
    updateEnemyHp(this.enemy.health);
    this.player.attackAnimation();
    this.enemy.hurtAnimation();

    if (!this.gameOver()) {
      setTimeout(() => {
        this.enemyTurn();
      }, 2000);
    } else {
      this.enemy.deathkAnimation();
    }
  }

  enemyTurn() {
    if (this.turn !== "enemy") return;
    this.enemy.attack(this.player);
    this.enemy.attackAnimation();
    this.player.hurtAnimation();
    if (!this.gameOver()) {
      this.turn = "player";
    } else {
      this.player.deathkAnimation();
    }
    updatePlayerHp(this.player.health);
  }
}
