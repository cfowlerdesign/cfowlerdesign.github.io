if ("fonts" in document) {
  Promise.all([
    document.fonts.load("1em Inter"),
    document.fonts.load("400 1em Inter"),
    document.fonts.load("700 1em Inter")
  ]).then(() => {
    document.documentElement.classList.add("fonts-loaded");
  });
}
