import pool from "@/dbConfig";

export default async function handler(req, res) {
        try {
            await client.query('UPDATE t_equipos SET nombre = $1, descripcion = $2 WHERE id = $3', [nombre, descripcion, id]);
            res.status(200);
        } catch(error) {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Error'})
        }
}
