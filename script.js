// ==========================================
// SPENDWISE - PERSONAL EXPENSE TRACKER
// ==========================================

// 1. VARIABLES AND ARRAYS

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;

// 2. GET HTML ELEMENTS

const transactionForm = document.getElementById("transactionForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");

const incomeDisplay = document.getElementById("totalIncome");
const expensesDisplay = document.getElementById("totalExpenses");
const balanceDisplay = document.getElementById("balance");
const transactionList = document.getElementById("transactionList");

// 3. SET DEFAULT DATE

dateInput.value = new Date().toISOString().split("T")[0];

// 4. SAVE TRANSACTIONS IN LOCAL STORAGE

function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// 5. CALCULATE TOTAL INCOME, EXPENSES AND BALANCE

function calculateTotals() {

    totalIncome = 0;
    totalExpenses = 0;

    transactions.forEach(function(transaction) {

        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else if (transaction.type === "expense") {
            totalExpenses += transaction.amount;
        }

    });

    balance = totalIncome - totalExpenses;

    incomeDisplay.textContent = "KSh " + totalIncome.toFixed(2);
    expensesDisplay.textContent = "KSh " + totalExpenses.toFixed(2);
    balanceDisplay.textContent = "KSh " + balance.toFixed(2);

}

// 6. DISPLAY TRANSACTIONS

function displayTransactions() {

    transactionList.innerHTML = "";

    if (transactions.length === 0) {
        transactionList.innerHTML = "<p>No transactions yet.</p>";
        return;
    }

    transactions.forEach(function(transaction) {

        const item = document.createElement("div");
        item.className = "transaction-item";

        const details = document.createElement("div");

        const title = document.createElement("h4");
        title.textContent = transaction.description;

        const information = document.createElement("p");
        information.textContent =
            transaction.category + " | " + transaction.date;

        details.appendChild(title);
        details.appendChild(information);

        const amount = document.createElement("span");

        if (transaction.type === "income") {
            amount.textContent = "+ KSh " + transaction.amount.toFixed(2);
            amount.className = "income";
        } else {
            amount.textContent = "- KSh " + transaction.amount.toFixed(2);
            amount.className = "expense";
        }

        item.appendChild(details);
        item.appendChild(amount);

        transactionList.appendChild(item);

    });

}

// 7. ADD NEW TRANSACTION

function addTransaction(event) {

    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const type = typeInput.value;
    const category = categoryInput.value;
    const date = dateInput.value;

    if (description === "" || !Number.isFinite(amount) || amount <= 0 || !date) {
        alert("Please enter valid transaction details.");
        return;
    }

    const transaction = {
        id: Date.now(),
        description: description,
        amount: amount,
        type: type,
        category: category,
        date: date
    };

    transactions.push(transaction);

    saveTransactions();

    calculateTotals();

    displayTransactions();

    transactionForm.reset();

    dateInput.value = new Date().toISOString().split("T")[0];

    alert("Transaction added successfully!");

}

// 8. EVENT LISTENER

transactionForm.addEventListener("submit", addTransaction);

// 9. INITIALISE THE APPLICATION

calculateTotals();

displayTransactions();