import pool from "@/dbConfig";

export default async function handler(req, res) {
        try {
            const { rows } = await pool.query(`SELECT * FROM public.t_ct
            ORDER BY id_ct ASC `);
            res.status(200).json(rows);
        } catch(error) {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Error'})
        }
}
