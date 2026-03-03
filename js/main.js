const playerName = document.getElementById("player-name");
const enemyName = document.getElementById("enemy-name");
const playerHp = document.getElementById("bar-text");
const playerHpBar = document.getElementById("player-HpBar");
const enemyHp = document.getElementById("enemyBar-text");
const enemyHpBar = document.getElementById("enemy-HpBar");

/*UI functions*/

function updateNames(enemy, player) {
  playerName.innerText = `${player.name}`;
  enemyName.innerText = `${enemy.name}`;
}

function updatePlayerHp(health, maxHealth) {
  if (health < 0) health = 0;

  let percentage = (health / maxHealth) * 100;
  percentage = Math.max(0, Math.min(percentage, 100));

  playerHpBar.style.width = `${percentage}%`;
  playerHp.innerText = `${health} / ${maxHealth}`;
}

function updateEnemyHp(health, maxHealth) {
  if (health < 0) health = 0;

  let percentage = (health / maxHealth) * 100;
  percentage = Math.max(0, Math.min(percentage, 100));

  enemyHpBar.style.width = `${percentage}%`;
  enemyHp.innerText = `${health} / ${maxHealth}`;
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
