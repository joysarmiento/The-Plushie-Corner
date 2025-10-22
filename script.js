document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".page-overlay");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link =>
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            overlay.classList.remove("active");
        })
    );

    overlay.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
    });


    document.querySelectorAll(".quantity-controls").forEach(container => {
        const minusBtn = container.querySelector(".minus-button");
        const plusBtn = container.querySelector(".plus-button");
        const input = container.querySelector(".quantity-input");

        minusBtn.addEventListener("click", () => {
            let value = parseInt(input.value) || 1;
            if (value > 1) input.value = value - 1;
        });

        plusBtn.addEventListener("click", () => {
            let value = parseInt(input.value) || 1;
            input.value = value + 1;
        });
    });
});