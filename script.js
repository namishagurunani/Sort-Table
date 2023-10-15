document.addEventListener("DOMContentLoaded", function() {
    const customerTable = document.getElementById("customerTable");
    const sortButton = document.getElementById("sortButton");

    sortButton.addEventListener("click", function() {
        const rows = Array.from(customerTable.rows).slice(1); // Skip the header row
        rows.sort((a, b) => {
            const nameA = a.cells[0].textContent.toLowerCase();
            const nameB = b.cells[0].textContent.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        // Clear the table
        while (customerTable.rows.length > 1) {
            customerTable.deleteRow(1);
        }

        // Rebuild the table with sorted data
        rows.forEach(row => customerTable.tBodies[0].appendChild(row));
    });
});
