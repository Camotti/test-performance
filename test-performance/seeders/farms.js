import fs from 'fs'; //library that reads all the documents txt,pdf,img
import path from 'path';
import csv from 'csv-parser' // library ti read csv documents
import { pool } from './connection_db.js'



export async function farms() {  //function load farms
    const loadfarms = path.resolve('');
    const farm = [];

    
    return new Promise((resolve, reject) => {
        fs.createReadStream(loadfarms)
            .pipe(csv())
            .on("data", (fila) => {   //add to the end 
                farm.push([     // push to create an array
                    fila.farm_id,
                    fila.farm_name,
                    fila.region
                    
                ]);
            })
            .on('end', async () => {  //what i want when the data is on this.
                try {
                    const sql = 'INSERT INTO farms(farm_id,arm_name,region) VALUES ?'; // it's a query
                    // CAMBIO 2: 
                    const [result] = await pool.query(sql, [farm]);

                    
                    console.log(`added ${result.affectedRows} farms`);
                    resolve();

                } catch (error) {
                    console.error('error at insert:', error.message);
                    reject(error);
                }
            })
            .on('error', (error) => {  //function to add a new error 
                console.error('error al leer el archivo:', error.message); // to catch better the error
                reject(error);
            });
    });
}