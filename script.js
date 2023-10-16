document.addEventListener("DOMContentLoaded", function() {
    const customerTable = document.getElementById("customerTable");
    const sortButton = document.getElementById("sortButton");
    let ascendingOrder = true;

    sortButton.addEventListener("click", function() {
        const rows = Array.from(customerTable.rows).slice(1); // Skip the header row
        rows.sort((a, b) => {
            const nameA = a.cells[0].textContent.toLowerCase();
            const nameB = b.cells[0].textContent.toLowerCase();

            if (ascendingOrder) {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });

        while (customerTable.rows.length > 1) {
            customerTable.deleteRow(1);
        }

        rows.forEach(row => customerTable.tBodies[0].appendChild(row));

        ascendingOrder = !ascendingOrder;
        sortButton.textContent = ascendingOrder ? "Sort Ascending" : "Sort Descending";
    });
});
