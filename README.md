Finance Application - AI-Powered Finance Tracker

Features:

### ✨ AI-Powered Functionality
- Smart Receipt Scanner – Upload a receipt and let AI auto-fill transaction data.
- AI Insights – Monthly financial insights emailed to users with personalized suggestions.
- Budget Alert Emails – Get notified when you're approaching your monthly budget.

📊 Finance Management
- 💼 Multi-account support (e.g. personal, savings, investments).
- 💵 Track income & expenses across all accounts.
- 📈 Interactive charts (daily, 7 days, monthly, 3 months, 6 months, custom).
- 🔄 Recurring transaction support (e.g. salary, subscriptions).
- 🔄 Cron jobs to auto-add recurring transactions.

 📇 Transactions
- 📝 Add, edit, or delete transactions.
- 🔍 Filter by category, type (income/expense), recurring or non-recurring.
- 🗑️ Bulk delete transactions.
- 📂 Transaction search functionality.

 👤 User Features
- 🔐 Google Authentication (via Clerk/Auth.js or similar).
- 🧾 Update username and profile picture.
- 💰 Set and manage monthly budget per account.
- 📨 Monthly email with personalized financial reports.

### 💻 Tech Stack

| Technology     | Purpose                        |
|----------------|--------------------------------|
| Next.js        | React framework for frontend & backend |
| Prisma         | ORM to connect with PostgreSQL |
| PostgreSQL     | Relational database            |
| Tailwind CSS   | Utility-first styling          |
| ShadCN UI      | Styled components              |
| React Hook Form + Zod | Robust form validation |
| Clerk/Auth.js  | Authentication provider        |
| CRON Jobs      | Schedule monthly report & recurring txn |
| AI Service     | OCR for receipt scanning       |
