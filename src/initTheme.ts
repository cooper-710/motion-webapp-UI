if (typeof document !== "undefined") {
  const saved = localStorage.getItem("theme");
  const next = saved || "light";
  document.documentElement.dataset.theme = next === "light" ? "light" : "";
  localStorage.setItem("theme", next);
}
