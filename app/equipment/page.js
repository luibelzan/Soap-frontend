"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Equipmet() {

    const [equips, setEquip] = useState([]);

    useEffect(() => {
        async function fetchEquips() {
            try {
                const res = await fetch('/api/getAllEquips');
                const data = await res.json();
                setEquip(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchEquips();
    }, []);

    return(
        <main id="main">
            <div>
                <h1>Equipments</h1>
                <Link href="/equipment/new">New Equipment</Link>
                <u1>
                {equips.map(e => (
                    <li key={e.id_equipo}>Id: {e.id_equipo}, Tipo: {e.tip_equipo}<Link href={`/equipment/update/${e.id_equipo}`}>Update</Link></li>
                ))}
                </u1>
            </div>
            </main>
      );
}