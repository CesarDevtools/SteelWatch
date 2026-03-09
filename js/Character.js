class Player {
  constructor(name, health, attackPower) {
    this.sprite = document.getElementById("player-sprite");
    this.name = name;
    this.maxHealth = health;
    this.health = health;
    this.attackPower = attackPower;
    this.isBlocking = false;
    this.canBlock = true; 
  }

  attack(target) {
    target.block();

    if (target.blockChance >= 9) {
      target.health = target.health;
      target.blockAnimation();
      showPopup("blocked", 0);
      makeSound("block-sound");
    } else {
      target.health = target.health - this.attackPower;
      makeSound("basic-sound");
      makeSound("hurtEnemy-sound");
      target.hurtAnimation();
      showPopup("hit", this.attackPower);
    }
  }

  slashAttack(target) {
    target.block();
    const multiplier = Math.floor(Math.random() * 10) + 1;
    const attackTypes = {
      weak: { label: "weak", mod: 0.5 },
      normal: { label: "hit", mod: 1.5 },
      critical: { label: "critical", mod: 3 },
    };

    if (target.blockChance > 4) {
      target.blockAnimation();
      makeSound("block-sound");
      return showPopup("blocked", 0);
    }

    let attack;
    if (multiplier < 7) {
      makeSound("weak-sound");
      makeSound("hurtEnemy-sound");
      attack = attackTypes.weak;
    }
    if (multiplier >= 7 && multiplier <= 8) {
      makeSound("basic-sound");
      makeSound("hurtEnemy-sound");
      attack = attackTypes.normal;
    }
    if (multiplier >= 9) {
      makeSound("crit-sound");
      makeSound("hurtEnemy-sound");
      attack = attackTypes.critical;
    }

    const damage = Math.floor(this.attackPower * attack.mod);
    target.health -= damage;

    target.hurtAnimation();
    showPopup(attack.label, damage);
  }

  block() {
    if (!this.canBlock) return;

    this.isBlocking = true;
    this.canBlock = false; 
  
    setTimeout(() => {
      this.isBlocking = false;
    }, 200);

    setTimeout(() => {
      this.canBlock = true;
    }, 1000);
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
