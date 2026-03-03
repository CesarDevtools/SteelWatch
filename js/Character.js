class Character {
    constructor (name, health, attackPower ) {
        this.sprite = document.getElementById('player-sprite')
        this.name = name
        this.health = health
        this.attackPower = attackPower
    }

    attack(target) {
        target.health = target.health - this.attackPower
    }

    slashAttack(target) {
        const multiplier = Math.floor(Math.random() * 10) + 1
        
        if (multiplier < 5) {
            target.health = target.health - this.attackPower * 0.3
        } else if (multiplier > 5 && multiplier < 10) {
            target.health = target.health - this.attackPower * 1.2
        } else if (multiplier === 10) {
            target.health = target.health - this.attackPower * 3
        }
    }

    isAlive() {
        return this.health > 0
    }

    attackAnimation() {
        this.sprite.classList.replace("idle", "attack");
        setTimeout(() => this.sprite.classList.replace("attack", "idle"), 800);
    }

    hurtAnimation() {
        this.sprite.classList.replace("idle", "hurt");
        setTimeout(() => this.sprite.classList.replace("hurt", "idle"), 800);
    }

    deathkAnimation() {
        setTimeout(() => {
            this.sprite.classList.replace("idle", "death");
        }, 1000);
    }
}
