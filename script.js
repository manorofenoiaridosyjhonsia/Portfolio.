const pages = document.querySelectorAll('.book-page');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentPage = 0;

function updateZIndex() {
    pages.forEach((page, index) => {
        if (index < currentPage) {
            // Pages tournées à gauche
            page.style.zIndex = index;
        } else {
            // Pages empilées à droite (la page actuelle sur le dessus)
            page.style.zIndex = pages.length - index;
        }
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add('turn');
        currentPage++;
        // On attend la fin de l'animation pour ajuster l'empilement
        setTimeout(updateZIndex, 500);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('turn');
        updateZIndex();
    }
}

// Initialisation
updateZIndex();

nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

// Gestion de la Modal
const infoBtn = document.getElementById("infoBtn");
const modal = document.getElementById("infoModal");
const closeModal = document.getElementById("closeModal");

infoBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Évite de tourner la page en cliquant sur le bouton
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => modal.classList.add("hidden"));

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
});