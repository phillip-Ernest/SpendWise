# SpendWise – Personal Expense Tracker

## 1. Project Overview

SpendWise is a personal financial management application developed using HTML, CSS and JavaScript.

The application helps users manage their finances by recording income and expenses, organising transactions into categories, calculating total income, calculating expenses and displaying the remaining balance.

The main purpose of SpendWise is to help users monitor their spending habits and make better financial decisions.

## 2. Project Objectives

The objectives of SpendWise are:

- To record personal income.
- To record daily expenses.
- To organise transactions into categories.
- To calculate total income and expenses automatically.
- To display the remaining financial balance.
- To store transaction records using browser Local Storage.
- To provide a simple and responsive user interface.

## 3. Technologies Used

The project uses the following technologies:

- **HTML5:** Creates the structure and content of the application.
- **CSS3:** Provides styling, colours, layouts and responsive design.
- **JavaScript:** Implements calculations, functions and user interactions.
- **Browser Local Storage:** Saves transaction records so that they remain available after refreshing the browser.

## 4. JavaScript Concepts Implemented

### A. Variables

Variables are used to store information required by the application.

Examples include:

- `transactions` stores all transaction records.
- `totalIncome` stores the total income.
- `totalExpenses` stores the total expenses.
- `balance` stores the remaining amount.

The `let` keyword is used for variables whose values can change, while `const` is used for references that are not reassigned.

### B. Arrays

An array is used to store multiple transaction records.

Example:

`let transactions = [];`

Each new income or expense transaction is added to the transactions array.

### C. Objects

Objects are used to represent individual transactions.

Each transaction contains:

- ID
- Description
- Amount
- Transaction type
- Category
- Date

### D. User Input

HTML forms collect information from users, including the transaction description, amount, type, category and date.

JavaScript retrieves the information using DOM methods such as `document.getElementById()`.

The application validates the information before adding a transaction.

### E. Conditional Statements

Conditional statements are used to distinguish income from expenses.

For example:

`if (transaction.type === "income")`

Income is added to the total income, while expenses are added to total expenses.

### F. Loops

The `forEach()` method processes the transactions array.

It is used to calculate financial totals and display transaction records.

### G. Functions

Functions organise the application code into smaller tasks.

The main functions include:

- `saveTransactions()` – Saves transactions in Local Storage.
- `calculateTotals()` – Calculates total income, expenses and balance.
- `displayTransactions()` – Displays transaction records.
- `addTransaction()` – Adds new transactions.

### H. DOM Manipulation

DOM manipulation allows JavaScript to update the HTML page.

For example, the application updates the total income, total expenses, balance and transaction history without reloading the page.

### I. Event Listeners

The application uses an event listener to detect when a user submits the transaction form.

Example:

`transactionForm.addEventListener("submit", addTransaction);`

### J. Local Storage

Local Storage is used to save transaction information in the browser.

The `JSON.stringify()` method converts the transaction array into a string for storage, while `JSON.parse()` retrieves and converts the stored information back into JavaScript data.

## 5. How Calculations Are Performed

SpendWise automatically calculates the financial totals whenever a transaction is added.

The calculations are:

**Total Income:** Sum of all income transactions.

**Total Expenses:** Sum of all expense transactions.

**Remaining Balance:**

`Balance = Total Income - Total Expenses`

For example:

- Total Income = KSh 50,000
- Total Expenses = KSh 7,000
- Remaining Balance = KSh 43,000

## 6. How Functions Organise the Code

Functions make the application easier to understand, maintain and update.

Each function performs a specific task:

1. `addTransaction()` collects and processes user input.
2. `calculateTotals()` performs financial calculations.
3. `displayTransactions()` displays transaction information.
4. `saveTransactions()` stores data in Local Storage.

## 7. Application Features

- Add income transactions.
- Add expense transactions.
- Categorise transactions.
- Record transaction dates.
- Calculate financial totals automatically.
- Display transaction history.
- Save transaction records in Local Storage.
- Responsive user interface.

## 8. How to Run the Application

1. Download or clone the SpendWise GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Ensure all four project files are available.
4. Run a local server using:

`python -m http.server 8000`

5. Open a browser and visit:

`http://localhost:8000`

## 9. Project Structure

    SPENDWISE/
    |
    |-- index.html
    |-- style.css
    |-- script.js
    |-- README.md

## 10. Conclusion

SpendWise demonstrates the practical application of HTML, CSS and JavaScript in developing a personal expense management system.

The project provides practical experience in variables, arrays, objects, functions, conditional statements, loops, DOM manipulation, event listeners and Local Storage.

## 11. Author

**Phillip Ernest**

Project: SpendWise – Personal Expense Tracker