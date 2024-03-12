import pool from "@/dbConfig";

export default async function handler(req, res) {
        try {
            const { id_equipo } = req.body; 
            const { rows } = await pool.query('DELETE FROM t_equipos WHERE id_equipo = $1', [id_equipo]);
            res.status(200).json(rows);
        } catch(error) {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Error'})
        }
}
