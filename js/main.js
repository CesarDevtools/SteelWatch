const playerName = document.getElementById("player-name");
const enemyName = document.getElementById("enemy-name");
const playerHp = document.getElementById("bar-text");
const playerHpBar = document.getElementById("player-HpBar");
const enemyHp = document.getElementById("enemyBar-text");
const enemyHpBar = document.getElementById("enemy-HpBar");
const popUps = document.getElementById("player-popup");

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

function showPopup(type, value) {
  popUps.classList.remove(
    "show-battle-msg",
    "pop-hit",
    "pop-critical",
    "pop-blocked",
    "pop-weak",
  );

  void popUps.offsetWidth;

  let message = "";
  let styleClass = "";

  switch (type) {
    case "critical":
      message = `CRITICAL! ${value}`;
      styleClass = "pop-critical";
      break;
    case "weak":
      message = `WEAK! ${value}`;
      styleClass = "pop-weak";
      break;
    case "blocked":
      message = "BLOCKED!";
      styleClass = "pop-blocked";
      break;
    case 'hit': 
      message = `HIT ${value}`;
      styleClass = "pop-hit";
  }

  popUps.innerText = message;
  popUps.classList.add("show-battle-msg", styleClass);
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
