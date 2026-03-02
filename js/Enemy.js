class Enemy {
    constructor (name, health, attackPower ) {
        this.sprite = document.getElementById('enemy-sprite')
        this.name = name
        this.health = health
        this.attackPower = attackPower
    }

    attack(target) {
        target.health = target.health - this.attackPower
    }

    isAlive() {
        return this.health > 0
    }
    
    attackAnimation() {
        this.sprite.classList.replace("idle", "attack");
        setTimeout(() => this.sprite.classList.replace("attack", "idle"), 800);
    }
}