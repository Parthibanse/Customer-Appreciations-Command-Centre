document.addEventListener("DOMContentLoaded", function () {
    const appreciations = [
        { date: "2025-03-01", agent: "Jayant Kumar", customer: "SABRISH", vehicle: "MH01EM1922", message: "Boot service excellent", account: "TATA MOTORS EV" },
        { date: "2025-03-01", agent: "Jaidev V", customer: "DAMODAR NAGESWARARAO", vehicle: "MH14MC1352", message: "Thank you for support!", account: "TATA MOTORS EV" },
        { date: "2025-03-01", agent: "Vijay Kumar", customer: "MS. BABITA RANI", vehicle: "DL9EV1121", message: "Great RSA service!", account: "TATA MOTORS EV" }
    ];

    const tableBody = document.querySelector("#appreciations-table tbody");
    const filterDropdown = document.getElementById("account-filter");

    // Populate account dropdown
    let accounts = ["All Accounts", ...new Set(appreciations.map(app => app.account))];
    accounts.forEach(account => {
        let option = document.createElement("option");
        option.value = account;
        option.textContent = account;
        filterDropdown.appendChild(option);
    });

    function displayAppreciations(filter = "all") {
        tableBody.innerHTML = "";
        appreciations
            .filter(app => filter === "all" || app.account === filter)
            .forEach(app => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${app.date}</td>
                    <td>${app.agent}</td>
                    <td>${app.customer}</td>
                    <td>${app.vehicle}</td>
                    <td>${app.message} 🎊</td>
                `;
                tableBody.appendChild(row);
            });
    }

    filterDropdown.addEventListener("change", function () {
        displayAppreciations(this.value);
    });

    displayAppreciations();
});
