if(typeof document!=="undefined"){
  const saved = localStorage.getItem("theme");
  const next = saved ? saved : "light";
  document.documentElement.dataset.theme = next === "light" ? "light" : "";
}
