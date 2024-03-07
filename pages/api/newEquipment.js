import pool from "@/dbConfig";

export default async function handler(req, res) {
    const { idEquip, tipEquip, nomEquip, idLin, idTrafo, idCt, idDist } = req.body;
    const query = `
            INSERT INTO t_equipos (id_equipo, tip_equipo, nom_equipo, id_linea, id_trafo, id_ct, id_distribuidora)
                VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    if(req.method === 'POST') {
        try {
            const result = await pool.query(query, [idEquip, tipEquip, nomEquip, idLin, idTrafo, idCt, idDist]);
            res.status(200).json({ message: 'Datos insertados correctamente' });
        } catch(error) {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Error'})
        }
    } else {
        try {
            const { rows } = await pool.query(`SELECT * FROM public.t_equipos
            ORDER BY id_equipo ASC `);
            res.status(200).json(rows);
        } catch(error) {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Error'})
        }
    }
      
}
