document.addEventListener("DOMContentLoaded", function () {
    // Select all price buttons
    const priceButtons = document.querySelectorAll(".price-btn");

    priceButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent any default behavior

            // Remove highlight from all jerseys
            document.querySelectorAll(".jersey-item").forEach(item => {
                item.style.border = "none";
            });

            // Add highlight to the parent jersey item
            const jerseyItem = button.closest(".jersey-item");
            if (jerseyItem) {
                jerseyItem.style.border = "2px solid #e52e71";
            }
        });
    });
});
