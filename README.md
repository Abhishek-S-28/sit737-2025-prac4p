# Calculator Microservice

This project is a **simple calculator microservice** built using **Node.js and Express**. It provides REST API endpoints to perform basic arithmetic operations (**addition, subtraction, multiplication, division**) and logs all requests using **Winston**.

## Features
- Supports **addition, subtraction, multiplication, and division** via RESTful API.
- Handles **input validation** and provides meaningful error messages.
- Implements **logging** to track requests and errors using Winston.

---

## Prerequisites
Ensure you have the following installed:

- **Node.js** ([Download](https://nodejs.org/en/download/))
- **Git** ([Download](https://git-scm.com/downloads))
- **Visual Studio Code (VS Code)** ([Download](https://code.visualstudio.com/))

---

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Abhishek-S-28/sit737-2025-prac4p.git
cd sit737-2025-prac4p
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Microservice
```sh
node calculator.js
```

The service will start at `http://localhost:3000`.

---

## API Usage
### **Endpoints**
The following endpoints are available:

| Operation     | Endpoint Example |
|--------------|----------------------------------|
| Addition     | `GET /add?num1=10&num2=5`       |
| Subtraction  | `GET /subtract?num1=10&num2=5`  |
| Multiplication | `GET /multiply?num1=10&num2=5` |
| Division     | `GET /divide?num1=10&num2=5`    |

### **Example API Request**
**GET Request:**
```sh
http://localhost:3000/add?num1=10&num2=5
```

**Response:**
```json
{
  "operation": "add",
  "num1": 10,
  "num2": 5,
  "result": 15
}
```

### **Error Handling**
- If **num1 or num2** is missing or not a number:
  ```json
  { "error": "Invalid input. Please provide numbers." }
  ```
- If **division by zero** is attempted:
  ```json
  { "error": "Error: Division by zero" }
  ```

---

## Logging
Logging is implemented using **Winston**.

### **Log Files**
- `logs/combined.log` → Logs all API requests
- `logs/error.log` → Logs only error messages

### **View Logs in Real-time**
```sh
tail -f logs/combined.log
```

---

## Deployment

### 1️⃣ Initialize Git (if not done already)
```sh
git init
git add .
git commit -m "Initial commit - Calculator Microservice"
```

### 2️⃣ Add Remote Repository
```sh
git remote add origin <repository link>
```

### 3️⃣ Push the Code
```sh
git push -u origin main
```

---

## Author
**Abhishek S**

This project is created for **SIT737 - Cloud Native Application Development**.

