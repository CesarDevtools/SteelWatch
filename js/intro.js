const recruitmentForm = document.querySelector(".class-selection");

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
