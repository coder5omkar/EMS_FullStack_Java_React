# Employee Management System

This is a **Full Stack Employee Management System** built with **Java Spring Boot** on the backend and **React (with Vite)** on the frontend. The project performs CRUD (Create, Read, Update, Delete) operations for managing employee data.

## Features
- Add new employees
- View a list of employees
- Update employee details
- Delete employees (with confirmation alert)
- User-friendly interface

---

## Tech Stack

### Backend
- **Java 17**
- **Spring Boot**
- **Spring Data JPA**
- **MySQL Database**

### Frontend
- **React**
- **Vite**
- **Axios**
- **Bootstrap (for styling)**

---

## Prerequisites

1. **Backend Requirements**:
   - Java 17 or higher
   - MySQL Server
   - Maven

2. **Frontend Requirements**:
   - Node.js (LTS version recommended)
   - npm or yarn

---

## Running Instructions

### Backend (Spring Boot)
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/employee-management-system.git
   cd employee-management-system
   ```

2. **Update MySQL Configuration**:
   Open `application.properties` in `src/main/resources` and configure your database connection:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   ```

3. **Create MySQL Database**:
   Create a database named `employee_db` in MySQL:
   ```sql
   CREATE DATABASE employee_db;
   ```

4. **Run the Application**:
   Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   The backend server will start at `http://localhost:8080`.

---

### Frontend (React + Vite)
1. **Navigate to the Frontend Folder**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the React App**:
   ```bash
   npm run dev
   ```
   The frontend server will start at `http://localhost:5173`.

4. **Access the Application**:
   Open your browser and visit `http://localhost:5173`.

---

## API Endpoints (Backend)
- `GET /api/employees`: Retrieve all employees
- `POST /api/employees`: Add a new employee
- `PUT /api/employees/{id}`: Update an employee
- `DELETE /api/employees/{id}`: Delete an employee

---

## Project Structure

### Backend
```
src/
├── main/
│   ├── java/com/example/ems/  # Backend code (Controllers, Services, Repositories)
│   └── resources/             # Configuration files
├── test/                      # Test cases
```

### Frontend
```
frontend/
├── src/
│   ├── components/            # React components
│   ├── services/              # Axios service for API calls
│   ├── App.jsx                # Main app component
```

---

## Author
This project is built and maintained by **[Omkar Amale]**. Feel free to contribute or provide feedback!

---

## Credits
This project is inspired from **[Ramesh Fadtare]**. Course reference: [Full Stack Java Development with Spring Boot & React](https://synechron.udemy.com/course/full-stack-java-development-with-spring-boot-react/learn/lecture/38718748#overview) on Udemy.


## License
This project is licensed under the MIT License.



