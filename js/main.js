const playerName = document.getElementById("player-name");
const enemyName = document.getElementById("enemy-name");
const playerHp = document.getElementById("player-hp");
const enemyHp = document.getElementById("enemy-hp");

/*UI functions*/
function updatePlayerHp(number) {
  if (number < 0) number = 0;
  playerHp.innerText = `${number}`;
}

function updateEnemyHp(number) {
  if (number < 0) number = 0;
  enemyHp.innerText = `${number}`;
}

function showDefeat() {
  window.location.href = "gameover.html";
}

function showVictory() {
  window.location.href = "victory.html";
}

/*Game*/
const gameTest = new Game();

document.addEventListener("keydown", (e) => {
  gameTest.ExcutePlayerAction();
});

updateEnemyHp(gameTest.enemy.health);
updatePlayerHp(gameTest.player.health);
