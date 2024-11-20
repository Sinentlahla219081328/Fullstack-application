
# Bookstore E-Commerce Website

This is an e-commerce website for a bookstore that allows users to register, login, browse products, add them to a shopping cart, and complete secure checkout. It also includes order management and tracks order history for users.

## Features

- **User Authentication**: Users can register and login securely.
- **Product Catalog**: Displays products with detailed information such as price, description, and images.
- **Shopping Cart**: Allows users to add, remove, and modify items in their cart.
- **Order Management**: Users can view their past orders and order history.
- **Secure Checkout**: Users can securely complete their purchase.

## Technologies Used

### Front-End:
- **HTML**: For structuring the website's content.
- **CSS**: For styling the user interface.
- **JavaScript**: For interactivity and dynamic content.
- **React**: Used for building the front-end user interface, managing state, and creating a responsive and interactive experience.

### Back-End:
- **Node.js**: A JavaScript runtime used for building the server-side logic of the application.
- **Express.js**: A Node.js framework used for handling routing, middleware, and managing requests to the server.

### Database:
- **MongoDB** (or **PostgreSQL**): MongoDB is used to store user, product, and order data in a NoSQL format. Alternatively, PostgreSQL could be used if a relational database is preferred.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (including npm)
- [MongoDB](https://www.mongodb.com/try/download/community) or [PostgreSQL](https://www.postgresql.org/download/) (depending on your choice of database)

### Setting up the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/bookstore-ecommerce.git
    cd bookstore-ecommerce
    ```

2. Install the front-end dependencies:
    ```bash
    cd frontend
    npm install
    ```

3. Install the back-end dependencies:
    ```bash
    cd backend
    npm install
    ```

4. Set up your database:
    - **MongoDB**: Ensure MongoDB is installed and running. You may also need to set up a `config.js` file with your database URI.
    - **PostgreSQL**: If using PostgreSQL, create a database and update the `config.js` with the connection string.

5. Start the admin side:

    cd backend
    npm run dev


6. Start the front-end application:

    cd frontend
   npm run dev


7.Start the server application:

   cd backend
   npm run server

  

The website should now be running locally at
## Features Walkthrough

### 1. **User Authentication**:
   - **Register**: Users can create a new account with their email, username, and password.
   - **Login**: Registered users can log in securely with their credentials.
   - **Session Management**: Sessions are maintained so that users stay logged in until they log out.
   - **Password Hashing**: User passwords are hashed for security.

### 2. **Product Catalog**:
   - Displays a list of books available for purchase, including:
     - Title, price, and description.
     - Product images.
   - Users can filter products based on categories or search by title/author.

### 3. **Shopping Cart**:
   - Users can add products to their shopping cart.
   - Items can be removed or quantity adjusted within the cart.
   - The total price updates dynamically as users add or remove items.

### 4. **Order Management**:
   - Users can view their past orders in their order history.
   - Track the status of current orders.
   - Manage delivery addresses and payment options during checkout.

### 5. **Secure Checkout**:
   - Users can securely checkout using available payment methods.
   - Integration with payment gateways such as Stripe or PayPal for handling transactions.

## Directory Structure






   

