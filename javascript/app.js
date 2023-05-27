const body = document.querySelector("body");
const toggleCheckbox = document.querySelector(`[name="checkbox"]`);

toggleCheckbox.addEventListener("change", () => {
	body.classList.toggle("dark");
});

