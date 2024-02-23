"use client"
import { useEffect, useState } from "react";

export default function s15() {


    const [s15, setS15] = useState([]);

    useEffect(() => {
        async function fetchS15() {
            try {
                const res = await fetch('/api/s15');
                const data = await res.json();
                setS15(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchS15();
    }, []);


    return (
        <main id="main">
        <div>
            <h1>S15 events</h1>
            <u1>
            {s15.map(event => (
                <li key={event.id}>Id: {event.idPet}, Version: {event.version}, Cnc: {event.cnc}, Fh: {event.fh}, Et: {event.et}, C: {event.c}, D1: {event.d1}, D2: {event.d2}</li>
            ))}
            </u1>
        </div>
        </main>
  );
}