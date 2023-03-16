import { pool } from "../config/mysql-config.js";


export async function getParentMenus() {
    const [rows] = await pool.query(`select * from products`)
    return rows
}
