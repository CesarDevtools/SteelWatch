const recruitmentForm = document.querySelector(".class-selection");
//Player selection
if (recruitmentForm) {
  recruitmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(recruitmentForm);
    const selectedClass = formData.get("class-choice");

    localStorage.setItem("selectedPlayerClass", selectedClass);

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      window.location.href = "game.html";
    }, 500);
  });
}

 // Modal 
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("howToPlayModal");
    const btn = document.getElementById("openModal");
    const span = document.querySelector(".close-modal"); // Cambiado a querySelector

    if (btn && modal && span) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("No se encontraron los elementos del modal. Revisa las clases en el HTML.");
    }
});
