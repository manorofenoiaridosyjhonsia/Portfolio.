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

// --- GESTION DES MODALES ---

// Éléments Motivation
const mtvBtn = document.getElementById("mtvBtn");
const mtvModal = document.getElementById("mtvModal");

// Éléments Information
const infoBtn = document.getElementById("infoBtn");
const infoModal = document.getElementById("infoModal");

// Fonction générique pour fermer toutes les modales
function closeAllModals() {
    mtvModal.classList.add("hidden");
    infoModal.classList.add("hidden");
}

// Ouvrir Motivation
mtvBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mtvModal.classList.remove("hidden");
});

// Ouvrir Information
infoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    infoModal.classList.remove("hidden");
});

// Fermer au clic sur n'importe quel bouton "×"
document.querySelectorAll("#closeModal").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
});

// Fermer au clic à l'extérieur (sur le fond noir)
window.addEventListener("click", (e) => {
    if (e.target === mtvModal || e.target === infoModal) {
        closeAllModals();
    }
});

