import pool from "@/dbConfig";

export default async function handler(req, res) {
    const { idEquip, tipEquip, nomEquip, idLin, idTrafo, idCt, idDist } = req.body;
    const query = `
            INSERT INTO t_equipos (id_equipo, tip_equipo, nom_equipo, id_linea, id_trafo, id_ct, id_distribuidora)
                VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    res.status(200).json({ message: 'Datos insertados correctamente' });
    try {
        const result = await pool.query(query, [idEquip, tipEquip, nomEquip, idLin, idTrafo, idCt, idDist]);
        //res.status(200).json(rows);
    } catch(error) {
        console.error('Error: ', error);
        res.status(500).json({ message: 'Error'})
    }
}