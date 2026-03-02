class Game {
    constructor () {
        this.player = new Character ('Knight', 100, 100)
        this.enemy = new Enemy ('Goblin', 200, 100)
        this.turn = 'player'
    }

    checkGameOver() {
      if (this.player.isAlive() && this.enemy.isAlive()) {
          console.log("GAME CONTINUES");
        return false
      } else {
        console.log("GAME OVER");
        return true
      }
    }


    playerTurn () {
        if (this.turn !== 'player') return 

        this.player.attack(this.enemy)
        this.turn = 'enemy'
        this.checkGameOver()
        updateEnemyHp(this.enemy.health)

        if (this.enemy.isAlive()) {
            setTimeout(() => {
                this.enemyTurn()
            }, 2000)
        }
    }   

    enemyTurn() {
        if (this.turn !== 'enemy') return
        
        this.enemy.attack(this.player)
        if(this.player.isAlive()) {
            this.turn = 'player'
        }
        this.checkGameOver()
        updatePlayerHp(this.player.health)
    }
}