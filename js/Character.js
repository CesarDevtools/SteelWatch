class Player {
  constructor(name, health, attackPower) {
    this.sprite = document.getElementById("player-sprite");
    this.name = name;
    this.maxHealth = health
    this.health = health;
    this.attackPower = attackPower;
    this.isBlocking = false;
  }

  attack(target) {
    target.block();

    if (target.blockChance === 10) {
      target.health = target.health;
      target.blockAnimation();
      showPopup('blocked', 0)
    } else {
      target.health = target.health - this.attackPower;
      target.hurtAnimation();
      showPopup('hit', this.attackPower)
    }
  }

  slashAttack(target) {
    const multiplier = Math.floor(Math.random() * 10) + 1;
    target.block();

    if (target.blockChance === 10) {
      target.health = target.health;
      target.blockAnimation();
      showPopup('blocked', 0)
    } else if (multiplier < 5) {
      target.health = target.health - this.attackPower * 0.5;
      target.hurtAnimation();
    } else if (multiplier > 5 && multiplier < 10) {
      target.health = target.health - this.attackPower * 1.2;
      target.hurtAnimation();
    } else if (multiplier === 10) {
      target.health = target.health - this.attackPower * 3;
      target.hurtAnimation();
    }
  }

  block() {
    this.isBlocking = true;
    setTimeout(() => {
      this.isBlocking = false;
    }, 200);
  }

  isAlive() {
    return this.health > 0;
  }

  /***********************/
  /*****ANIMATIONS********/
  /***********************/

  attackAnimation() {
    this.sprite.classList.replace("idle", "attack");
    setTimeout(() => this.sprite.classList.replace("attack", "idle"), 800);
  }

  slashAttackAnim() {
    this.sprite.classList.replace("idle", "slashAttack");
    setTimeout(() => this.sprite.classList.replace("slashAttack", "idle"), 800);
  }

  blockAnimation() {
    this.sprite.classList.replace("idle", "block");
    setTimeout(() => this.sprite.classList.replace("block", "idle"), 800);
  }

  hurtAnimation() {
    this.sprite.classList.replace("idle", "hurt");
    setTimeout(() => this.sprite.classList.replace("hurt", "idle"), 800);
  }

  deathkAnimation() {
    setTimeout(() => this.sprite.classList.replace("idle", "death"), 1000);
  }
}
