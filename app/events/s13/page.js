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
                <h1>Administrator dashboard</h1>
                <u1>
                {s13.map(event => (
                    <li key={event.id}>{event.fh}</li>
                ))}
                </u1>
            </div>
            </main>
      );

}