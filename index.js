class InfoCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="card">
            <h3>${this.getAttribute("title")}</h3>
            <p>${this.getAttribute("description")}</p>
        </div>`;
    }
}
customElements.define("info-card", InfoCard);

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.backgroundColor = "#f0f0f0";
        });
        section.addEventListener("mouseleave", () => {
            section.style.backgroundColor = "white";
        });
    });
});