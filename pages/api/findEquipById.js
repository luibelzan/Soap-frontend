import pool from "@/dbConfig";

export default async function handler(req, res) {
        try {
            const { id } = req.body; 
            const { rows } = await pool.query('SELECT * FROM t_equipos WHERE id_equipo = $1', [id]);
            res.status(200).json(rows);
        } catch(error) {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Error'})
        }
}
