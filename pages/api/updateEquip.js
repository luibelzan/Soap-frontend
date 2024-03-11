import pool from "@/dbConfig";

export default async function handler(req, res) {
    const { idEquip, tipEquip, nomEquip, idLin, idTrafo, idCt, idDist } = req.body;
    const query = `
            UPDATE t_equipos SET tip_equipo = $2,
            nom_equipo = $3,
            id_linea = $4,
            id_trafo = $5,
            id_ct = $6,
            id_distribuidora = $7 WHERE id_equipo = $1`;
    if(req.method === 'POST') {
        try {
            const result = await pool.query(query, [idEquip, tipEquip, nomEquip, idLin, idTrafo, idCt, idDist]);
            res.status(200).json({ message: 'Datos actualizados correctamente' });
        } catch(error) {
            console.error('Error: ', error);
            res.status(500).json({ message: 'Error'})
                    }
                }
}
