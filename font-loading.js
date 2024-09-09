if ("fonts" in document) {
  document.fonts.load("1em Departure Mono").then(() => {
    document.documentElement.classList.add("fonts-loaded");
  });
}
