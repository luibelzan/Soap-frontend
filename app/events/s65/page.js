"use client"
import { useEffect, useState } from "react";

export default function s65() {

    const [s65, setS65] = useState([]);

    useEffect(() => {
        async function fetchS65() {
            try {
                const res = await fetch('/api/s65');
                const data = await res.json();
                setS65(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchS65();
    }, []);


    return (
        <main id="main">
        <div>
            <h1>S65 events</h1>
            <u1>
            {s65.map(event => (
                <li key={event.id}>Id: {event.idPet}, Version: {event.version}, ErrCat: {event.errCat}, ErrCode: {event.errCode}, Fh: {event.fh}, Et: {event.et}, C: {event.c}, D1: {event.d1}, D2: {event.d2}</li>
            ))}
            </u1>
        </div>
        </main>
  );
}