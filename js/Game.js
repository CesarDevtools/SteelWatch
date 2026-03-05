class Game {
  constructor(playerModel, enemyModel) {
    this.player = playerModel;
    this.enemy = enemyModel;
    this.turn = "player";
    
    this.turnDuration = 15;
    this.timeLeft = this.turnDuration;
    this.timerId = null;

    updateNames(this.enemy, this.player);
    updateEnemyHp(this.enemy.health, this.enemy.maxHealth);
    updatePlayerHp(this.player.health, this.player.maxHealth);

    // Iniciar el primer turno
    this.startTurnTimer();
  }

  //  LOGICA DEL TIMER 
  startTurnTimer() {

    clearInterval(this.timerId);
    this.timeLeft = this.turnDuration;
    
    const timerBar = document.getElementById('timer-bar');
    const timerText = document.getElementById('timer-text');
    const turnText = document.getElementById('current-turn');
    const turnBox = document.querySelector('.turn-box');

    if (this.turn === "player") {
        turnText.innerText = "PLAYER TURN";
        turnBox.classList.remove('enemy-turn');
    } else {
        turnText.innerText = "ENEMY TURN";
        turnBox.classList.add('enemy-turn');
    }

    this.timerId = setInterval(() => {
      this.timeLeft--;

      if (timerText) timerText.innerText = `${this.timeLeft}s`;
      if (timerBar) {
        const percentage = (this.timeLeft / this.turnDuration) * 100;
        timerBar.style.width = `${percentage}%`;
        
        if (this.timeLeft <= 5) timerBar.classList.add('timer-warning');
        else timerBar.classList.remove('timer-warning');
      }

      if (this.timeLeft <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  }

  handleTimeout() {
    clearInterval(this.timerId);
    console.log(`Time out for ${this.turn}`);
    
    if (this.turn === "player") {
      this.turn = "enemy";
      setTimeout(() => this.executeEneumyAction(), 1000);
    } else {
      this.turn = "player";
      this.startTurnTimer();
    }
  }

  //  ACCIONES 
  ExcutePlayerAction(e) {
    if (this.turn !== "player" || this.gameOver()) return;

    if (e.code === "KeyQ") {
      this.player.attack(this.enemy);
      this.player.attackAnimation();
    } else if (e.code === "KeyE") {
      this.player.slashAttack(this.enemy);
      this.player.slashAttackAnim();
    }

    // Detener timer actual al actuar
    clearInterval(this.timerId);
    this.turn = "enemy";
    updateEnemyHp(this.enemy.health, this.enemy.maxHealth);

    if (!this.gameOver()) {
      this.startTurnTimer(); // Reiniciar UI para el turno enemigo
      const randomDelay = Math.floor(Math.random() * (14 - 3 + 1) + 3) * 1000;
      setTimeout(() => {
        this.executeEneumyAction();
      }, randomDelay);
    } else {
      this.enemy.deathkAnimation();
      clearInterval(this.timerId);
    }
  }

  executeEneumyAction() {
    if (this.turn !== "enemy" || this.gameOver()) return;

    this.enemy.attackAnimation();

    setTimeout(() => {
      this.enemy.attack(this.player);
      
      if (!this.gameOver()) {
        this.turn = "player";
        this.startTurnTimer();  // Reiniciar el timer para el jugador
      } else {
        this.player.deathkAnimation();
        clearInterval(this.timerId);
      }
      updatePlayerHp(this.player.health, this.player.maxHealth);
    }, 350);
  }

  // ESTADO DEL JUEGO 
  gameOver() {
    if (this.player.isAlive() && this.enemy.isAlive()) {
      return false;
    } else {
      clearInterval(this.timerId);
      localStorage.clear();
      this.showResult();
      return true;
    }
  }

  showResult() {
    if (this.player.health <= 0) {
      setTimeout(() => { showDefeat(); }, 4000);
    } else if (this.enemy.health <= 0) {
      setTimeout(() => { showVictory(); }, 4000);
    }
  }
}