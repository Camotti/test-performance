import mysql from"mysql2/promise";

    export const pool = mysql.createPool({  // this is the key to create the endpoints, pool permite create conections. 

        host: "localhost",
        database:"agrodata_camilo_rodriguez_malecon",
        port:"3306",
        user:"root",
        password:"Qwe.123*",
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0

    });
     
    async function connection() {
        try {
            const connect = await pool.getConnection();
            console.log("THE CONNECTION IS Working")

            connect.release();
            //this function close the pool if not working.
        } catch (error) {
            console.error("Error at the moment of connect to MYSQL:", error.message);
        }
        
    }

    connection();