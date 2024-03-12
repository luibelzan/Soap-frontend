"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Equipmet() {

    const [equips, setEquips] = useState([]);

    useEffect(() => {
        async function fetchEquips() {
            try {
                const res = await fetch('/api/equipment/getAllEquips');
                const data = await res.json();
                setEquips(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchEquips();
    }, []);

    async function deleteEquip(idEquip) {
        const objetoJSON = { id_equipo: idEquip };
        try {
            const res = await fetch('/api/equipment/deleteEquip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objetoJSON)
            });

            if (res.ok) {
                const updatedEquips = equips.filter(equip => equip.id_equipo !== idEquip);
                setEquips(updatedEquips);
            } else {
                console.error('Error al eliminar el equipo');
            }
        } catch(error) {
            console.error(error);
        }
    }

    return(
        <main id="main">
            <div>
                <h1>Equipments</h1>
                <Link href="/equipment/new">New Equipment</Link>
                <u1>
                {equips.map(e => (
                    <li key={e.id_equipo}>Id: {e.id_equipo}, Tipo: {e.tip_equipo}
                        <Link href={`/equipment/update/${e.id_equipo}`}>Update</Link>
                        <button onClick={() => deleteEquip(e.id_equipo)}>Delete</button>
                    </li>
                ))}
                </u1>
            </div>
            </main>
      );
}