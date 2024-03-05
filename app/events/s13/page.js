"use client"
import { useEffect, useState } from "react";

export default function s13() {

    const [s13, setS13] = useState([]);

    useEffect(() => {
        async function fetchS13() {
            try {
                const res = await fetch('/api/s13');
                const data = await res.json();
                setS13(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchS13();
    }, []);

    return (
            <main id="main">
            <div>
                <h1>S13 events</h1>
                <u1>
                {s13.map(event => (
                    <li key={event.id}>Id: {event.idPet}, Version: {event.version}, Cnc: {event.cnc}, Cnt: {event.cnt}, Fh: {event.fh}, Et: {event.et}, C: {event.c}, D1: {event.d1}, D2: {event.d2}</li>
                ))}
                </u1>
            </div>
            </main>
      );

}