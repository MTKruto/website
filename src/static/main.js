document.addEventListener("click", (e) => {
  if (e.target instanceof HTMLButtonElement) {
    const button = e.target;
    if (button.dataset["codeblock"]) {
      const i_ = Number(button.dataset["codeblock"]);
      for (const [i, v] of [...button.parentElement.children].entries()) {
        if (i == i_) {
          v.style.background = "";
        } else {
          v.style.background = "transparent";
        }
      }

      for (
        const [i, v] of [...button.parentElement.parentElement.children].slice(
          1,
        ).entries()
      ) {
        if (i == i_) {
          v.style.display = "block";
        } else {
          v.style.display = "none";
        }
      }
    }
  }
  if ("anchor" in e.target.dataset) {
    location.href = "#" + e.target.id;
  }
});
