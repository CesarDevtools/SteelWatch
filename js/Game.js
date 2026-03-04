class Game {
  constructor(playerModel, enemyModel) {
    this.player = playerModel;
    this.enemy = enemyModel;
    this.turn = "player";

    updateNames(this.enemy, this.player);
    updateEnemyHp(this.enemy.health, this.enemy.maxHealth);
    updatePlayerHp(this.player.health, this.player.maxHealth);
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
      localStorage.clear()
      this.showResult();
      return true;
    }
  }

  ExcutePlayerAction(e) {
    if (this.turn !== "player") return;

    if (e.code === "KeyQ") {
      this.player.attack(this.enemy);
      this.player.attackAnimation();
    } else if (e.code === "KeyE") {
      this.player.slashAttack(this.enemy);
      this.player.slashAttackAnim();
    }

    this.turn = "enemy";
    updateEnemyHp(this.enemy.health, this.enemy.maxHealth);

    if (!this.gameOver()) {
      setTimeout(() => {
        this.executeEneumyAction();
      }, 2000);
    } else {
      this.enemy.deathkAnimation();
    }
  }

  executeEneumyAction() {
    if (this.turn !== "enemy") return;

    this.enemy.attackAnimation();

    setTimeout(() => {
      this.enemy.attack(this.player);
      if (!this.gameOver()) {
        this.turn = "player";
      } else {
        this.player.deathkAnimation();
      }
      updatePlayerHp(this.player.health, this.player.maxHealth);
    }, 350);
  }
}
