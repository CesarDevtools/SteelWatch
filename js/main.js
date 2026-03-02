const attackbutton = document.getElementById('attack-btn')
const playerName = document.getElementById('player-name')
const enemyName = document.getElementById('enemy-name')
const playerHp = document.getElementById('player-hp')
const enemyHp = document.getElementById('enemy-hp')


function updatePlayerHp (number) {
    playerHp.innerText = `${number}`
}
function updateEnemyHp (number) {
    enemyHp.innerText = `${number}`
}

const gameTest = new Game()

attackbutton.addEventListener('click', () => {
    gameTest.playerTurn()
})

updateEnemyHp(gameTest.enemy.health)
updatePlayerHp(gameTest.player.health)