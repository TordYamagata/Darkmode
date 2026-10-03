// ========================================
// ELEMENTOS DO HTML
// ========================================

const body = document.body;

const darkModeBtn =
    document.getElementById("darkModeBtn");

const modal =
    document.getElementById("modal");

const openModal =
    document.getElementById("openModal");

const openModalSecond =
    document.getElementById("openModalSecond");

const closeModal =
    document.getElementById("closeModal");

const confirmModal =
    document.getElementById("confirmModal");


// ========================================
// DARK MODE
// ========================================

// Verifica se existe um tema salvo

const temaSalvo =
    localStorage.getItem("tema");


// Se estiver salvo como dark,
// ativa automaticamente

if (temaSalvo === "dark") {

    body.classList.add("dark");

    darkModeBtn.textContent =
        "☀️";

}


// ========================================
// ALTERAR DARK MODE
// ========================================

darkModeBtn.addEventListener(
    "click",
    function () {

        body.classList.toggle("dark");


        // Verifica se o dark mode está ativo

        const darkAtivo =
            body.classList.contains("dark");


        // Altera o ícone

        if (darkAtivo) {

            darkModeBtn.textContent =
                "☀️";

            darkModeBtn.setAttribute(
                "aria-label",
                "Ativar modo claro"
            );


            // Salva preferência

            localStorage.setItem(
                "tema",
                "dark"
            );

        } else {

            darkModeBtn.textContent =
                "🌙";

            darkModeBtn.setAttribute(
                "aria-label",
                "Ativar modo escuro"
            );


            // Salva preferência

            localStorage.setItem(
                "tema",
                "light"
            );

        }

    }
);


// ========================================
// FUNÇÃO PARA ABRIR MODAL
// ========================================

function abrirModal() {

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


// ========================================
// FUNÇÃO PARA FECHAR MODAL
// ========================================

function fecharModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


// ========================================
// EVENTOS PARA ABRIR O MODAL
// ========================================

openModal.addEventListener(
    "click",
    abrirModal
);


openModalSecond.addEventListener(
    "click",
    abrirModal
);


// ========================================
// BOTÃO X
// ========================================

closeModal.addEventListener(
    "click",
    fecharModal
);


// ========================================
// BOTÃO "ENTENDI"
// ========================================

confirmModal.addEventListener(
    "click",
    fecharModal
);


// ========================================
// CLICAR FORA DO MODAL
// ========================================

modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            fecharModal();

        }

    }
);


// ========================================
// TECLA ESC
// ========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            fecharModal();

        }

    }
);