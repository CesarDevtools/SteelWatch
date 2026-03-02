class Game {
    constructor () {
        this.player = new Character ('Knight', 1000, 100)
        this.enemy = new Enemy ('Goblin', 1000, 1000)
        this.turn = 'player'
    }

    showResult() {
        if (this.player.health <= 0) {
             setTimeout(() => {
            showGameOver()
        }, 4000)
        } else {
            /* some function */
        }
    }

    gameOver() {
      if (this.player.isAlive() && this.enemy.isAlive()) {
        return false
      } else {
        console.log("GAME OVER");
        this.showResult()
        return true
      }
    }


    playerTurn () {
        if (this.turn !== 'player') return 

        this.player.attack(this.enemy)
        this.turn = 'enemy'
        updateEnemyHp(this.enemy.health)
        this.player.attackAnimation()

        if (!this.gameOver()) {
            setTimeout(() => {
                this.enemyTurn()
            }, 5000)
        }
    }   

    enemyTurn() {
        if (this.turn !== 'enemy') return
        this.enemy.attack(this.player)
        this.enemy.attackAnimation()
        if(!this.gameOver()) {
            this.turn = 'player'
        }
        updatePlayerHp(this.player.health)
    }
}