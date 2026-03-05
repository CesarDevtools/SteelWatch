class Enemy {
  constructor(name, health, attackPower) {
    this.sprite = document.getElementById("enemy-sprite");
    this.name = name;
    this.maxHealth = health;
    this.health = health;
    this.attackPower = attackPower;
    this.blockChance = 0;
  }

  attack(target) {
    if (target.isBlocking) {
      target.health = target.health;
      target.blockAnimation();
      makeSound('block-sound')
      showPopup("blocked", 0);
    } else {
      target.health = target.health - this.attackPower;
      target.hurtAnimation();
      makeSound('basic-sound')
      makeSound('hurt-sound')
      showPopup("hit", this.attackPower);
    }
  }

  block() {
    this.blockChance = Math.floor(Math.random() * 10) + 1;
  }

  isAlive() {
    return this.health > 0;
  }

  attackAnimation() {
    this.sprite.classList.replace("idle", "attack");
    setTimeout(() => this.sprite.classList.replace("attack", "idle"), 800);
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
