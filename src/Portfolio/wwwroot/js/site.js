document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "✕" : "☰";
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "☰";
}));

document.getElementById("enquiryForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const fields = ["name", "email", "company", "service", "budget", "timeline", "details"];
  const lines = fields.map(key => {
    const value = String(data.get(key) || "").trim();
    return value ? key.toUpperCase() + ":\n" + value : "";
  }).filter(Boolean);
  const subject = encodeURIComponent("Project enquiry from " + data.get("name"));
  const body = encodeURIComponent(lines.join("\n\n"));
  document.querySelector(".form-success").textContent = "Your email draft is ready. Please review it and press Send in your email app.";
  window.location.href = "mailto:ambhoreshatrughna@gmail.com?subject=" + subject + "&body=" + body;
});
