"use client"
import { useEffect, useState } from "react";

export default function s31() {

    const [s31, setS31] = useState([]);

    useEffect(() => {
        async function fetchS31() {
            try {
                const res = await fetch('/api/s31');
                const data = await res.json();
                setS31(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchS31();
    }, []);


    return (
        <main id="main">
        <div>
            <h1>S31 events</h1>
            <u1>
            {s31.map(event => (
                <li key={event.id}>Id: {event.idPet}, Version: {event.version}, Cnc: {event.cnc}, ClientId: {event.clientId}, Status: {event.status}, KeyRequest: {event.keyRequest}</li>
            ))}
            </u1>
        </div>
        </main>
  );
}