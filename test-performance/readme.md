#  AGRO Management System

# Description

This project implements a basic system that organice the information of the company agrovida.The goal is to organice all the information about farms, crops, monitoring sensors and production reports  in one line structure using all excel's information. 


# Technologies Used

- **Node.js** (v22 recommended) – Backend runtime
- **Express.js** – REST API framework
- **MySQL** – Relational database
- **mysql2** – MySQL client library
- **fs** – File system operations
- **csv-parser** – Initial data loading from CSV
- **HTML5** – Dashboard structure
- **Postman** – API testing
- **Visual Studio Code** – Development editor
- **GitHub** – Version control
- **JavaScript** – Main programming language
- **Javascript**
-




## 📂 Database Normalization
The original Excel file was analyzed and manually normalized following the nexts steps:

1. **1NF** – Removed repeating groups and ensured atomic values.
2. **2NF** – Eliminated partial dependencies by creating separate tables for entities such as **farms**, **crops**, **production_reports**, **reader_sensors**, **technicians**.
3. **3NF** – Removed transitive dependencies, keeping only the attributes directly related to the primary key in each table.



## Relational Model
![Database Model](./docs/agro%20data%20solution_camilo_rodriguez.drawio.png)  

# project structure

test-performance/
├─ docs
├─ node_modules
│  ├─ seeders
│  ├─ server
│  ├─ src
│  │  
│  ├─ index.html 
│  │   
│  │  
│  └─ package-lock.json
│     └─ package.json
└─ readme


## 📌 How to Run the Project
1. Clone the repository:
```bash
git clone https://github.com/camotti/test-performance
```
2. Install dependencies:
```bash
npm install
```
3. Import the database:
```bash
mysql -u root -p < sql/database.sql
```
4. Load CSV data into the database.
5. Start the server:
```bash
npm start
```

##  Developer Info
**Name:** Camilo Andrés Rodríguez Pisciotti  
**Clan:** Malecon
**Email:** camiropi97@gmail.com