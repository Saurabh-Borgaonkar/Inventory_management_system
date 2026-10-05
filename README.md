# Inventory Management System

A REST API based Inventory Management System built using Node.js, Express.js and MongoDB.

## Project Overview

This project provides APIs to manage products, stock and inventory transactions.

The system allows users to:

- Create products
- View all products
- Purchase products
- Restock products
- View transaction history of a product
- Automatically update available stock
- Store purchase and restock transactions

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman for API testing

## Project Structure

```text
Inventory management system/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controller/
│   │   └── productController.js
│   │
│   ├── models/
│   │   ├── Product.js
│   │   └── Transaction.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── .gitignore
