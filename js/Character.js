class Character {
    constructor (name, health, attackPower ) {
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

}