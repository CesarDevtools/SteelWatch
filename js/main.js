const playerName = document.getElementById("player-name");
const enemyName = document.getElementById("enemy-name");
const playerHp = document.getElementById("bar-text");
const playerHpBar = document.getElementById('player-HpBar')
const enemyHp = document.getElementById("enemy-hp");

/*UI functions*/
function updatePlayerHp(health, maxHealth) {
  if (health < 0) health = 0;

  let percentage = (health / maxHealth) * 100;
  percentage = Math.max(0, Math.min(percentage, 100));

  playerHpBar.style.width = `${percentage}%`;
  playerHp.innerText = `${health} / ${maxHealth}`;
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

/* Control functions */
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyQ" || e.code === "KeyE") gameTest.ExcutePlayerAction(e);
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") gameTest.player.block();
});

/*Game*/
const gameTest = new Game();
updateEnemyHp(gameTest.enemy.health);
updatePlayerHp(gameTest.player.health, gameTest.player.maxHealth);
